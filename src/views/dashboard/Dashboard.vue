<template>
  <div>
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
            <router-link to="/admin/products" class="nav-link">Products</router-link>
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <!-- <li class="nav-item">
            <router-link to='/about' class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/products' class="nav-link">Products</router-link>
        </li> -->
        <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
        <span class="navbar-text">
          <router-link to='/' class="nav-link text-info ">登入前台</router-link>
        </span>
        <button type="button"
        class="btn btn-outline-dark btn-sm ml-auto"
        style="width:8%;" @click='logout'>登出</button>
    </div>
  </nav>
        <router-view/>
</div>
</template>

<script>
export default {
  props: ['token'],
  data() {
    return {};
  },
  methods: {
    logout() {
      const url = `${process.env.VUE_APP_APIPATH}auth/logout`;
      this.$hppt.post(url, { api_token: this.token }).then(() => {
        this.$router.push('/login');
        document.cookie = 'hexToken=;expires=;';
        console.log('token 已清除');
      });
    },

  },
};
</script>
