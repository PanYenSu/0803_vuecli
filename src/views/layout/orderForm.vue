<template>
    <div class="container py-3">
        <loading :active.sync="isLoading"></loading>
    <!-- 進度條 -->
        <div class="progress">
          <div class="progress-bar bg-warm3 progress-bar-striped progress-bar-animated"
          role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
           style="width: 60%">
            <span class="sr-only">60% 完成</span>
          </div>
        </div>

        <div class="content">
        <div class="header">
          <h4 class="py-3">訂購表單</h4>
        </div>
        <div class="row">
          <!--cartDetailContent -->
          <div class="col-md-5">
            <div class="border p-3 mx-2 mb-4 order-card">
              <h4 class="mb-4 font-weight-bold">購物明細</h4>
              <hr size="8px" align="center" width="100%">
          <div v-for="item in cartProducts" :key="item.product.id + 1">
            <div class="d-flex mb-2 bg-light">
              <img :src="item.product.imageUrl[0]" alt="" class="mr-2"
                    style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between font-weight-bold">
                  <p class="mb-0">{{ item.product.title }}</p>
                  <p class="mb-0">x{{ item.quantity }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <small class="mb-0 text-muted">
                    {{ item.product.price | currency }} / {{ item.product.unit }}
                  </small>
                </div>
              </div>
            </div>
            <hr size="8px" align="center" width="100%">
          </div>
        <!-- payable -->
         <ul class="pb-2 mb-2 border-bottom">
            <li class="d-flex justify-content-between">
                <span class="fz-2 lh-4">商品金額</span>
                <span class="fz-2 lh-4">{{ cartTotal | currency }}</span>
            </li>
            <li class="d-flex justify-content-between">
                <div class="input-group mt-3 input-group-sm">
                    <input type="text" class="form-control"
                      v-model="couponCode" placeholder="我的優惠碼 GOODDAY" />
                    <div class="input-group-append">
                      <button class="btn btn-warm" type="button"
                        @click.prevent="getCoupon" :disabled="isEnable">
                        <i v-if='isEnable === true'
                     class="spinner-border spinner-border-sm"></i>套用優惠
                      </button>
                    </div>
                  </div>
              </li>
          </ul>
   <!-- <hr size="8px" align="center" width="80%"> -->
      <ul class="pb-2 mb-2 border-bottom">
          <li class="d-flex justify-content-between">
              <span class="fz-2 lh-4">優惠折扺</span>
              <span v-if="coupon.enabled" class="fz-2 lh-4" >
                - {{ discount | currency }}</span>
              <span v-else class="fz-2 lh-4">{{ 0 | currency }} </span>
            </li>
          <li class="d-flex justify-content-between">
              <span class="fz-2 lh-4">運費</span>
              <span class="fz-2 lh-4">
                {{(cartTotal - discount)>=1000 ?'您已到達免運門檻  $0' : '$60'}}</span>
            </li>
        </ul>
        <div class="d-flex justify-content-between">
            <p class="mb-0 h5 font-weight-bold">應付金額</p>
                <p class="mb-0 h4 font-weight-bold">
                  {{ payable | currency }}
                </p>
          </div>
        </div>
    </div>
        <!-- 表單驗證 -->
        <div class="col-md-7 card">
          <!-- 表單送出前進行表單驗證（必要完成），驗證內容包含：
                姓名：必填
                Email：須符合格式
                電話：必填，超過 8 碼，input type 為 tel
                地址：必填
                付款方式：WebATM、ATM、Barcode、Credit、ApplePay、GooglePay
                留言：非必填 -->
          <!-- 表單進行驗證 -->
        <validation-observer v-slot="{ invalid }" class="col-md-12 text-left mt-3">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <!-- input 驗證 -->
              <validation-provider rules="required|email" v-slot="{ errors, classes, passed }" >
                <label for="email">Email</label>
                <input id="email" v-model="form.email" type="email"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback"></span>
              </validation-provider>
            </div>
            <div class="row">
              <div class="col">
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="username">收件人姓名</label>
                <input id="username" v-model="form.name" type="text"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
              <validation-provider rules="required|min:8" v-slot="{ errors, classes }" >
                <label for="tel">連絡電話</label>
                <input id="tel" v-model="form.tel" type="tel" class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            </div>
            </div>
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="address">收件人地址</label>
                <input id="address" v-model="form.address" type="text"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">付款方式</label>
              <select v-model="form.payment" class="form-control" required>
                <option value="" disabled>
                  請選擇付款方式
                </option>
                <option value="WebATM">
                  WebATM
                </option>
                <option value="ATM">
                  ATM
                </option>
                <option value="CVS">
                  CVS
                </option>
                <option value="Barcode">
                  Barcode
                </option>
                <option value="Credit">
                  Credit
                </option>
                <option value="ApplePay">
                  ApplePay
                </option>
                <option value="GooglePay">
                  GooglePay
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea id="message" v-model="form.message"
               class="form-control" cols="30" rows="6">
            </textarea>
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="w-25 badge-light2 btn btn-light"
                 @click="$router.push('/cart')">
                 <i class="returnIcon fas fa-angle-left"></i>回購物車</button>

                <button type="submit" @click.prevent="createOrder"
                 class="w-25 badge-secondary btn btn-primary" :disabled="invalid">
                    送出訂單
                </button>
            </div>
          </form>
        </validation-observer>
        </div>
        </div>

        </div>

        <!-- 訂單送出 modal -->
        <!-- <div id='orderSuccessModal' class="modal fade bd-example-modal-sm"
            tabindex="-1" role="dialog">
            <div class="modal-dialog modal-sm modal-dialog-centered"
            role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">完成訂單!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <p>恭禧您已完成訂購</p>
                </div>
            </div>
            </div>
        </div> -->

 </div>
</template>
<script>
// /* global $ */
import ToastsSweet from '@/utils/ToastsSweet';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      isLoading: false,
      quantity: 0,
      cartProducts: {},
      cartTotal: 0,
      coupon: {},
      couponCode: '',
      discount: 0,
      payable: 0,
      shippingFee: 0,
      isEnable: false,
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  methods: {
    getCoupon() {
      this.isEnable = true;
      this.discount = 0;
      const url = `${this.path}${this.uuid}/ec/coupon/search`;
      this.$http.post(url, { code: this.couponCode }).then((res) => {
        this.isEnable = false;
        this.coupon = res.data.data;
        this.discount = this.cartTotal * (this.coupon.percent / 100);
        this.getCartList();
        ToastsSweet.fire({
          text: `成功套用優惠卷${this.couponCode}_${this.discount}`,
          icon: 'success',
        });
      }).catch((error) => {
        this.isEnable = false;
        this.getCartList();
        const errorData = error.response.data.errors;
        if (errorData) {
          errorData.code.forEach((errmsg) => {
            ToastsSweet.fire({
              title: `${errmsg}`,
              icon: 'error',
            });
          });
        } else {
          const { message } = error.response.data;
          ToastsSweet.fire({
            title: `${message}`,
            icon: 'error',
          });
        }
      });
    },
    createOrder() {
      this.isLoading = true;
      const s = this.payable.toString();
      this.$bus.$emit('get-pay', s);
      // const { id } = this.$route.params;
      const url = `${this.path}${this.uuid}/ec/orders`;
      this.$http.post(url, this.form).then((response) => {
        // console.log(response.data.data);
        const { id } = response.data.data;
        // console.log(id);
        if (response.data.data.id) {
          this.isLoading = false;
          this.$router.push(`/checkout/${id}`);
          this.$bus.$emit('get-cart');
          ToastsSweet.fire({
            text: '您已送出訂單!',
            icon: 'success',
          });
        }
        // $('#orderSuccessModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        console.log(error.response.data.errors);
      });
    },
    getCartList() {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.cartProducts = res.data.data;
        console.log(this.cartProducts);
        this.isLoading = false;
        this.cartTotal = 0;
        this.quantity = 0;
        // this.payable = 0;
        this.cartProducts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
          this.quantity += item.quantity;
          // this.getDiscount();
        });
        this.payable = this.cartTotal - this.discount;
        if (this.payable < 1000) {
          this.shippingFee = 60;
        } else {
          this.shippingFee = 0;
        }
        this.payable += this.shippingFee;
        this.couponCode = '';
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
  computed: {
    getDiscount() {
      if (this.coupon.enabled) {
        return this.cartTotal * (this.coupon.percent / 100);
      }
      return this.discount;
    },
  },
};
</script>
