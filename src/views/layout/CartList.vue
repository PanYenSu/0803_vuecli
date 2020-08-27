<template>
    <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
        <!-- cartList modal -->
    <!-- <div id='cartModal' class="modal fade bd-example-modal-lg" tabindex="-1"
    role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content"> -->
          <div class="header">
            <h5 class="title">購物車</h5>
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
            <!-- badge-secondary btn btn-dark nav-link -->
            <span class="badge-light2 btn btn-dark">
            <router-link class='text-light' to='/products'>繼續購物</router-link></span>
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal"
             @click=" <router-link to='/cart'></router-link> ">繼續購物</button> -->
            <button type="button" class="badge-secondary btn btn-dark"
            @click="orderForm()" :disabled="cartTotal===0">確認訂購</button>
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
    removeCartItem() {},
    removeAllCartItem() {},
    quantityUpdata() {},
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
