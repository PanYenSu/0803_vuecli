<template>
<div>
<div class="container">
  <loading :active.sync="isLoading"></loading>

    </div>
    <div class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 300px;">
    <!-- https://images.unsplash.com/photo-1577345995528-93e37eee8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=60 -->
      <div data-aos="zoom-out"
      class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0;
       background-image: url(https://images.unsplash.com/photo-1558041042-c80ca522a949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=60);
        background-position: center center; opacity: 0.3;"></div>
      <!-- <h5 class="font-weight-bold">
        The dog is the only love you more than you love yourself.</h5> -->
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">

        <div class="col-md-2 ">
          <!-- <SideNavBar @update="filterCategories(category)"/> -->
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
           id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-2 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1 btn-light">
                  <h5 class="mb-0">
                    狗狗用品
                  </h5>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" @click.prevent="filterCategory = ''"
                      :class="{ active: filterCategory === '' }">全部商品</a>
                    </li>
                    <li v-for="item in categories" :key="item">
                      <a href="#" class="py-2 d-block text-muted"
                      @click.prevent="filterCategory = item"
                    :class="{ active: item === filterCategory }">{{item}}</a></li>
                    <!-- <li><a href="#" class="py-2 d-block text-muted">蓋毯/睡墊</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">衣/帽</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">玩具/外出用品</a></li> -->
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-2 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1 btn-light">
                  <h5 class="mb-0">
                    貓咪用品
                  </h5>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">衣/帽</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">玩具</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-2 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1 btn-light">
                  <h5 class="mb-0">
                    項圈/牽繩
                  </h5>
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
        <!-- 產品列表 start -->
        <div class="col-md-10">
          <div class="row">
            <div data-aos="fade-up"
             v-for="(item) in filterCategories" :key="item.id" class="col-md-4">
              <div class="card border-0 mb-4 position-relative position-relative">

                <router-link :to="`/product/${ item.id }`"
                  class="btn card-btn-box btn-sm">
                <div class="pic" type="tooltip-options" data-toggle="tooltip"
                  data-placement="" title="">
                    <img :src="item.imageUrl[0]"
                    class="card-img-top rounded-0" alt="...">
                </div>
                </router-link>

                <a href="#" class="text-dark">
                  <!-- <i class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px;"></i> -->
                  <!-- <i class="fas fa-heart position-absolute"
                  style="right: 16px; top: 16px; color: red;"></i> -->
                </a>

                <div class="card-body p-0">
                  <h5 class="mb-0 mt-3">
                    <router-link :to="`/product/${item.id}`" class="nav-link">
      <!-- <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i> -->
                    {{ item.title }}
                    </router-link>
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
                    <a href="#" class="btn btn-light2 badge-light btn-block"
                    @click.prevent="addToCart(item.id, 1)">
                    <i v-if="status.loadingItem === item.id"
                     class="spinner-border spinner-border-sm"></i>
                    加入購物車
                    </a>
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
      <Subscription />
    </div>
<!-- goTop -->
<div data-aos="slide-left" class="goTop">
  <a href="#" class="goTopBtn jq-goTop">
    <i class="fas fa-arrow-alt-circle-up fa-3x"></i>
  </a>
</div>

  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import Subscription from '@/components/frontend/Subscription.vue';
// import SideNavBar from '@/components/SideNavBar.vue';
import ToastsSweet from '@/utils/ToastsSweet';

export default {
  components: {
    Pagination,
    Subscription,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      categories: ['胸背帶', '犬潮服', '睡墊', '護目鏡', '玩具'],
      filterCategory: '',
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
      this.status.loadingItem = id;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart).then(() => {
        // this.status.isLoading = false;
        this.$bus.$emit('get-cart');
        // $('#cartAdd').modal('show');
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
    getProducts(page = 1) {
      this.isLoading = true;
      let url = `${this.path}${this.uuid}/ec/products?page=${page}&paged=100`;
      if (this.filterCategory === '') {
        url = `${this.path}${this.uuid}/ec/products?page=${page}&paged=18`;
      }
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          // console.log(this.products);
          // console.log(this.$route.params);
          // const { categoryName } = this.$route.params;
          // if (categoryName) {
          //   this.filterCategory = categoryName;
          // }
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
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .includes(this.filterCategory);
          return data;
        });
      }
      return this.products;
    },
  },
};
</script>
<style scoped>
.pic{max-width:300px; max-height:180px;overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 0.5s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
/* .img{max-width:300px; max-height:200px;overflow:hidden;} */
.goTop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  /* //圖示水平移動位置 */
  /* transform: translateX(0);
  transition: transform 0.2s; */
}
  /* //圖示隱藏 */
  /* .goTop.hide {
    transform: translateX(120%);
  }; */
  .goTopBtn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .fa-arrow-alt-circle-up {color: #cab7ab;}

</style>
