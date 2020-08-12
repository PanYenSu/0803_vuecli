<template>
       <div class="modal-dialog" role="document">
         <!-- <loading :active.sync="isLoading"></loading> -->
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if='tempProduct.id'>編輯優惠券</span><span v-else>新增優惠券</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- <div class="modal-body">
          <div class="row">
                <div class="col-sm-4">

                </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">優惠券名稱</label>
                <input id="title" v-model="tempProduct.title"
                type="text" class="form-control" placeholder="請輸入優惠券名稱">
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input id="category" v-model="tempProduct.category"
                  type="text" class="form-control"
                    placeholder="請輸入分類" >
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input id="unit" v-model="tempProduct.unit" type="text" class="form-control"
                    placeholder="請輸入單位">
                </div>
              </div>

              <hr>
              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea id="description" v-model="tempProduct.description"
                type="text" class="form-control"
                  placeholder="請輸入產品描述" >
                </textarea>
              </div>

              <div class="form-group">
                <div class="form-check custom-switch">
                  <input v-model='tempProduct.enabled'
                  type="checkbox" class="custom-control-input" id="customSwitch1" >
                  <label class="custom-control-label" for="customSwitch1">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
             v-if="isLoading === true"></span> -->
            確認
          </button>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  props: ['tempProduct', 'status'],
  methods: {
    updateProduct() {

    },
  },

};
</script>
