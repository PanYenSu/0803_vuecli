<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>

      <div class="row">
        <div class="col mt-3 info">
          <h2>優惠券管理頁面</h2>
        </div>
        <div class="col col-md-auto mt-4">
          <button type="button" class="btn btn-outline-secondary"
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
        <div id="coupontModal" class="modal fade" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if='tempCoupon.id'>編輯優惠券</span><span v-else>新增優惠券</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                <!-- <label :for="'img' + i">輸入圖片網址</label>
                <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]"
                type="text" class="form-control"
                    placeholder="請輸入圖片連結"> -->
                </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">優惠券名稱</label>
                <input id="title" v-model="tempCoupon.title"
                type="text" class="form-control" placeholder="請輸入優惠券名稱">
              </div>
              <!-- <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input id="category" v-model="tempProduct.category"
                  type="text" class="form-control"
                    placeholder="請輸入分類" >
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input id="unit" v-model="tempProduct.unit" type="text" class="form-control"
                    placeholder="請輸入單位">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input id="origin_price" v-model="tempProduct.origin_price"
                  type="number" class="form-control"
                    placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea id="description" v-model="tempProduct.description"
                type="text" class="form-control"
                  placeholder="請輸入產品描述" >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea id="content" v-model="tempProduct.content"
                type="text" class="form-control"
                  placeholder="請輸入說明內容" >
                </textarea>
              </div> -->
              <div class="form-group">
                <div class="form-check custom-switch">
                  <!-- <input id="is_enabled" v-model="tempProduct.enabled"
                  class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>  -->
                  <input v-model='tempCoupon.enabled'
                  type="checkbox" class="custom-control-input" id="customSwitch1" >
                  <label class="custom-control-label" for="customSwitch1">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
             v-if="isLoading === true"></span>
            確認
          </button>
        </div>
      </div>
    </div>
        </div>

    </div>
</template>
<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
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
          $('#delModal').modal('show');
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
