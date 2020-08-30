<template>
    <div class="container py-3">
        <loading :active.sync="isLoading"></loading>
        <div class="content">
        <div class="header">
          <h5 class="title">訂購表單</h5>

        </div>
        <div class="col-md-12">
          <!-- 表單送出前進行表單驗證（必要完成），驗證內容包含：
                姓名：必填
                Email：須符合格式
                電話：必填，超過 8 碼，input type 為 tel
                地址：必填
                付款方式：WebATM、ATM、Barcode、Credit、ApplePay、GooglePay
                留言：非必填 -->
          <!-- 表單進行驗證 -->
        <validation-observer v-slot="{ invalid }" class="col-md-6">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <!-- input 驗證 -->
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="username">收件人姓名</label>
                <input id="username" v-model="form.name" type="text"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required|email" v-slot="{ errors, classes, passed }" >
                <label for="email">Email</label>
                <input id="email" v-model="form.email" type="email"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">Email 正確</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required|min:8" v-slot="{ errors, classes }" >
                <label for="tel">電話</label>
                <input id="tel" v-model="form.tel" type="tel" class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <label for="address">地址</label>
                <input id="address" v-model="form.address" type="text"
                 class="form-control" :class="classes">
                <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">購買方式</label>
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
              <textarea id="message" v-model="form.message" class="form-control" cols="30" rows="3">
            </textarea>
            </div>
            <div class="text-right">
                <button type="button" class="w-25 badge-light2 btn btn-light"
                 @click="$router.push('/cart')">
                 <i class="returnIcon fas fa-angle-left"></i>回購物車</button>

                <button type="submit" class="btn btn-primary" :disabled="invalid">
                    送出表單
                </button>
            </div>
          </form>
        </validation-observer>
        </div>
        </div>

        <!-- 訂單送出 modal -->
        <div id='orderSuccessModal' class="modal fade bd-example-modal-sm"
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
        </div>

 </div>
</template>
<script>
/* global $ */
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
    };
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/ec/orders`;
      this.$http.post(url, this.form).then((response) => {
        if (response.data.data.id) {
          this.isLoading = false;
          console.log('送出表單');
          console.log(response);
          this.getCartNum();
        }
        $('#orderSuccessModal').modal('show');
      }).catch((error) => {
        this.isLoading = false;
        console.log(error.response.data.errors);
      });
    },
  },
};
</script>
