<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>

    <div class="row">
    <div class="col mt-3 info">
        <h2>訂單列表管理頁</h2>
    </div>
    <div class="col col-md-auto mt-4">
        <button id='cm' type="button" class="btn btn-outline-secondary"
        @click="openOrderModal('new')">訂單模擬</button>
    </div>
    </div>
    <hr>
    <!-- Orders 列表 -->
    <table class="table">
    <thead class="thead-light">
        <tr class="table-active">
        <th width="100" scope="col">#</th>
        <th>下單時間</th>
        <th>購買品項</th>
        <th>付款方式</th>
        <th>應付金額</th>
        <th>是否付款</th>
        </tr>
    </thead>
    <tbody v-if="orders.length">
        <tr v-for='(item, index) in orders' :key='item.id'>
        <th scope="row">{{index+1}}</th>
        <td>{{item.created.datetime}}</td>
        <td class="text-left">
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }}
                數量：{{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
        </td>
        <td>{{item.payment}}</td>
        <td class="text-right">{{ item.amount | currency}}</td>
        <td>
            <div class="custom-control custom-switch">
            <input :id="item.id"
            v-model="item.paid" type="checkbox"
            class="form-check-input" @change="setOrderPaid(item)">
            <label :for="item.id">
            <i class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                        v-show="loadingBtn === item.id"></i>
            <span v-if='item.paid' class="text-success">已付款</span>
            <span v-else class="text-muted">尚未付款</span>
            </label>
            </div>
        </td>
        </tr>
    </tbody>
    </table>

    <!-- 分頁元件 -->
    <Pagination :pages='pagination' @emitPage='getOrders' ></Pagination>

    </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      loadingBtn: '',
      isLoading: '',
    };
  },
  methods: {
    setOrderPaid(item) {
      this.tempOrder = { ...item };
      this.loadingBtn = this.tempOrder.id;
      let url = `${this.path}${this.uuid}/admin/ec/orders/${item.id}/paid`;
      if (!item.paid) {
        url = `${this.path}${this.uuid}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.$http.patch(url, item.id).then(() => {
        this.tempOrder = {};
        this.loadingBtn = '';
        this.$bus.$emit(
          'message:push',
          '修改成功！',
          'success',
        );
      })
        .catch((error) => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            `修改失敗，${error}`,
            'danger');
        });
    },
    getOrders(page = 1) {
      this.isLoading = true;
      const url = `${this.path}${this.uuid}/admin/ec/orders?page=${page}`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        this.orders = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
        this.$bus.$emit(
          'message:push',
          '訂單載入成功 !',
          'success',
        );
      })
        .catch((error) => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            `訂單載入失敗，${error}`,
            'danger');
        });
    },

  },
  created() {
    this.getOrders();
  },
};
</script>
