<template>
    <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-center align-items-start">
          <!-- <p class="mb-0 font-weight-bold  w-10">訂閱我們</p> -->

<!-- <div class="input-group w-md-50 mt-md-0 mt-3">
          <validation-provider rules="required|email" v-slot="{ errors, classes, passed }" >
                <label for="email" class="col-sm-2 col-form-label">訂閱我們</label>
                <input id="email" v-model="email" type="email"
                 class="form-control rounded-0"
                  placeholder="輸入E-MAIL訂閱獲取最新活動.優惠訊息" required/>
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">Email 正確</span>
              </validation-provider>
              <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search"
              @click="subscription">
                送出
              </button>
            </div>
          </div> -->

          <div class="input-group w-md-50 mt-md-0 mt-3">
            <label for='email' class="col-sm-2 col-form-label">訂閱我們</label>
            <input id='email' v-model="email" type="email" name='email'
             class="form-control rounded-0"
             placeholder="輸入E-MAIL訂閱獲取最新活動.優惠訊息" required/>
            <div class="input-group-append">
              <button class="btn btn-warm rounded-0" type="button" id="search"
              @click="subscription">
                訂閱
              </button>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import ToastsSweet from '@/utils/ToastsSweet';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscription() {
      // console.log(this.email);
      // const myreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.email.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) !== (-1)) {
        Swal.fire({
          icon: 'success',
          title: '電子報訂閱成功！',
          text: '優惠碼: GOODDAY',
        });
        this.email = '';
      } else {
        ToastsSweet.fire({
          title: 'E-MAIL 輸入錯誤！',
          icon: 'error',
        });
        this.email = '';
      }
      // https://github.com/Wendy03/ec_coffee/blob/master/src/views/Layout.vue
    },
  },
};
</script>
