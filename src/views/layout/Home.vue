<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative">
      <div data-aos="zoom-out" class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=60);
      background-position: center center; opacity: 0.3;"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <!-- <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="./index.html">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link mr-4 active" href="./index.html">
              Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link mr-4" href="./product.html">Product</a>
              <a class="nav-item nav-link mr-4" href="./detail.html">Detail</a>
              <a class="nav-item nav-link" href="./cart.html">
              <i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </nav> -->
        <div data-aos="fade-up"
        class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <router-link to='/products' class="nav-link">
            <h2 id='pet'>Pet Supplies</h2></router-link>
            <p class="text-muted mb-0">為親愛的毛小孩專屬設計.</p>
            <!-- <button class="btn btn-dark rounded-0 mt-6">Lorem ipsum.</button> -->
          </div>
        </div>
      </div>
    </div>
  <div></div>
    <div class="container">
      <div data-aos="fade-up" class="mt-5 text-center">
                  <h3>Hot Sales</h3>
                  <p><small>— 熱賣商品 —</small></p>
                </div>
      <div data-aos="fade-up" class="row mt-1">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4" @click="$router.push(`/product/${id[0]}`)" type="button">
            <!-- <img
              src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <!-- @click.prevent="$router.push(`/product/${item.product.id}`)" type="button" -->
            <div style="height:250px; background-size:cover; background-position:center;"
              :style="{backgroundImage:'url(https://images.unsplash.com/photo-1474827650307-5aeff1907b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}">
            </div>
            <div class="card-body text-center">
              <h4>紅色項圈</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  安全項圈(可調式安全扣)體積更小更輕，配戴不負擔。特價中!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4"  @click="$router.push(`/product/${id[1]}`)" type="button">
            <!-- <img
              src="https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <div style="height:250px; background-size:cover; background-position:center;"
            :style="{backgroundImage:'url(https://images.unsplash.com/photo-1548135160-2ddd99526762?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}">
           </div>
            <div class="card-body text-center">
              <h4>紅色護目鏡</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  採用安全鏡片有防霧功能,並且能有效對抗紫外線(100%抗UV)。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4"  @click="$router.push(`/product/${id[2]}`)" type="button">
            <!-- <img
              src="https://images.unsplash.com/photo-1516228726471-54b20a242a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <div style="height:250px; background-size:cover; background-position:center;"
            :style="{backgroundImage:'url(https://images.unsplash.com/photo-1571486440553-fdabe8ad5db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)'}">
            </div>
            <div class="card-body text-center">
              <h4>黑框護目鏡</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  針對狗狗較突出的眼球而設計出罩杯較深的護目鏡,100%抗UV的Doggles護目鏡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-7">
      <hr>
      <div class="row">
        <div data-aos="fade-right" class="col-md-6  mt-5">
          <img src="https://images.unsplash.com/photo-1556912035-f3b4093412af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">一起旅行</h4>
          <p class="text-muted">愈來愈多人選擇帶著寵物出遊，讓毛孩子享受盡情奔跑的樂趣。
            而出遊難免遇上毛孩情緒緊繃的時刻，協助狗狗安定可以透過安定背心，或是飼主擁抱的方式，舒緩動物緊繃的肢體和心理。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <!-- https://images.unsplash.com/photo-1551290464-66719418ca54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 -->
          <img data-aos="fade-left" src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">釋放精力</h4>
          <p class="text-muted">遊戲時間對狗狗來說是不可或缺的，
            適當的活動不僅可以讓狗狗身體保持健康強壯、有活力，還可以讓牠們保持心情愉快。</p>
        </div>
      </div>
    </div>
    <div class="bg-light py-4  mt-5">
      <Subscription />
    </div>
  </div>
</template>

<script>
import Subscription from '@/components/frontend/Subscription.vue';

export default {
  components: {
    Subscription,
  },
  data() {
    return {
      // uuid: process.env.VUE_APP_UUID,
      // api: process.env.VUE_APP_APIPATH,
      email: '',
      isLoading: false,
      id: [
        'X4mnixiulwnYrQo4eV8AOjloM2M9ZvsfnfF0RgL1r8DDWPdueS9gudYz4Xsyf7wk',
        'LUFD0r5NWCgLpXpa0n40DeHWFkuBNXmb3lpZbYtWariVUph1zHcNHxzWqiYMXeVQ',
        '7aPr8Txlxfx85NKh23HextgvOhcSSwufuD3BXqT97ZxCt6c1puZlTb1TN3O7depB',
      ],
    };
  },
  methods: {

  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

#logo {
  /* font-family: 'Ranchers', cursive; */
  font-family: 'Ruslan Display', cursive;
  /* font-family: 'Permanent Marker', cursive; */
  font-size: 24px;
}
#pet {
  font-family: 'Amatic SC', cursive;
  font-size: 48px;
}
.badge-wrapper {
        /* top: -5px;
        right: -5px; */
        position: absolute;
        display: inline-block;
        background-color: #f16c5d;
        color: #ffffff;
        border-radius: 50%;
        padding: 3px;
        width: 20px;
        height: 18px;
      }

</style>
