<template>
<div>
  <div class="container">
    <div class="row">
  <div class="col-2 py-5">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action badge btn-warm5
      badge-warm4 border-white"
       id="list-home-list" data-toggle="list" href="#list-home"
        role="tab" aria-controls="about">關於我們</a>
      <a class="list-group-item list-group-item-action badge btn-warm5 badge-warm4 border-white"
       id="list-profile-list" data-toggle="list" href="#list-profile"
        role="tab" aria-controls="profile">售後服務</a>
      <a class="list-group-item list-group-item-action badge btn-warm5 badge-warm4 border-white"
       id="list-messages-list" data-toggle="list" href="#list-messages"
        role="tab" aria-controls="messages">Messages</a>
    </div>
  </div>
  <div class="col-10 py-1">
    <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <router-link to='/'>HOME</router-link>
                <!-- <a class="text-muted" href="./index.html">Home</a> -->
                </li>
              <li class="breadcrumb-item">
                <router-link to='/about'>ABOUT CHRBOBO</router-link>
               </li>
            </ol>
          </nav>

    <div class="tab-content test-left" id="nav-tabContent">

      <div class="tab-pane fade show active" id="list-home"
       role="tabpanel" aria-labelledby="list-home-list">
       <h5 class="py-1">關於我們</h5>
      <hr size="10px" align="center" width="100%">
      <div class="row">
        <div class="col-6 py-3">
         <div class="" style="max-height:1200px;">
                      <img src= "https://images.unsplash.com/photo-1540411003967-af56b79be677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style="max-height:420px; object-fit: contain;"
                      class="d-block w-100" alt="...">
                    </div>
                    </div>
      <div class="col-6 py-5 text-left">
            <p> 我們所販售的每一樣產品都是經過嚴格的挑選，
              <br>以及提供高規格的專業諮詢，
              <br>想為大多數人與毛孩創造更美好的生活，<br>將最貼近美好生活的模樣傳遞到你我心中。
              <br>我們尊重彼此和彼此的差異，<br>並以開放的心胸接納每個人的貢獻。
              <br>在未來的每一天會持續努力<br>
      用專業、堅持去實現更多生活中重要的美好。</p>
      <div>
        <ul class="list-unstyled">
        <li><strong>客服專線/客服信箱 服務時間</strong></li>
        <ul>
            <li>分店客服：週一至週日 09:30 - 18:30</li>
            <li>線上購物：週一至週日 09:00 - 18:00</li>
        </ul>
        </ul>
      </div>
      </div>
            </div>
              </div>

      <div class="tab-pane fade" id="list-profile"
       role="tabpanel" aria-labelledby="list-profile-list">
       <h5 class="py-1">售後服務說明</h5>
      <hr size="10px" align="center" width="100%">
      <div class="row">
        <div class="col-6 py-3">
         <div class="" style="max-height:1200px;">
                      <img src= "https://images.unsplash.com/photo-1540411003967-af56b79be677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style="max-height:420px; object-fit: contain;"
                      class="d-block w-100" alt="...">
                    </div>
                    </div>
         <div class="col-6 py-5 text-left">
          <div>
            <ul class="">
                <li>如有更換尺寸或是更換款式需求，請重新下單即可。</li>
                <li>在收到的七天猶豫期間內，可以直接線上申請辦理”部份”或”整筆”退貨。</li>
                <li>依據法令，只要仍是全新商品且於七天猶豫期間內申請，店家須協助退回運費負擔。</li>
                  <li>同筆訂單申請第二次以上退貨，需由顧客自行支付運費。</li>
                  <li>超過鑑賞期，則無法受理退貨。</li>
            </ul>
          </div>
          </div>
            </div></div>
      <div class="tab-pane fade" id="list-messages"
       role="tabpanel" aria-labelledby="list-messages-list">...</div>
    </div>
  </div>
</div>
</div>
<div class="bg-light py-4">
      <Subscription />
    </div>
  </div>

</template>

<script>
import Subscription from '@/components/frontend/Subscription.vue';
// import About from '@/components/policy/About.vue';

export default {
  components: {
    Subscription,
  },
  name: 'About',
  data() {
    return {
    };
  },
  // mounted: {
  //   getInfo() {
  //     this.$router.push(`/product#${no}`);
  //     this.$router.push('/product#01');
  //     this.$emit('update');
  //   },
  // },
};
</script>
