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
                <td class="text-success">{{item.origin_price}}</td>
                <td class="text">{{item.price}}</td>
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
                    <button :disabled='loadingBtn === item.id' @click="openModal('edit', item)"
                    class="btn btn-outline-primary btn-sm">編輯</button>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                    v-if="loadingBtn === item.id"></span>
                    <button @click="openModal('del', item)"
                    class="btn btn-outline-danger btn-sm">刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

    </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
      },
      pagination: {},
      token: '',
      uuid: process.env.VUE_APP_UUID,
      api: process.env.VUE_APP_APIPATH,
      isNew: '',
      loadingBtn: '',
      isLoading: false,

    };
  },
  openModal() {

  },
  updateCheckbox() {

  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      console.log(page);
      const url = `${this.api}${this.uuid}/admin/ec/products?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;

      //   this.tempProduct = { imageUrl: [], };
      //   $('#productModal').modal('hide');
      })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  created() {
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // // Axios 預設值
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getProducts();
  },
};
</script>
