<template>
    <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
      <!-- 進度條 -->
        <div class="progress">
          <div class="progress-bar bg-warm3 progress-bar-striped progress-bar-animated"
          role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
           style="width: 30%">
            <span class="sr-only">30% 完成</span>
          </div>
        </div>
        <!-- cartList -->
          <div class="header">
            <h5 class="title py-3">購物清單</h5>
          </div>
          <div class="body">
          <div class="col-md-12">
              <div class="text-right mb-3">
                <button type="button" class="badge-warm4 btn btn-outline-warm1 btn-sm"
                @click="removeAllCartItem()" :disabled="quantity === 0">
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
                <button type="button" class="badge-warm4 btn btn-outline-warm1 btn-sm"
                @click="removeCartItem(item.product)">
                  <i class="far fa-trash-alt"></i>
                </button>
                 </td>
                <td class="align-middle">
                  <a @click.prevent="$router.push(`/product/${item.product.id}`)" type="button">
                  <img :src="item.product.imageUrl[0]" alt="" class="mr-2"
                   style="width: 80px; height: 60px; object-fit: cover">
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
                            @click="quantityUpdata(item.product.id, item.quantity - 1)"
                            :disabled="item.quantity === 1">
                            -
                          </button>
                        </div>
                        <input id="inlineFormInputGroupUsername" type="text"
                        class="form-control text-center" :value="item.quantity"
                        @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                         disabled>
                        <div class="input-group-append">
                          <button class="btn btn-outline-primary"
                            type="button"
                           @click="quantityUpdata(item.product.id, item.quantity + 1)">
                            +
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
          </table>
          <hr>
          <div class="d-flex justify-content-end">
              <p v-if='cartTotal < 1000'>共 {{ quantity }} 件商品 / 運費(1000免運): NT $60</p>
              <p v-else>共 {{ quantity }} 件商品 / 運費(滿 NT$ 1000 免運): NT $0</p>
            </div>
          <div class="d-flex justify-content-end">
            <p v-if='cartTotal < 1000'>購物金額總計:
              <strong class="text-danger"> NT {{ cartTotal+60 | currency }} </strong></p>
            <p v-else>購物金額總計:<strong class="text-danger"> NT {{ cartTotal| currency }} </strong></p>
          </div>
          </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="w-25 badge-light2 btn btn-light"
             @click="$router.push(`/products`)">
             <!-- <i class="returnIcon fas fa-angle-left"></i> -->
             <i class="fas fa-reply px-md-2"></i>繼續購物</button>
            <button type="button" class="w-25 badge-secondary btn btn-primary"
            @click="$router.push(`/orderForm`)" :disabled="cartTotal===0">
            確認訂購
            </button>
          </div>

          <!-- test info -->
           <div class="bg-light mt-7" >
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

          <div class="carousel-inner">
                  <img src="https://images.unsplash.com/photo-1545387804-ff58d3817f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                   alt="" class="mr-2"
                   style="width: 1070px; height:170px; object-fit: cover;opacity:0.5;">
                  <!-- </div> -->
          <!-- <div class="carousel-inner" style="opacity:0.5; weight:1200px;
           background-image:url(https://images.unsplash.com/photo-1545387804-ff58d3817f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"> -->
            <div class="carousel-item active">
              <div class="row justify-content-center py-7" style="opacity:1;">
                <div class="col-md-6 text-center text-light">
                  <h3 class="py-1">狗狗會感冒嗎？</h3>
                  <p class="my-1">“當然會囉！,
                     此外，幼犬也容易得到一種名為
                      犬傳染性氣管支氣管炎的疾病，
                      也就是俗稱的「犬窩咳」。”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center text-light">
                  <h3 class="py-1">狗狗多久洗一次澡？</h3>
                  <p class="my-1">“一般建議7-10天洗一次即可。
                    由於狗狗的皮膚表層和人類不同，
                    洗得太勤反而會破壞表皮的細菌生態，
                    反而引起皮膚方面的疾病。”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 text-center text-light">
                  <h3 class="py-1">狗狗也有分血型嗎？</h3>
                  <p class="my-1">“狗狗的血型可分成13種，
                    若不小心輸錯血，狗狗身體小、血液循環快，
                    很可能造成體內免疫系統失衡，
                    而由壁蝨帶原的「焦蟲症」，
                    會破壞紅血球，導致氧氣難以被運送，
                    若紅血球指數低於15%，就需要馬上輸血！”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
                </div>
              </div>
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
    </div>

          </div>
        <!-- </div>
    </div>
    </div> -->
</template>
<script>
// import Swal from 'sweetalert2';
import ToastsSweet from '@/utils/ToastsSweet';
// import Swal from 'sweetalert2';

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
      const url = `${this.path}${this.uuid}/ec/shopping/${item.id}`;
      // $('#cartModal').modal('hide');
      this.$http.delete(url).then(() => {
        // $('#cartModal').modal('hide');
        // console.log(item);
        this.getCartList();
        this.isLoading = false;
        // this.getCartNum();
        this.$bus.$emit('get-cart');
        ToastsSweet.fire({
          title: `已將${item.title}移除!`,
          icon: 'success',
        });
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
    },
    removeAllCartItem() {
      this.cartProducts = [];
      this.cartTotal = 0;
      // $('#cartModal').modal('hide');
      const url = `${this.path}${this.uuid}/ec/shopping/all/product`;
      this.$http.delete(url).then(() => {
        this.getCartList();
        this.isLoading = false;
        this.$bus.$emit('get-cart');
        // $('#cartModal').modal('show');
        ToastsSweet.fire({
          title: '購物車商品已全部刪除!',
          icon: 'success',
        });
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
