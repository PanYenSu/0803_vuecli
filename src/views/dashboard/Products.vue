<template>
    <div>
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

    };
  },
  methods: {
    getProducts(page = 1) {
      console.log(page);
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;

      //   this.tempProduct = { imageUrl: [], };
      //   $('#productModal').modal('hide');
      });
    },
    logout() {
      const url = `${process.env.VUE_APP_APIPATH}auth/logout`;
      this.$hppt.post(url, { api_token: this.token }).then(() => {
        this.$router.push('/login');
        document.cookie = 'hexToken=;expires=;';
        console.log('token 已清除');
      });
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // Axios 預設值
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getProducts();
  },
};
</script>
