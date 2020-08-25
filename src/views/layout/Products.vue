<template>
<div>
<div class="container">
  <loading :active.sync="isLoading"></loading>
<!-- 產品列表 start -->
      <!-- <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="./index.html">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link mr-4 active" href="./index.html">
            Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link mr-4" href="./product.html">Product</a>
            <a class="nav-item nav-link mr-4" href="./detail.html">Detail</a>
            <a class="nav-item nav-link" href="./cart.html"><i class="fas fa-shopping-cart"></i></a>
          </div>
        </div>
      </nav> -->
    </div>
    <div class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 300px;">
    <!-- https://images.unsplash.com/photo-1577345995528-93e37eee8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=60 -->
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1558041042-c80ca522a949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=60); background-position: center center; opacity: 0.3;"></div>
      <!-- <h5 class="font-weight-bold">
        The dog is the only love you more than you love yourself.</h5> -->
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-3">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
           id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div v-for="(item) in products" :key="item.id" class="col-md-4">
              <div class="card border-0 mb-4 position-relative position-relative">
                <!-- <img :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="..."> -->
                <router-link
                  :to="`/product/${ item.id }`"
                  class="btn card-btn-box btn-sm">
                <div class="pic" >
                  <!-- style="height:250px;
                    background-size:cover;
                    background-position:center;"
                    :style="{backgroundImage:`url(${item.imageUrl[0]})`}">
                    查看更多 -->
                    <img :src="item.imageUrl[0]"
                    class="card-img-top rounded-0" alt="...">
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
                </div>

<!-- <div class="card-body col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
          <h4 class="mb-0 mt-3"><a href="./Product.html">{{ item.title }}</a></h4>
          <p class="card-text" v-html="item.content">{{ item.content }}</p>
          <p v-if="!item.price" class="card-text mb-0">
                    {{ item.origin_price | currency}}
                    </p>
                  <p v-else class="card-text mb-0">
                    {{ item.price | currency}} <span class="text-muted ">
                    <del>{{ item.origin_price | currency}}</del></span></p>
                  <p class="text-muted mt-3"></p>
          <div class="input-group mb-0 mt-4">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button type="button" class="btn btn-outline-dark btn-sm ml-auto" style="width:50%;"
        :disabled='status.loadingItem === item.id' @click='addToCart(item)'>
        <i v-if="status.loadingItem === item.id" class="spinner-border spinner-border-sm"></i>
        加到購物車
        </button>
            </div>
          </div>
        </div> -->

              </div>
            </div>
          </div>
          <!-- 分頁元件 -->
          <Pagination :pages='pagination' @emitPage='getProducts' ></Pagination>
          <!-- <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> -->
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
// /* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
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
    addToCart() {
    },
    getProducts(page = 1) {
      this.isLoading = true;
      this.$http.get(`${this.path}${this.uuid}/ec/products?page=${page}`)
        .then((res) => {
          // console.log(res);
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
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
