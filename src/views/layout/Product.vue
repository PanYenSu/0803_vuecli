<template>
    <div class="container">
        <div class="content row mt-3">
         <div class="col-6">
           <img :src="product.imageUrl[0]" class="img-fluid" alt=''>
         </div>
         <div class="col-5 info">
           <h3 class="title">
             {{ product.title }}
           </h3>
      <!-- blockquote 無法實現 -->
           <p class="font-weight-bold" v-html="product.content"></p>
           <p class="font-weight-light text-right" > - {{ product.description }}</p>

           <!-- <blockquote class="blockquote">
             <p class="col-sm-9" v-html="product.content"></p>
             <footer class="blockquote-footer text-right" >
               {{ product.description }}
             </footer>
           </blockquote> -->
           <div class="d-flex justify-content-between align-items-baseline ">
             <div v-if="!product.price" class="h4" style="display:inline;">
               NT {{ product.origin_price }} 元
             </div>
             <del v-if="product.price" class="h6 col-6">
               原價 {{ product.origin_price | currency }} 元</del>
             <div v-if="product.price" class="h4 text-danger">
               特價 {{ product.price | currency }} 元
             </div>
           </div>
           <form class="">
          <div class="form-grou mb-3 mx-2">
           <select v-model="product.num" name class="form-control " style="width:80%;">
             <option value="0" disabled selected>
               請選擇數量
             </option>
             <option v-for="num in 10" :key="num" :value="num">
               選購 {{ num }} {{ product.unit }}
             </option>
           </select>
</div>
<div class="form-group mb-3 mx-2">
  <!-- <div v-if="product.num" class="text-muted text-nowrap mr-3">
             小計
             <strong>{{ product.num * product.price }}</strong> 元
        </div> -->
  <button type="button" class="btn btn-secondary mb-3 mx-2 " style="width:80%;">
  <!-- <i v-if="product.id === status.loadingItem" class="spinner-border spinner-border-sm"></i> -->
<!-- <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i> -->
             加到購物車
           </button>
         </div>
           </form>
         </div>
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
