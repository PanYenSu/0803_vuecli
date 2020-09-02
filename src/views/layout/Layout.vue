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
          aria-label="Toggle navigation"
        >
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
        <li class="nav-item px-md-3">
            <router-link to='/products' class="nav-link btn-light">全部商品</router-link>
        </li>
        <li class="nav-item px-md-3">
            <router-link to='' class="nav-link btn-light">NEW ITEMS</router-link>
        </li>
        <li class="nav-item px-md-3">
            <router-link to='' class="nav-link btn-light">SALES</router-link>
        </li>
        <li class="nav-item px-md-3">
            <router-link to='/about' class="nav-link btn-light">About</router-link>
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
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn badge-light2 btn-light1 my-2 my-sm-0" type="submit">
          <i class="fas fa-search"></i></button>
        </form>

        </div>
        <div class="col-1 ">
            <a class="navbar-brand text-dark" href="#" @click.prevent='getCartList()'>
                <!-- <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg> -->
                <router-link to='/cart'><i class="fas fa-shopping-cart"></i></router-link>
              <span class="badge badge-light badge-wrapper" v-if="carts.length"
              style="transform: translateX(-2px) translatey(0px)">{{quantity}}</span>
            </a>
        </div>

    <span class="navbar-text">
          <router-link to='/login' class="nav-link text-info">登入後台</router-link>
        </span>
  </nav>
  <!-- <section class="container py-2 mb-3"> -->
        <router-view/>

        <!-- </section> -->

        <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html" id='logo'>ChaChaBo</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>

</div>
</template>
<script>
// /* global $ */

export default {
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
        console.log(this.carts);
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
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

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
        /* top: -5px;
        right: -5px; */
        position: absolute;
        display: inline-block;
        background-color: #f16c5d;
        color: #ffffff;
        border-radius: 50%;
        padding: 3px;
        width: 20px;
        height: 18px;
      }
   /* .nav-link:hover {
      color: #FFCB75;
    } */

</style>
