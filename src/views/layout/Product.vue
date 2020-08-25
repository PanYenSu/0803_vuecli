<template>
    <div class="container py-3">
      <loading :active.sync="isLoading"></loading>
        <div class="row align-items-center">
         <!-- <div class="col-7" style="height:400px; weight:550px;
                    background-size:cover;
                    background-position:center;"
                    :style="{backgroundImage:`url(${product.imageUrl[0]})`}">
                </div> -->
                <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <img :src= "product.imageUrl[0]" style="max-height:420px; object-fit: contain;"
                class="d-block w-100" alt="...">
              </div>
              <div v-for="(item, i) in product.imageUrl" :key="i"
              class="carousel-item" style="max-height:420px;">
              <!-- <img :src= "product.imageUrl[i]" style="height:430px; weight:550px;" -->
                <img :src= "product.imageUrl[i]" style="max-height:420px; object-fit: contain;"
                class="d-block w-100" alt="...">
              </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls"
             role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls"
             role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

       <div class="col-md-5">
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <router-link to='/'>Home</router-link>
                <!-- <a class="text-muted" href="./index.html">Home</a> -->
                </li>
              <li class="breadcrumb-item">
                <router-link to='/products'>Product</router-link>
               </li>
              <li class="breadcrumb-item" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>
          <hr>

          <p class="font-weight-bold text-right py-3" v-html="product.content"></p>
          <p v-if='!product.price' class="h4 font-weight-bold text-right">
            NT{{ product.price | currency }}</p>
          <p v-if="product.price" class="mb-0 text-muted text-right"><del>
            NT{{ product.origin_price | currency }}</del></p>
          <p v-if="product.price" class="h4 font-weight-bold text-right">
            NT{{ product.price | currency }}</p>
          <div class="d-flex align-items-center">
            <div class="input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1" value="1">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <a href="#" class="btn btn-dark btn-block py-2" @click.prevent="addToCart">加到購物車</a>
          </div>
          <p class="font-weight-light text-left" > - {{ product.description }}</p>
        </div>

      <!-- blockquote 無法實現 -->
           <!-- <blockquote class="blockquote">
             <p class="col-sm-9" v-html="product.content"></p>
             <footer class="blockquote-footer text-right" >
               {{ product.description }}
             </footer>
           </blockquote> -->
       </div>

       <!-- <div class="row my-5">
        <div class="col-md-4">
          <p v-html="product.content"></p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">{{ product.description }}</p>
        </div>
      </div> -->

      <nav class="py-2">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
          href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">產品資訊</a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
           role="tab" aria-controls="nav-profile" aria-selected="false">付款方式</a>
          <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
           role="tab" aria-controls="nav-contact" aria-selected="false">退換貨服務</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home"
        role="tabpanel" aria-labelledby="nav-home-tab">...</div>
        <div class="tab-pane fade" id="nav-profile"
        role="tabpanel" aria-labelledby="nav-profile-tab">
        付款後，從備貨到寄出商品為 3 個工作天。（不包含假日）信用卡安全加密付款,
         信用卡安全加密付款, 7-11 ibon 代碼繳費, ATM 轉帳繳費, 全家 FamiPort 代碼繳費,
          信用卡分期 (3 期零利率), 信用卡分期 (6 期零利率), LINE Pay, Alipay 支付寶</div>
        <div class="tab-pane fade" id="nav-contact"
        role="tabpanel" aria-labelledby="nav-contact-tab">
        退款申請須於收到商品後隔日起算 7 日內提出
        ，攜帶完好商品、原始包裝、原購物發票到分店退換貨。信用卡付款請本人攜帶原信用卡與簽單。
        開立統一編號者請攜帶統一發票專用章或公司大小章。</div>
      </div>

      <h3 class="font-weight-bold py-5">Lorem ipsum dolor sit amet</h3>

    </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      product: {
        num: 1,
      },
    };
  },
  methods: {
    addToCart() {
    },
    getProduct() {
      // console.log(this.$route);
      this.isLoading = true;
      const { id } = this.$route.params;
      // const aID = this.$route.params.id;
      console.log(id);
      this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((res) => {
          this.product = res.data.data;
          this.isLoading = false;
          // console.log(this.product);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
/* @import '../node_modules/bootstrap/scss/functions';
@import '../node_modules/bootstrap/scss/bootstrap'; */
</style>
