<template>
<div>
<div class="container">
  <loading :active.sync="isLoading"></loading>

    </div>
    <div class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 300px;">
    <!-- https://images.unsplash.com/photo-1577345995528-93e37eee8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=60 -->
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0;
       background-image: url(https://images.unsplash.com/photo-1558041042-c80ca522a949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=60);
        background-position: center center; opacity: 0.3;"></div>
      <!-- <h5 class="font-weight-bold">
        The dog is the only love you more than you love yourself.</h5> -->
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">

        <div class="col-md-3 ">
          <SideNavBar/>
        </div>
        <!-- 產品列表 start -->
        <div class="col-md-9">
          <div class="row">
            <div v-for="(item) in products" :key="item.id" class="col-md-4">
              <div class="card border-0 mb-4 position-relative position-relative">
                <!-- <img :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="..."> -->
                <router-link
                  :to="`/product/${ item.id }`"
                  class="btn card-btn-box btn-sm">
                <div class="pic">
                  <!-- style="height:250px;
                    background-size:cover;
                    background-position:center;"
                    :style="{backgroundImage:`url(${item.imageUrl[0]})`}">
                    查看更多 -->

                    <img :src="item.imageUrl[0]"
                    class="card-img-top rounded-0" alt="...">
<!-- <p class="text-white  bg-primary">Lorem ipsum dolor sit amet, posuere erat a ante.</p> -->
                </div>

                </router-link>
                <a href="#" class="text-dark">
                  <!-- <i class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px;"></i> -->
                  <i class="fas fa-heart position-absolute"
                  style="right: 16px; top: 16px; color: red;"></i>
                </a>

                <div class="card-body p-0">
                  <h5 class="mb-0 mt-3">
                    <router-link :to="`/product/${item.id}`" class="nav-link">
      <!-- <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i> -->
                    {{ item.title }}
                    </router-link>
                    <!-- <a href="./Product.vue">{{ item.title }}</a> -->
                    </h5>
                  <p class="text-muted card-text" v-html="item.content">{{ item.content }}</p>
                  <p v-if="!item.price" class="card-text mb-0">
                    {{ item.origin_price | currency}}
                    </p>
                  <p v-else class="card-text mb-0 font-weight-bold">
                    {{ item.price | currency}} <span class="text-muted ">
                    <del>{{ item.origin_price | currency}}</del></span></p>
                  <p class="text-muted mt-3"></p>
                  <div>
                    <a href="#" class="btn btn-light2 btn-block"
                    @click.prevent="addToCart(item.id, 1)">加入購物車</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- 分頁元件 -->
          <Pagination :pages='pagination' @emitPage='getProducts' ></Pagination>

        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
        align-items-md-center align-items-start">
          <p class="mb-0 font-weight-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
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
import Pagination from '@/components/Pagination.vue';
import SideNavBar from '@/components/SideNavBar.vue';

export default {
  components: {
    Pagination,
    SideNavBar,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      quantity: 0,
      cartProducts: {},
      cartTotal: 0,
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      status: {
        loadingItem: '',
        isLoading: false,
      },
    };
  },
  methods: {
    addToCart(id, quantity) {
      // this.quantity = 0;
      // this.status.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart).then(() => {
        // this.status.isLoading = false;
        $('#cartAdd').modal('show');
        // this.quantity += cart.quantity;
        this.$bus.$emit('get-cart');
      }).catch((error) => {
      // this.isLoading = false;
        $('#cartAlready').modal('show');
        this.status.loadingItem = '';
        console.log(error.response.data.errors);
      });
    },
    getProducts(page = 1) {
      this.isLoading = true;
      this.$http.get(`${this.path}${this.uuid}/ec/products?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          console.log(this.products);
          // this.$bus.$emit(
          //   'message:push',
          //   '載入成功',
          //   'success',
          // );
        })
        .catch((error) => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            `載入失敗，${error}`,
            'danger');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style scoped>
.pic{max-width:300px; max-height:180px;overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 0.5s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
/* .img{max-width:300px; max-height:200px;overflow:hidden;} */
</style>
