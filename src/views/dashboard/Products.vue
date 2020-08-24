<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>

      <div class="row">
        <div class="col mt-3 info">
          <h2>產品管理頁面</h2>
        </div>
        <div class="col col-md-auto mt-4">
          <button type="button" class="btn btn-outline-secondary"
          @click="openModal('new')">建立新產品</button>
        </div>
        </div>
        <hr>
          <!-- 產品列表 -->
          <table class="table">
            <thead class="thead-light">
              <tr class="table-active">
              <th scope="col">#</th>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th width="180" >預覽</th>
              <th width="120">原價</th>
              <th width="120"> 售價</th>
              <th width="100">是否啟用</th>
              <th width="150">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='(item, index) in products' :key='item.id'>
                <th scope="row">{{index+1}}</th>
                <td>{{item.category}}</td>
                <td>{{item.title}}</td>
                <td><img height="30" :src="item.imageUrl[0]" alt="" ></td>
                <td class="text-success">{{item.origin_price | currency}}</td>
                <td class="text">{{item.price | currency}}</td>
                <td>
                  <input v-model="item.enabled" :id='item.id' type="checkbox"
                  class="form-check-input" @change="updateCheckbox(item)">
                  <label :for="item.id">
                    <i class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                              v-show="loadingBtn === item.id"></i>
                    <span v-if='item.enabled' class="text-success">啟用</span>
                    <span v-else>未啟用</span>
                  </label>
                </td>
                <td>
                  <div class="btn-group">
                    <button :disabled='loadingBtn === item.id' @click="openModal('edit', item)"
                    class="btn btn-outline-primary btn-sm">
                    <!-- <span class="spinner-border spinner-border-sm"
                    role="status" aria-hidden="true"
                    v-if="loadingBtn === item.id"></span> -->
                    編輯</button>
                    <button @click="openModal('del', item)"
                    class="btn btn-outline-danger btn-sm">刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 分頁元件 -->
          <Pagination :pages='pagination' @emitPage='getProducts' ></Pagination>
          <!-- Product Modal -->
          <div id="productModal" class="modal fade" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Modal :api="api" :temp-product="tempProduct" :status='status'
            @emitProduct="getProducts"></Modal>
          </div>
          <!-- Del Modal -->
          <div id='delModal' class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                  <h5 class="modal-title">刪除產品</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  是否刪除
                  <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button @click="delProduct" type="button" class="btn btn-danger">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                              v-if="loadingBtn === tempProduct.id"></span>確認刪除</button>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Pagination,
    Modal,
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
      },
      pagination: {},
      token: '',
      api: {
        uuid: process.env.VUE_APP_UUID,
        path: process.env.VUE_APP_APIPATH,
      },
      isNew: '',
      loadingBtn: '',
      status: {
        fileUploading: false,
      },
      isLoading: false,
    };
  },
  methods: {
    updateCheckbox(item) {
      this.tempProduct = { ...item };
      this.loadingBtn = this.tempProduct.id;
      const url = `${this.api.path}${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.patch(url, item.enabled).then(() => {
        // this.getProducts();
        this.tempProduct = {
          imageUrl: [],
        };
        this.loadingBtn = '';
      });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempProduct = {
            imageUrl: [],
          };
          $('#productModal').modal('show');
          break;
        case 'edit': {
          this.loadingBtn = item.id;
          this.isNew = false;
          // this.tempProduct = { ...item };
          const url = `${this.api.path}${this.api.uuid}/admin/ec/product/${item.id}`;
          this.$http.get(url).then((res) => {
            this.tempProduct = res.data.data;
            $('#productModal').modal('show');
            this.loadingBtn = '';
          });
          break;
        }
        case 'del':
          this.tempProduct = { ...item };
          $('#delModal').modal('show');
          break;
        default:
          break;
      }
    },
    delProduct() {
      this.loadingBtn = this.tempProduct.id;
      const url = `${this.api.path}${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.delete(url).then(() => {
        $('#delModal').modal('hide');
        this.getProducts();
        this.loadingBtn = '';
        this.$bus.$emit(
          'message:push',
          '商品成功刪除！',
          'success',
        );
      })
        .catch((error) => {
          this.loadingBtn = '';
          this.$bus.$emit('message:push',
            `商品刪除失敗： ${error}`,
            'danger');
        });
    },
    getProducts(page = 1) {
      this.isLoading = true;
      // console.log(page);
      const url = `${this.api.path}${this.api.uuid}/admin/ec/products?page=${page}`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
        this.$bus.$emit(
          'message:push',
          '產品載入成功',
          'success',
        );
      //   $('#productModal').modal('hide');
      })
        .catch((error) => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            `產品載入失敗，${error}`,
            'danger');
        });
    },
  },
  created() {
    // this.isLoading = true;
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // // Axios 預設值
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getProducts();
    // this.isLoading = false;
  },
};
</script>
