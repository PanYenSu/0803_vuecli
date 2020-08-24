<template>
       <div class="modal-dialog modal-xl" role="document">
         <!-- <loading :active.sync="isLoading"></loading> -->
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if='tempProduct.id'>編輯產品</span><span v-else>新增產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
            <div v-for="i in 5" :key="i + 'img'" class="form-group">
                    <label :for="'img' + i">輸入圖片網址</label>
                    <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]"
                    type="text" class="form-control"
                      placeholder="請輸入圖片連結">
                  </div>
                  <div class="form-group">
                    <label for="customFile">
                      或 上傳圖片
                      <i v-if="status.fileUploading" class="fas fa-spinner fa-spin"></i>
                    </label>
                    <!-- ref屬性直接取得input DOM元素 -->
                    <input id="customFile" ref="file"
                    type="file" class="form-control" @change="uploadFile">
                  </div>
                  <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
                </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input id="title" v-model="tempProduct.title"
                type="text" class="form-control" placeholder="請輸入標題">
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
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input id="origin_price" v-model="tempProduct.origin_price"
                  type="number" class="form-control"
                    placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="description">產品說明</label>
                <textarea id="description" v-model="tempProduct.description"
                type="text" class="form-control"
                  placeholder="請輸入產品說明" required>
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">產品描述</label>
                <textarea id="content" v-model="tempProduct.content"
                class="form-control"
                  placeholder="請輸入描述內容">
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check custom-switch">
                  <!-- <input id="is_enabled" v-model="tempProduct.enabled"
                  class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>  -->
                  <input v-model='tempProduct.enabled'
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
          <button type="button" class="btn btn-primary" @click="updateProduct">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
             v-if="isLoading === true"></span>
            確認
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
      isLoading: false,
    };
  },
  props: ['tempProduct', 'api', 'status'],
  methods: {
    updateProduct() {
      this.isLoading = true;
      let url = `${this.api.path}${this.api.uuid}/admin/ec/product`;
      let httpMethod = 'post';
      if (this.tempProduct.id) {
        url = `${this.api.path}${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }
      this.$http[httpMethod](url, this.tempProduct)
        .then(() => {
          this.isLoading = false;
          $('#productModal').modal('hide');
          this.$emit('emitProduct');
        }).catch((error) => {
          this.isLoading = false;
          $('#productModal').modal('hide');
          console.log(error);
        });
    },
    // 上傳檔案
    uploadFile() {
    // ref屬性(ref="file")直接取得input DOM元素  选择文件后，文件的名字就能直接绑定到input上
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${this.api.path}${this.api.uuid}/admin/storage`;
      this.status.fileUploading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        this.status.fileUploading = false;
        if (response.status === 200) {
          this.tempProduct.imageUrl.push(response.data.data.path);
        }
      }).catch(() => {
        console.log('上傳不可超過 2 MB');
        this.status.fileUploading = false;
      });
    },
  },

};
</script>
