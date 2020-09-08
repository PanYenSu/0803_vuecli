<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <router-link to="/" class="navbar-brand" rel="stylesheet" id='titlefont'>
        ChaChaBo</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center"
        id="navbarSupportedContent">
        <div class="">
        <ul class="navbar-nav mr-auto ">
        <!-- <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li> -->
        <li class="navFont nav-item px-md-3">
            <router-link to='/products' class="nav-link btn-light">全部商品</router-link>
        </li>
        <li class="nav-item px-md-3">
            <router-link to='/health' class="nav-link btn-light">寵物健康</router-link>
        </li>
        <li class="nav-item px-md-3">
            <router-link to='/policy' class="nav-link btn-light">關於我們</router-link>
            <!-- <a class="nav-link" href="#">Link</a> -->
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
        </ul>
        </div>
        </div>
        <div class="">
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search"
          placeholder="Search" aria-label="Search">
        <button class="btn badge-light2 btn-light1 my-2 my-sm-0" type="submit">
          <i class="fas fa-search"></i></button>
        </form>
        </div>
        <div class="col-1 ">
            <a class="navbar-brand text-dark" href="#" @click.prevent="$router.push('/cart')">
                <i class="fas fa-shopping-cart" ></i>
              <span class="badge badge-light badge-wrapper" v-if="carts.length"
              style="transform: translateX(-2px) translatey(0px)">{{quantity}}</span>
            </a>
        </div>

        <span class="navbar-text">
          <router-link to='/login' class="nav-link text-info">登入後台</router-link>
        </span>
    </nav>

        <router-view/>
        <Footer />

  </div>
</template>
<script>
// /* global $ */
import Footer from '@/components/frontend/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      quantity: 0,
      carts: [],
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  methods: {
    getCart() {
      this.quantity = 0;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data;
        this.carts.forEach((i) => {
          this.quantity += i.quantity;
        });
        // console.log(this.carts);
      });
    },
  },
  created() {
    // $('.hamBtn').click((e) => {
    //   e.preventDefault();
    //   $('.navbar-nav').toggleClass('active2');
    // });
    this.getCart();
    this.$bus.$on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'); */

#titlefont {
  /* font-family: 'Ranchers', cursive; */
  font-family: 'Ruslan Display', cursive;
  /* font-family: 'Permanent Marker', cursive; */
  font-size: 36px;
}
#logo {
  /* font-family: 'Ranchers', cursive; */
  font-family: 'Ruslan Display', cursive;
  /* font-family: 'Permanent Marker', cursive; */
  font-size: 24px;
}
.badge-wrapper {
        position: absolute;
        display: inline-block;
        background-color: #f16c5d;
        color: #ffffff;
        border-radius: 50%;
        padding: 3px;
        width: 20px;
        height: 18px;
      }
/* .navFont:hover {
    font-size: 24px;
} */
</style>
