<template>
  <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
  <!-- 進度條 -->
      <div class="progress">
        <div v-if="isPaid===false"
         class="progress-bar bg-warm3 progress-bar-striped progress-bar-animated"
        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
          style="width: 80%">
          <span class="sr-only">80% 完成</span>
        </div>
        <div v-else
         class="progress-bar bg-warm3 progress-bar-striped progress-bar-animated"
        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
          style="width: 100%">
          <span class="sr-only">100% 完成</span>
        </div>
      </div>

        <div class="content">
          <div class="header">
          <h4 class="py-3">確認購買與付款方式</h4>
          </div>
        <div class="row">
        <!--cartDetailContent -->
          <div class="col-md-6">
            <div class="border p-3 mx-2 mb-4 order-card">

<!-- 訂單完成切換 -->
<div class="card rounded-0 py-4 mb-2">
        <div v-if="order.paid">
          <h4 class="text-brown font-weight-bold">~ 感謝訂購 ~</h4>
          <div class="">
            <p>訂單付款完成預計1~2天出貨</p>
            <div style="
                    height: 400px;
                    background-size: cover;
                    background-position: center;
                    backgroundImage: url('https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')">
            </div>
          </div>
          <!-- <router-link to="/"
            class="btn btn-outline-dark mr-2 rounded-0 mt-4">
            回到首頁
          </router-link> -->
        </div>

        <div v-else>
          <!-- <h2 class="mb-5 text-brown font-weight-bold py-3">確認購買與付款方式</h2> -->
          <hr>
          <div>
          <p class='text-left px-4'>付款前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容
          </p>
          <div class="form-group form-check text-left px-5">
          <input v-model='enabled' type="checkbox" class="form-check-input" id="Check">
          <label class="form-check-label" for="Check">
            <p>我同意接受服務條款和隱私權政策</p></label>
          </div>
        </div>
          <!-- <p class='text-left px-4'>我同意接受服務條款和隱私權政策</p> -->
        </div>
        </div>

             <div class="card rounded-0 py-4 mb-2">

            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h4 class="font-weight-bold mb-2">
                訂單明細
              </h4>
              <hr>
            </div>

            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li v-for="(item, i) in order.products" :key="i"
                    class="list-group-item px-0">
                  <div class="d-flex mt-1">
                    <img :src="item.product.imageUrl[0]"
                         alt="" class="mr-2"
                         style="width: 60px; height: 60px; object-fit: cover">
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between font-weight-bold">
                        <h6>{{ item.product.title }}</h6>
                        <p class="mb-0">x{{ item.quantity }}</p>
                      </div>
                      <div class="text-right">
                        <p class="mb-0">
                          {{ item.product.price | currency }}/{{ item.product.unit }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <hr>
              <div class="d-flex justify-content-between">
                <p class="mb-0 h5 font-weight-bold">應付金額</p>
                <p class="mb-0 h5 font-weight-bold">
                  {{ order.amount | currency }}
                </p>
              </div>
            </div>

        </div>

        </div>
        </div>

        <!-- order.payment -->
        <div class="col-md-6">
            <div class="border p-3 mx-2 mb-4 order-card">
             <div class="card rounded-0 py-4 mb-2">
            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h4 class="font-weight-bold mb-2">
                付款資訊確認
              </h4>
              <hr>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">

                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">Email</th>
                        <td class="text-right border-0 px-0">
                          {{ order.user.email }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人姓名</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.name }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人電話</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.tel }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人地址</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.address }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>

                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">
                          付款金額
                        </th>
                        <td class="text-right border-0 px-0">
                          {{ order.amount | currency }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.payment }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款狀態
                        </th>
                        <td class="text-right border-0 px-0 pt-0">
                          <span v-if="!order.paid">尚未付款</span>
                          <strong v-else
                                  class="text-success">付款完成</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <div class="text-right"
                       v-if="order.paid === false">
                    <button class="btn btn-danger"
                            @click.prevent="payOrder"
                            :disabled="isProcessing">
                      確認付款
                      <i class="fas fa-spinner fa-spin"
                         v-if="isProcessing">
                      </i>
                    </button>
                  </div> -->
                </li>

              </ul>
            </div>
          </div>
          <!-- <a href="#"
             @click.prevent="backHome"
             class="btn btn-outline-dark mr-2 rounded-0 mb-4"
             v-if="order.paid === false">
            回到首頁
          </a> -->
<!-- justify-content-center -->
          <div class="modal-footer d-flex justify-content-between">
              <button  v-show="order.paid === false" type="submit"
                class="w-100 badge-secondary btn btn-primary rounded-0"
                @click.prevent="payOrder" :disabled="!enabled===true">
                  確認付款
                  <i class="fas fa-spinner fa-spin" v-if="isPaid"></i>
              </button>
              <button v-if="order.paid === true" type="button"
                class="w-100 btn btn-outline-dark mr-2 rounded-0 mt-4"
                @click.prevent="backHome">
                <i class="returnIcon fas fa-angle-left"></i>繼續購物</button>
            </div>
        </div>
        </div>

      </div>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import ToastsSweet from '@/utils/ToastsSweet';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      orderId: '',
      enabled: false,
      isLoading: false,
      isPaid: false,
    };
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${this.path}${this.uuid}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.isPaid = false;
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.data;
          if (this.order.paid === true) {
            this.isPaid = true;
          }

          this.isLoading = false;
        })
        .catch(() => {
          ToastsSweet.fire({
            title: '無法取得資料！',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    payOrder() {
      const url = `${this.path}${this.uuid}/ec/orders/${this.orderId}/paying`;
      this.isPaid = false;
      this.$http.post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.isPaid = true;
            this.getOrder();
            ToastsSweet.fire({
              title: '感謝您完成付款！',
              icon: 'success',
            });
          }
          this.enabled = false;
        })
        .catch(() => {
          ToastsSweet.fire({
            title: '唉呀 付款失敗!',
            icon: 'error',
          });
          this.isPaid = false;
          this.enabled = false;
        });
    },
    backHome() {
      if (this.isPaid === false) {
        Swal.fire({
          icon: 'warning',
          title: '您尚未完成付款！',
        });
      } else {
        this.$router.push('/');
        ToastsSweet.fire({
          title: 'Hi~ 歡迎繼續選購！',
          icon: 'success',
        });
      }
    },
  },
};
</script>

<style scoped>
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }
</style>
