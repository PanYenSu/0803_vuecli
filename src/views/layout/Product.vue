<template>
    <div class="container">
        <div class="row align-items-center">
         <div class="col-6">
           <img :src="product.imageUrl[0]" class="img-fluid" alt=''>
         </div>
           <!-- <h3 class="title">
             {{ product.title }}
           </h3> -->
<!-- demo star -->
<div class="col-md-5">
          <!-- <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0">
              <li class="breadcrumb-item"><router-link :to="`/products`">
                <i class="text-muted"> Products</i>
                </router-link></li>
              <li class="breadcrumb-item"><router-link :to="`/product/${product.id}`">
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm">
                  {{ product.title }} Detail</i>
                </router-link></li>
            </ol>
          </nav> -->

          <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>

          <p class="font-weight-bold text-left" v-html="product.content"></p>
          <p v-if='!product.price' class="h4 font-weight-bold text-right">
            {{ product.price | currency }} 元</p>
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

<!-- demo end -->
      <!-- blockquote 無法實現 -->
           <!-- <blockquote class="blockquote">
             <p class="col-sm-9" v-html="product.content"></p>
             <footer class="blockquote-footer text-right" >
               {{ product.description }}
             </footer>
           </blockquote> -->
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        num: 1,
      },
    };
  },
  methods: {
    addToCart() {
    },
  },
  created() {
    console.log(this.$route);
    const { id } = this.$route.params;
    // const aID = this.$route.params.id;
    console.log(id);
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
        console.log(this.product);
      });
  },
};
</script>

<style scoped>
/* @import '../node_modules/bootstrap/scss/functions';
@import '../node_modules/bootstrap/scss/bootstrap'; */
</style>
