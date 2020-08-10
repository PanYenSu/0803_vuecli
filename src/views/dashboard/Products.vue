<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>
        <h2>這是後台產品頁面</h2>
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
      isLoading: false,

    };
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
    logout() {
      const url = `${this.api}auth/logout`;
      this.$hppt.post(url, { api_token: this.token }).then(() => {
        this.$router.push('/login');
        document.cookie = 'hexToken=;expires=;';
        console.log('token 已清除');
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
