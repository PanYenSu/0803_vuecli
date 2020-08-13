<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>

      <div class="row">
        <div class="col mt-3 info">
          <h2>優惠券管理頁面</h2>
        </div>
        <div class="col col-md-auto mt-4">
          <button id='cm' type="button" class="btn btn-outline-secondary"
          @click="openCouponModal('new')">建立新優惠券</button>
        </div>
        </div>
        <hr>
         <!-- coupons 列表 -->
          <table class="table">
            <thead class="thead-light">
              <tr class="table-active">
              <th width="100" scope="col">#</th>
              <th width="150">名稱</th>
              <th>優惠碼</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th width="100">是否啟用</th>
              <th width="150">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='(item, index) in coupons' :key='item.id'>
                <th scope="row">{{index+1}}</th>
                <td>{{item.title}}</td>
                <td>{{item.code}}</td>
                <td>{{item.percent}}</td>
                <td>{{item.deadline.datetime}}</td>
                <td>
                  <input id="is_enabled"
                  v-model="item.enabled" type="checkbox"
                  class="form-check-input" @change="updateCheckbox(item)">
                    <span v-if='item.enabled' class="text-success">啟用</span>
                    <span v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button :disabled='loadingBtn === item.id'
                    @click="openCouponModal('edit', item)"
                    class="btn btn-outline-primary btn-sm">編輯</button>
                    <button @click="openCouponModal('del', item)"
                    class="btn btn-outline-danger btn-sm">刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        <!-- 分頁元件 -->
       <Pagination :pages='pagination' @emitPage='getCoupons' ></Pagination>
       <!-- Coupons Modal -->
        <div id="couponModal" class="modal fade" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <CouponModal :temp-coupon="tempCoupon" :status='status' :deadline='deadline'
            @emitCoupon="getCoupons">
            </CouponModal>
        </div>
        <!-- Del Coupon Modal -->
          <div id='delCouponModal' class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                  <h5 class="modal-title">刪除優惠券</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  是否刪除
                  <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button @click="delCoupon" type="button" class="btn btn-danger">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                              v-if="loadingBtn === tempCoupon.id"></span>確認刪除</button>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>
<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import CouponModal from '@/components/CouponModal.vue';

export default {
  components: {
    Pagination,
    CouponModal,
  },
  data() {
    return {
      coupons: [],
      tempCoupon: {
        // deadline_at: 0,
        // title: '',
        // enabled: false,
        // percent: 100,
        // code: '',
      },
      pagination: {},
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      status: '',
      loadingBtn: '',
      isLoading: '',
      deadline: {
        due_date: '',
        due_time: '',
      },
    };
  },
  methods: {
    updateCheckbox(item) {
      // !this.tempProduct.enabled
      const url = `${this.path}${this.uuid}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.tempProduct = { ...item };
      this.$http.patch(url, this.tempProduct).then(() => {
        this.getCoupons();
        this.tempProduct = {};
      });
    },
    openCouponModal(status, item) {
      // console.log($('#cm'));
      this.status = status;
      switch (status) {
        case 'new':
          this.tempCoupon = {};
          $('#couponModal').modal('show');
          break;
        // 由於 const 與 let 宣告環境較特別，故需要在 case 外層宣告一個 {} 確保作用域
        case 'edit': {
          this.loadingBtn = item.id;
          this.tempCoupon = { ...item };
          // 使用 split 切割相關時間戳
          const dedlineAt = this.tempCoupon.deadline.datetime.split(' ');
          [this.deadline.due_date, this.deadline.due_time] = dedlineAt;
          $('#couponModal').modal('show');
          this.loadingBtn = '';
          break;
        }
        case 'del':
          this.tempCoupon = { ...item };
          $('#delCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    delCoupon() {
      this.loadingBtn = this.tempCoupon.id;
      const url = `${this.path}${this.uuid}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.$http.delete(url).then(() => {
        $('#delCouponModal').modal('hide');
        this.getCoupons();
        this.loadingBtn = '';
      })
        .catch((error) => {
          console.log(error);
          this.loadingBtn = '';
        });
    },
    getCoupons(page = 1) {
      console.log(page);
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/admin/ec/coupons?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.coupons = res.data.data;
        console.log(this.coupons[0].deadline.datetime);
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
      })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },

  },
  created() {
    this.getCoupons();
  },
};
</script>
