<template>
    <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-center align-items-start">

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
    },
  },
};
</script>
