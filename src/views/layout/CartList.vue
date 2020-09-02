<template>
    <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
        <!-- cartList modal -->
    <!-- <div id='cartModal' class="modal fade bd-example-modal-lg" tabindex="-1"
    role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content"> -->
          <div class="header">
            <h5 class="title">購物清單</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="body">
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
                <th scope="col"></th>
                <th scope="col">品名</th>
                <th scope="col" width="150px">數量</th>
                <th scope="col">單位</th>
                <th scope="col">金額</th>
              </tr>
            </thead>
            <tbody v-if='cartProducts.length'>
              <tr v-for='item in cartProducts' :key='item.id'>
                <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.product)">
                  <i class="far fa-trash-alt"></i>
                </button>
                 </td>
                <td class="align-middle">
                  <a @click.prevent="$router.push(`/product/${item.product.id}`)" type="button">
                  <img height="50" :src="item.product.imageUrl[0]" alt="">
                  </a>
                  <!-- <div :style="`background: url(${item.product.imageUrl[0]});`"
                   class="cart-image"
                   @click="$router.push(`/product/${item.product.id}`)"></div> -->
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
              {{ item.product.price * item.quantity | currency }}
            </td>
          </tr>
            </tbody>
            <!-- <tfoot >
                  <tr class="">
                    <td class="text-right ">
                      共 {{ quantity }} 件 / 商品金額總計 /
                      <strong class="text-danger"> NT {{ cartTotal| currency }} </strong>
                    </td>
                  </tr>
                </tfoot> -->
          </table>
          <hr>
          <div class="d-flex justify-content-end">
              <p v-if='cartTotal < 1000'>共 {{ quantity }} 件商品 / 運費(1000免運): NT $60</p>
              <p v-else>共 {{ quantity }} 件商品 / 運費(滿 NT$ 1000 免運): NT $0</p>
            </div>
          <div class="d-flex justify-content-end">
            <p v-if='cartTotal < 1000'>購物金額計:
              <strong class="text-danger"> NT {{ cartTotal+60 | currency }} </strong></p>
            <p v-else>購物金額計:<strong class="text-danger"> NT {{ cartTotal| currency }} </strong></p>
          </div>
          </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <!-- badge-secondary btn btn-dark nav-link -->
            <!-- <router-link to="/products" class="primary text-center d-block my-3">
                  <i class="returnIcon fas fa-angle-left"></i>
                  <span>繼續購物</span>
              </router-link> -->
            <button type="button" class="w-25 badge-light2 btn btn-light"
             @click="$router.push(`/products`)">
             <!-- <i class="returnIcon fas fa-angle-left"></i> -->
             <i class="fas fa-reply px-md-2"></i>繼續購物</button>
            <button type="button" class="w-25 badge-secondary btn btn-primary"
            @click="$router.push(`/orderForm`)" :disabled="cartTotal===0">
            確認訂購<i class="returnIcon fas fa-angle-right"></i></button>
          </div>
          </div>
        <!-- </div>
    </div>
    </div> -->
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      quantity: 0,
      cartProducts: {},
      cartTotal: 0,
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  methods: {
    removeCartItem(item) {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping/${item.id}`;
      // $('#cartModal').modal('hide');
      this.$http.delete(url).then(() => {
        // $('#cartModal').modal('hide');
        // console.log(item);
        this.isLoading = false;
        // this.getCartNum();
        this.getCartList();
        this.$bus.$emit('get-cart');
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
    },
    removeAllCartItem() {
      this.isLoading = true;
      this.cartProducts = [];
      this.cartTotal = 0;
      // $('#cartModal').modal('hide');
      const url = `${this.path}${this.uuid}/ec/shopping/all/product`;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        this.getCartList();
        this.$bus.$emit('get-cart');
        // $('#cartModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
      this.quantity = 0;
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
        this.$bus.$emit('get-cart');
      });
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
        this.quantity = 0;
        this.cartProducts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
          this.quantity += item.quantity;
        });
        // $('#cartModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        this.$bus.$emit('message:push',
          `購物車載入失敗，${error}`,
          'danger');
      });
    },
  },
  created() {
    this.getCartList();
  },
};
</script>
