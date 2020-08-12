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
              <th>名稱</th>
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
                <td>{{item.percent}}</td>
                <td>{{item.deadline.datetime}}</td>
                <td>
                  <input v-model="item.enabled" :id='item.id' type="checkbox"
                  class="form-check-input" @change="updateCheckbox(item)">
                  <label :for="item.id">
                    <span v-if='item.enabled' class="text-success">啟用</span>
                    <span v-else>未啟用</span>
                  </label>
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
            <CouponModal :temp-product="tempCoupon" :status='isNew'
            @emitProduct="getCoupons"></CouponModal>
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
      tempCoupon: {},
      pagination: {},
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      isNew: '',
      loadingBtn: '',
      isLoading: '',
    };
  },
  methods: {
    updateCoupon() {

    },
    openCouponModal(isNew, item) {
      console.log($('#cm'));
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempCoupon = {};
          $('#couponModal').modal('show');
          break;
        case 'edit':
          this.loadingBtn = item.id;
          this.isNew = false;
          this.tempCoupon = { ...item };
          $('#couponModal').modal('show');
          this.loadingBtn = '';
          break;
        case 'del':
          this.tempCoupon = { ...item };
          // $('#delModal').modal('show');
          break;
        default:
          break;
      }
    },
    getCoupons(page = 1) {
      console.log(page);
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/admin/ec/coupons?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.coupons = res.data.data;
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
