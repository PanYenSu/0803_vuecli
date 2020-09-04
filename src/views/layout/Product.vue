<template>
    <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
        <div class="row align-items-center">
         <!-- <div class="col-7" style="height:400px; weight:550px;
                    background-size:cover;
                    background-position:center;"
                    :style="{backgroundImage:`url(${product.imageUrl[0]})`}">
                </div> -->
                <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <img :src= "product.imageUrl" style="max-height:420px; object-fit: contain;"
                class="d-block w-100" alt="...">
              </div>
              <div v-for="(item, i) in product.imageUrl" :key="i"
              class="carousel-item" style="max-height:420px;">
              <!-- <img :src= "product.imageUrl[i]" style="height:430px; weight:550px;" -->
                <img :src= "product.imageUrl[i]" style="max-height:420px; object-fit: contain;"
                class="d-block w-100" alt="...">
              </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls"
             role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls"
             role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

       <div class="col-md-5">
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <router-link to='/'>Home</router-link>
                <!-- <a class="text-muted" href="./index.html">Home</a> -->
                </li>
              <li class="breadcrumb-item">
                <router-link to='/products'>Product</router-link>
               </li>
              <li class="breadcrumb-item" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>
          <hr>

          <p class="font-weight-bold text-right py-3" v-html="product.content"></p>
          <p v-if='!product.price' class="h4 font-weight-bold text-right">
            NT{{ product.price | currency }}</p>
          <p v-if="product.price" class="mb-0 text-muted text-right"><del>
            NT{{ product.origin_price | currency }}</del></p>
          <p v-if="product.price" class="h4 font-weight-bold text-right">
            NT{{ product.price | currency }}</p>
          <div class="d-flex align-items-center">
            <div class="input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"
                @click="CountQuantity(tempQuantity-1)" :disabled="quantity === 1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1" :value="quantity"
                 @keyup.enter="CountQuantity($event.target.value)">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"
                @click="CountQuantity(tempQuantity+1)">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <a href="#" class="badge-secondary btn btn-primary btn-block py-2 "
            @click.prevent="addToCart(product, quantity)">
            <i v-if="status.loadingItem === product.id"
              class="spinner-border spinner-border-sm"></i>
            加入購物車</a>
          </div>
          <div class="d-flex align-items-center">
              <!-- <i v-if="status.loadingItem === item.id"
              class="spinner-border spinner-border-sm"></i> -->
              <button type="button" class="btn-block py-2 badge-light2 btn btn-light1"
             @click="$router.push('/cart')">
             立即購買</button>
            <!-- <router-link class='text-light btn-block' to='/cart'>
            <span class="badge-secondary btn btn-dark btn-block py-2">立即購買</span>
            </router-link> -->

            <!-- <a href="#" class="btn btn-dark btn-block py-2"
            @click.prevent="addToCart">立即購買</a> -->
          </div>
          <!-- <p class="font-weight-light text-left" > - {{ product.description }}</p> -->
        </div>

       </div>
      <nav class="py-2">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
          href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">商品資訊</a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
           role="tab" aria-controls="nav-profile" aria-selected="false">購物須知</a>
          <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
           role="tab" aria-controls="nav-contact" aria-selected="false">退貨需知</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home"
        role="tabpanel" aria-labelledby="nav-home-tab">
        <ul class="text-left"><li><p v-html="product.description" ></p></li></ul>
        <Prodinfo /></div>
        <div class="tab-pane fade" id="nav-profile"
        role="tabpanel" aria-labelledby="nav-profile-tab">
        <Shopinfo /></div>
        <div class="tab-pane fade" id="nav-contact"
        role="tabpanel" aria-labelledby="nav-contact-tab">
        <Returninfo /></div>
      </div>

      <!-- <h3 class="font-weight-bold py-5">你可能會喜歡</h3> -->
      <section class="col-md-12 sametype-box mb-4 py-5">
        <h4 class="font-weight-bold mb-3 h4">你可能會喜歡</h4>
        <ProdSwiper :product="product" @update="getProduct" />
      </section>

    </div>
</template>
<script>
/* global $ */
import Shopinfo from '@/components/Shopinfo.vue';
import Returninfo from '@/components/Returninfo.vue';
import Prodinfo from '@/components/Prodinfo.vue';
import ProdSwiper from '@/components/ProdSwiper.vue';
import ToastsSweet from '@/utils/ToastsSweet';

export default {
  components: {
    Shopinfo,
    Returninfo,
    Prodinfo,
    ProdSwiper,
  },
  data() {
    return {
      isLoading: false,
      product: {
        num: 1,
      },
      tempProduct: {
        imageUrl: [],
      },
      quantity: 1,
      tempQuantity: 0,
      // cartProducts: {},
      // cartTotal: 0,
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      status: {
        isLoading: false,
        loadingItem: '',
      },
    };
  },
  methods: {
    CountQuantity(quantity) {
      // this.quantity = 0;
      this.quantity += quantity;
    },
    addToCart(item, quantity) {
      // this.quantity = 0;
      // this.status.isLoading = true;
      this.status.loadingItem = item.id;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity,
      };
      this.$http.post(url, cart).then(() => {
        // this.status.isLoading = false;
        // $('#cartAdd').modal('show');
        this.$bus.$emit('get-cart');
        ToastsSweet.fire({
          title: '已成功加入購物車',
          icon: 'success',
        });
        this.status.loadingItem = '';
      }).catch((error) => {
      // this.isLoading = false;
        this.status.loadingItem = '';
        $('#cartAlready').modal('show');
        this.status.loadingItem = '';
        console.log(error.response.data.errors);
      });
    },
    getProduct() {
      // console.log(this.$route);
      this.quantity = 1;
      this.isLoading = true;
      const { id } = this.$route.params;
      // const aID = this.$route.params.id;
      console.log(this.$route);
      this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((res) => {
          this.product = res.data.data;
          // this.$set(this.product, 'num', 1);
          this.isLoading = false;
          console.log(this.product);
        })
        .catch((error) => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            `購物車載入失敗，${error}`,
            'danger');
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
