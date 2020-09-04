<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=60);
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
        <div class="row justify-content-center my-auto">
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
      <div class="mt-5 text-center">
                  <h3>Hot Sales</h3>
                  <p><small>— 熱賣商品 —</small></p>
                </div>
      <div class="row mt-5">
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
    <div class="bg-light mt-7" >
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" style="opacity:0.5; weight:100%; background-image:url(https://images.unsplash.com/photo-1555666062-7fc37d5271f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7" style="opacity:1;">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—888888888888888888888.—</small></p>
                </div>
              </div>
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
    </div>
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
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
          <img src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">釋放精力</h4>
          <p class="text-muted">遊戲時間對狗狗來說是不可或缺的，
            適當的活動不僅可以讓狗狗身體保持健康強壯、有活力，還可以讓牠們保持心情愉快。</p>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-center align-items-start">
          <!-- <p class="mb-0 font-weight-bold  w-10">訂閱我們</p> -->

<!-- <div class="input-group w-md-50 mt-md-0 mt-3">
          <validation-provider rules="required|email" v-slot="{ errors, classes, passed }" >
                <label for="email" class="col-sm-2 col-form-label">訂閱我們</label>
                <input id="email" v-model="email" type="email"
                 class="form-control rounded-0"
                  placeholder="輸入E-MAIL訂閱獲取最新活動.優惠訊息" required/>
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">Email 正確</span>
              </validation-provider>
              <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search"
              @click="subscription">
                送出
              </button>
            </div>
          </div> -->

          <div class="input-group w-md-50 mt-md-0 mt-3">
            <label for='email' class="col-sm-2 col-form-label">訂閱我們</label>
            <input id='email' v-model="email" type="email" name='email'
             class="form-control rounded-0"
             placeholder="輸入E-MAIL訂閱獲取最新活動.優惠訊息" required/>
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search"
              @click="subscription">
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ToastsSweet from '@/utils/ToastsSweet';

export default {
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
    subscription() {
      // http://mishengqiang.com/sweetalert2/
      // https://github.com/Wendy03/ec_coffee/blob/master/src/views/Layout.vue
      ToastsSweet.fire({
        title: '電子報訂閱成功！',
        icon: 'success',
      });
    },
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
