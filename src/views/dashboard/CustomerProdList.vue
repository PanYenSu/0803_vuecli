<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
<!-- 產品列表 start -->
    <div class="row">
      <div class="col mt-3 info">
    <h2 class="mt-2 mb-5 font-weight-bold text-">模擬下單 產品列表</h2>
      </div>
      <div class="col col-md-auto mt-4">
        <button id='cm' type="button" class="btn btn-outline-secondary"
        @click="openOrderModal('new')">模擬訂單</button>
    </div>
      <div class="col-1 mt-3">
        <!-- <router-link :to="`/admin/CustomerCheckout/${item.id}`"> -->
          <a class="navbar-brand text-dark" href="#" @click.prevent='getCartList()'>
            <i class="fas fa-shopping-cart fa-2x"></i>
            <span class="badge badge-light badge-wrapper" style="font-size:24px;color:red;">5</span>
          </a>
          <!-- </router-link> -->
      </div>
    </div>
    <hr>
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
        <router-link :to="`/admin/CustomerCheckout/${item.id}`">
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
/* global $ */
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      orders: [],
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    addToCart() {
    },
    getOrders() {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/admin/ec/orders`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.orders = res.data.data;
        this.isLoading = false;
      })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  created() {
    this.isLoading = true;
    this.$http.get(`${this.path}${this.uuid}/ec/products`)
      .then((res) => {
        console.log(res);
        this.isLoading = false;
        this.products = res.data.data;
        console.log($('button'));
      });
  },
};
</script>
