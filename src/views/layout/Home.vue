<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=60);
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
            <h2>Pet Supplies</h2>
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
          <div class="card border-0 mb-4">
            <!-- <img
              src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <div style="height:250px;
        background-size:cover;
        background-position:center;"
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
          <div class="card border-0 mb-4">
            <!-- <img
              src="https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <div style="height:250px;
        background-size:cover;
        background-position:center;"
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
          <div class="card border-0 mb-4">
            <!-- <img
              src="https://images.unsplash.com/photo-1516228726471-54b20a242a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top rounded-0"
              alt="..."
            /> -->
            <div style="height:250px;
        background-size:cover;
        background-position:center;"
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
    <div class="bg-light mt-7">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
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
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet,
             consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna.</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet,
             consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-center align-items-start">
          <p class="mb-0 font-weight-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html" id='logo'>ChaChaBo</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between
         align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uuid: process.env.VUE_APP_UUID,
      api: process.env.VUE_APP_APIPATH,
      isLoading: false,
    };
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

#logo {
  /* font-family: 'Ranchers', cursive; */
  font-family: 'Ruslan Display', cursive;
  /* font-family: 'Permanent Marker', cursive; */
  font-size: 24px;
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
