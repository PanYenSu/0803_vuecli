<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
<!-- 產品列表 start -->
<h2 class="mt-2 mb-5 font-weight-bold text-primary">產品列表</h2>
    <button
      type="button"
      class="shoppingTop btn btn-secondary btn-lg text-decoration-none d-flex p-2"
      data-toggle="modal"
      data-target="#shoppingModal">
<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
      <!-- <span class="material-icons">shopping_cart</span> -->
      <sup class="text-danger ml-n1">1</sup>
    </button>

<div class="row mt-4">
 <div v-for="(item) in products" :key="item.id" class="col-md-4 mb-4">
  <div class="card border-0 shadow-sm">
   <div>
    <a href="#" class="text-decoration-none text-secondary" @click.prevent='getDetailed(item.id)'>
     <div style="height:200px;
        background-size:cover;
        background-position:center;"
        :style="{backgroundImage:`url(${item.imageUrl[0]})`}">
     </div>
    </a>
        <div class="card-body">
        <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
            <!--stretched-link  can't work-->
            <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text" v-html="item.content">{{ item.content }}</p>
        <!-- </div> -->
        <!-- <a href="#" class="btn btn-primary stretched-link">Go somewhere</a> -->
        <div class="d-flex justify-content-between align-items-baseline">
            <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
            售價若不為空，就顯示原價(origin_price)與售價(price) -->
            <div v-if="!item.price" class="h5" >
            {{ item.origin_price }} 元
            </div>
            <div v-else>
            <del class="h6 text-secondary">原價 {{ item.origin_price }} 元</del>
            <h5 class="text-danger" style="display:inline; position:absolute; right:80px;">
                特價 {{ item.price }} 元
            </h5>
            </div>
        </div>
        </div>
        <div class="card-footer d-flex">
        <!-- <button type="button" class="btn btn-outline-secondary btn-sm" style="width:50%"
        :disabled="status.loadingItem === item.id"> -->
        <router-link :to="`/product/${item.id}`">
        <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
        查看更多
        </router-link>
        <!-- </button> -->
        <button type="button" class="btn btn-outline-dark btn-sm ml-auto" style="width:50%;"
        :disabled='status.loadingItem === item.id' @click='addToCart(item)'>
        <i v-if="status.loadingItem === item.id" class="spinner-border spinner-border-sm"></i>
        加到購物車
        </button>
        </div>
    </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    addToCart() {

    },

  },
  created() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res);
        this.isLoading = false;
        this.products = res.data.data;
      });
  },
};
</script>
