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
            <span class="badge badge-light badge-wrapper"
            style="font-size:24px;color:red;">{{quantity}}</span>
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
        <!-- <button type="button" class="btn btn-outline-secondary btn-sm" style="width:50%;"
        :disabled="status.loadingItem === item.id" @click="getDetailed(item.id)">
            <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
            查看更多
          </button> -->
        <button type="button" class="btn btn-outline-dark btn-sm ml-auto" style="width:100%;"
        :disabled='status.loadingItem === item.id' @click='addToCart(item)'>
        <i v-if="status.isLoading === true && status.loadingItem === item.id"
        class="spinner-border spinner-border-sm"></i>
        加到購物車
        </button>
        </div>
    </div>
    </div>
  </div>
</div>
<!-- 分頁元件 -->
    <Pagination :pages='pagination' @emitPage='getCustomerPros' ></Pagination>
 <!-- 產品詳細 Modal-->
     <div id="productModal" class="modal fade" tabindex="-1"
     role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 id="exampleModalLabel" class="modal-title">
             {{ tempProduct.title }}
           </h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
          <!-- <img :src="tempProduct.imageUrl[0]" class="img-fluid" alt=''> -->
          <!-- 輪播 (Carousel) 無法實現 -->
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div v-for='i in tempProduct.imageUrl' :key='i' class="carousel-item active">
                <img :src="i" class="img-fluid" alt=''>
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
           <p class="font-weight-bold" v-html="tempProduct.content"></p>
           <p class="font-weight-light text-right" > - {{ tempProduct.description }}</p>
           <!-- <blockquote class="blockquote">
             <p class="col-sm-3" v-html="tempProduct.content"></p>
             <footer class="blockquote-footer text-right" >
               {{ tempProduct.description }}
             </footer>
           </blockquote> -->
           <div class="d-flex justify-content-between align-items-baseline">
             <div v-if="!tempProduct.price" class="h4 text-left">
               NT.{{ tempProduct.origin_price }}
             </div>
             <del v-if="tempProduct.price" class="h5 text-left" style="width:20%;">
               NT.{{ tempProduct.origin_price }}</del>
             <div v-if="tempProduct.price" class="h4 text-danger text-left" style="width:80%;">
               特價 NT.{{ tempProduct.price }}
             </div>
           </div>
           <select v-model="tempProduct.num" name class="form-control mt-3">
             <option value="0" disabled selected>
               請選擇數量
             </option>
             <option v-for="num in 10" :key="num" :value="num">
               選購 {{ num }} {{ tempProduct.unit }}
             </option>
           </select>
         </div>
         <div class="modal-footer">
           <div v-if="tempProduct.num" class="text-muted text-nowrap mr-3">
             小計
             <strong>{{ tempProduct.num * tempProduct.price }}</strong> 元
           </div>
           <button type="button" class="btn btn-secondary ml-auto"
           @click="addToCart(tempProduct, tempProduct.num)">
             <i v-if="tempProduct.id === status.loadingItem"
             class="spinner-border spinner-border-sm"></i>
             <!-- <i v-if="status.loadingItem === item.id"
             class="spinner-grow spinner-grow-sm"></i> -->
             加到購物車
           </button>
         </div>
       </div>
     </div>
   </div>
   <!-- cartList modal -->
    <div id='cartModal' class="modal fade bd-example-modal-lg" tabindex="-1"
    role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">購物車</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="col-md-12">
              <div class="text-right mb-3">
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeAllCartItem()">
                  <i class="far fa-trash-alt"> 刪除所有品項</i>
                </button>
              </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">刪除</th>
                <th scope="col">品名</th>
                <th scope="col" width="150px">數量</th>
                <th scope="col">單位</th>
                <th scope="col">單價</th>
              </tr>
            </thead>
            <tbody v-if='cartProducts.length'>
              <tr v-for='item in cartProducts' :key='item.id'>
                <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.product, item.quantity)">
                  <i class="far fa-trash-alt"></i>
                </button>
                 </td>
                <td class="align-middle">{{item.product.title}}</td>
                <td class="align-middle">
                <div class="input-group">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-primary"
                            type="button"
                            @click="quantityUpdata(item.product.id, item.quantity + 1)">
                            +
                          </button>
                        </div>
                        <input id="inlineFormInputGroupUsername" type="text"
                        class="form-control text-center" :value="item.quantity"
                        @keyup.enter="quantityUpdata(item.product.id, $event.target.value)">
                        <div class="input-group-append">
                          <button class="btn btn-outline-primary"
                            type="button"
                            @click="quantityUpdata(item.product.id, item.quantity - 1)"
                            :disabled="item.quantity === 1">
                            -
                          </button>
                        </div>
                      </div>
                </td>
                <td class="align-middle">
                {{ item.product.unit }}
                </td>
              <td class="align-middle text-right">
              {{ item.product.price }}
            </td>
          </tr>
            </tbody>
            <tfoot>
                  <tr>
                    <td colspan="4" class="text-right">
                      總計
                    </td>
                    <td class="text-right">
                      {{ cartTotal }}
                    </td>
                  </tr>
                </tfoot>
          </table>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">繼續購物</button>
            <button type="button" class="btn btn-dark"
            @click="orderForm()" :disabled="cartTotal===0">確認訂購</button>
          </div>
          </div>
        </div>
    </div>
    <!-- 加入購物車提醒 modal -->
  <div class="modal fade bd-example-modal-sm" id='cartAdd' tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">感謝您!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>商品成功加入購物車.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 已存在購物車提醒 modal -->
  <div class="modal fade bd-example-modal-sm border border-danger"
       id='cartAlready' tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">很抱歉!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>此商品已在購物車中.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* global $ */
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
        isLoading: false,
        loadingItem: '',
      },
    };
  },
  methods: {
    orderForm() {

    },
    getDetailed(id) {
      this.isLoading = true;
      this.status.loadingItem = id;
      const url = `${this.path}${this.uuid}/ec/product/${id}`;
      this.$http.get(url).then((res) => {
        this.tempProduct = Object.assign(res.data.data);
        // tempProduct 的 num 沒有預設數字 因此 options 無法選擇預設欄位
        // 故要增加這一行解決該問題 如果直接使用物件新增屬性進去是會雙向綁定失效，因此需要使用 $set
        this.$set(this.tempProduct, 'num', 0);
        // console.log(this.tempProduct);
        this.status.loadingItem = '';
        this.isLoading = false;
        $('#productModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        this.status.loadingItem = '';
        console.log(error);
      });
    },
    addToCart(item, quantity = 1) {
      this.status.isLoading = true;
      this.status.loadingItem = item.id;
      // this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity,
      };
      console.log(cart.quantity);
      this.$http.post(url, cart).then(() => {
        $('#cartAdd').modal('show');
        $('#productModal').modal('hide');
        this.status.loadingItem = '';
        // this.isLoading = false;
        this.quantity += cart.quantity;
        this.status.isLoading = false;
      }).catch((error) => {
      // this.isLoading = false;
        $('#cartAlready').modal('show');
        $('#productModal').modal('hide');
        this.status.loadingItem = '';
        console.log(error.response.data.errors);
        this.status.isLoading = false;
      });
    // this.getCartNum();
    },
    getCartList() {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.cartProducts = res.data.data;
        // console.log(this.cartProducts);
        this.isLoading = false;
        // 累加總金額
        this.cartTotal = 0;
        this.cartProducts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });
        $('#cartModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        this.$bus.$emit('message:push',
          `購物車載入失敗，${error}`,
          'danger');
      });
    },
    removeAllCartItem() {
      this.isLoading = true;
      this.cartProducts = [];
      this.cartTotal = 0;
      const url = `${this.path}${this.uuid}/ec/shopping/all/product`;
      this.$http.delete(url).then(() => {
        // $('#cartModal').modal('hide');
        this.isLoading = false;
        $('#cartModal').modal('show');
        // this.$bus.$emit(
        //   'message:push',
        //   '成功刪除購物車商品！',
        //   'success',
        // );
      }).catch((error) => {
        this.isLoading = false;
        this.$bus.$emit('message:push',
          `刪除失敗，${error}`,
          'danger');
      });
      this.quantity = 0;
    },
    removeCartItem(item) {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping/${item.id}`;
      this.$http.delete(url).then(() => {
        // $('#cartModal').modal('hide');
        // console.log(item);
        this.isLoading = false;
        this.getCartNum();
        this.getCartList();
      }).catch((error) => {
        this.isLoading = false;
        this.$bus.$emit('message:push',
          `刪除失敗，${error}`,
          'danger');
      });
    },
    quantityUpdata(id, num) {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      const cart = {
        product: id,
        quantity: num,
      };
      this.$http.patch(url, cart).then(() => {
        this.isLoading = false;
        this.getCartList();
        this.getCartNum();
      });
    },
    getCartNum() {
      const url = `${this.path}${this.uuid}/ec/shopping`;
      this.quantity = 0;
      this.$http.get(url).then((res) => {
        this.cartProducts = res.data.data;
        this.cartProducts.forEach((item) => {
          this.quantity += item.quantity;
        });
      });
    },
    getCustomerPros(page = 1) {
      this.isLoading = true;
      this.$http.get(`${this.path}${this.uuid}/ec/products?page=${page}`)
        .then((res) => {
          // console.log(res);
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          // console.log($('button'));
          this.$bus.$emit(
            'message:push',
            '載入成功',
            'success',
          );
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
    this.getCustomerPros();
    this.getCartNum();
  },
};
</script>
