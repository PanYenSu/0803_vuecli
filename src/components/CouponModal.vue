<template>
       <div class="modal-dialog" role="document">
         <!-- <loading :active.sync="isLoading"></loading> -->
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if='tempCoupon.id'>編輯優惠券</span><span v-else>新增優惠券</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
                <!-- <div class="col-sm-4">
                </div> -->
            <div class="col-sm-12">
              <div class="form-group">
                <label for="title">優惠券名稱</label>
                <input id="title" v-model="tempCoupon.title"
                type="text" class="form-control" placeholder="請輸入優惠券名稱">
              </div>
              <div class="form-group">
                <label for="code">優惠券碼</label>
                <input id="code" v-model="tempCoupon.code"
                type="text" class="form-control" placeholder="請輸入優惠券碼">
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="due_date">到期日</label>
                  <input id="due_date" v-model="deadline_at.due_date"
                  type="text" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="due_time">到期時間</label>
                  <input id="due_time" v-model="deadline_at.due_time"
                  type="text" class="form-control">
                </div>
              </div>

                <div class="form-group">
                  <label for="percent">折扣百分比</label>
                  <input id="percent" v-model="tempCoupon.percent"
                  type="text" class="form-control" placeholder="請輸入折扣數量">
                </div>

              <div class="form-group">
                <div class="form-check custom-switch">
                  <input v-model='tempCoupon.enabled'
                  type="checkbox" class="custom-control-input" id="customSwitch1" >
                  <label class="custom-control-label" for="customSwitch1">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">
            <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
             v-if="isLoading === true"></span> -->
            {{ status === 'new' ? '新增優惠卷' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
</template>
<script>
/* global $ */

export default {
  data() {
    return {
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  props: ['tempCoupon', 'status', 'deadline_at'],
  methods: {
    updateCoupon() {
      // this.isLoading = true;
      let url = `${this.path}${this.uuid}/admin/ec/coupon`;
      let httpMethod = 'post';
      if (this.status === 'edit') {
        url = `${this.path}${this.uuid}/admin/ec/coupon/${this.tempCoupon.id}`;
        httpMethod = 'patch';
      }
      this.tempCoupon.deadline = `${this.deadline_at.due_date} ${this.deadline_at.due_time}`;
      this.$http[httpMethod](url, this.tempCoupon)
        .then(() => {
          // this.isLoading = false;
          $('#couponModal').modal('hide');
          this.$emit('emitCoupon');
        }).catch((error) => {
          this.isLoading = false;
          $('#couponModal').modal('hide');
          console.log(error);
        });
    },
  },

};
</script>
