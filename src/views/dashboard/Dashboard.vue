<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <router-link to="/admin" class="navbar-brand">後台管理頁面</router-link>
            <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <router-link to="/admin/products" class="nav-link">產品列表</router-link>
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item">
            <router-link to='/admin/coupons' class="nav-link">優惠券列表</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/admin/storages' class="nav-link">圖片列表</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/admin/orders' class="nav-link">訂單列表</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/admin/customer_order' class="nav-link">模擬下單系統</router-link>
        </li>
        </ul>
        <span class="navbar-text">
          <router-link to='/' class="nav-link text-info ">登入前台</router-link>
        </span>
        <span class="navbar-text">
          <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
        </span>
    </div>
  </nav>
        <router-view v-if="checkSuccess" :token="token"/>
</div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      uuid: process.env.VUE_APP_UUID,
      api: process.env.VUE_APP_APIPATH,
      checkSuccess: false,
      isLoading: false,
    };
  },
  methods: {
    signOut() {
      // this.$cookies.remove('token');
      // this.$router.push('/login');

      // this.$bus.$emit('message:push',
      //   '登出成功',
      //   'success');

      this.isLoading = true;
      const url = `${this.api}auth/logout`;
      this.$http.post(url, { api_token: this.token }).then(() => {
        document.cookie = 'hexToken=;expires=;';
        console.log('token 已清除');
        this.isLoading = false;
        this.$router.push('/login');
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
    },

    check() {
      const url = `${this.api}auth/check`;
      this.$http.post(url, { api_token: this.token }).then((response) => {
        if (!response.data.success) {
          this.$router.push({
            path: 'login',
          });
        }
        this.checkSuccess = true;
      });
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // Axios 預設值
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.check();
  },
};
</script>
