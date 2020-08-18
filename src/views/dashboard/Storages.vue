<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>

    <div class="row">
    <div class="col mt-3 info">
        <h2>圖片管理頁面</h2>
    </div>
    <!-- <div class="col col-md-auto mt-4">
        <button id='cm' type="button" class="btn btn-outline-secondary"
        @click="openOrderModal('new')">訂單模擬</button>
    </div> -->
    </div>
    <hr>
    <!-- Storage list -->
    <table class="table">
    <thead class="thead-light">
        <tr class="table-active">
        <th width="100" scope="col">#</th>
        <th>縮圖</th>
        <th>操作</th>
        </tr>
    </thead>
    <tbody v-if="storages.length">
        <tr v-for='(item, index) in storages' :key='item.id'>
        <th scope="row">{{index+1}}</th>
        <td>
             <img :src="item.path" width="100px" class="img-fluid">
        </td>
        <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-danger"
                @click.prevent="openModel(item)">
                刪除圖檔</button>
            </div>
          </td>
        </tr>
    </tbody>
    </table>

    <!-- 分頁元件 -->
    <Pagination :pages='pagination' @emitPage='getStorage' ></Pagination>
    <!-- Del Coupon Modal -->
    <div id='delModal' class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">刪除圖檔</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <strong class="text-danger">是否刪除此筆資料</strong>(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button @click="delData" type="button" class="btn btn-danger">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                        v-if="loadingBtn === tempStorage.id"></span>確認刪除</button>
        </div>
        </div>
    </div>
    </div>

    </div>
</template>
<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      storages: [],
      tempStorage: {},
      pagination: {},
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      loadingBtn: '',
      isLoading: '',
    };
  },
  methods: {
    openModel(item) {
      $('#delModal').modal('show');
      this.tempStorage = { ...item };
    },
    delData() {
      this.loadingBtn = this.tempStorage.id;
      const url = `${this.path}${this.uuid}/admin/storage/${this.tempStorage.id}`;
      this.$http.delete(url).then(() => {
        $('#delModal').modal('hide');
        this.getStorage();
        this.loadingBtn = '';
      })
        .catch((error) => {
          console.log(error);
          this.loadingBtn = '';
        });
    },
    getStorage(page = 1) {
      this.isLoading = true;
      this.tempStorage = {};
      const url = `${this.path}${this.uuid}/admin/storage?page=${page}`;
      this.$http.get(url).then((res) => {
        this.storages = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
        this.$bus.$emit(
          'message:push',
          'Data載入成功',
          'success',
        );
      })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.$bus.$emit('message:push',
            `Data載入失敗，${error}`,
            'danger');
        });
    },

  },
  created() {
    this.getStorage();
  },
};
</script>
