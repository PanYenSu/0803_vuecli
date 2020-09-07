<template>
<div>
  <div class="container">
    <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <router-link to='/'>HOME</router-link>
                <!-- <a class="text-muted" href="./index.html">Home</a> -->
                </li>
              <li class="breadcrumb-item">
                <router-link to='/about'>ABOUT CHACHABO</router-link>
               </li>
            </ol>
          </nav>
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
        role="tab" aria-controls="messages">寵物健康</a>
    </div>
  </div>
  <div class="col-10 py-1">

    <div class="tab-content test-left" id="nav-tabContent">

      <div class="tab-pane fade show active" id="list-home"
       role="tabpanel" aria-labelledby="list-home-list">
       <h5 class="py-1">關於我們</h5>
      <hr size="10px" align="center" width="100%">
      <div class="row">
        <div class="col-6 py-3">
         <div class="" style="max-height:1200px;">
                      <img src= "https://images.unsplash.com/photo-1540411003967-af56b79be677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style="max-height:480px; object-fit: contain;"
                      class="d-block w-100" alt="...">
                    </div>
                    </div>
      <div class="col-6 py-5 text-left">
            <p> 我們所販售的每一樣產品都是經過嚴格的挑選，
              <br>想為大多數人與毛孩創造更美好的生活，
              <br>將潮流風格與設計品味在寵物用品上作呈現，
              <br>以及提供高規格的專業諮詢，
              <br>使寵物與飼主能獲得更好的生活品質。
              <br>將最貼近美好生活的模樣傳遞到你我心中。
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
                      <img src= "https://images.unsplash.com/photo-1540411003967-af56b79be677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style="max-height:480px; object-fit: contain;"
                      class="d-block w-100" alt="...">
                    </div>
                    </div>
         <div class="col-6 py-5 text-left">
          <div>
             <ul class="list-unstyled">
              <li><strong>退貨須知</strong></li>
              <ul>
                <li>如有更換尺寸或是更換款式需求，請重新下單即可。</li>
                <li>在收到的七天猶豫期間內，可以直接線上申請辦理”部份”或”整筆”退貨。</li>
                <li>依據法令，只要仍是全新商品且於七天猶豫期間內申請，店家須協助退回運費負擔。</li>
                <li>同筆訂單申請第二次以上退貨，需由顧客自行支付運費。</li>
                <li>超過鑑賞期，則無法受理退貨。</li>
            </ul>
            <li><strong>退貨辦法</strong></li>
            <ul>
              <li>該筆訂單後方「辦理退貨」選項（如超過鑑賞期，該選項即消失）。</li>
              <li>勾選您要退貨之商品數量與選擇退貨原因。</li>
              <li>請保留收據以茲證明。</li>
              <li>退貨流程約7-10天（含例假日）完成；待我們收到退貨包裹會確認退貨商品無誤後處理退款，同時MAIL通知您。</li>
              </ul>
            </ul>
          </div>
          </div>
            </div></div>
      <div class="tab-pane fade" id="list-messages"
       role="tabpanel" aria-labelledby="list-messages-list">
<h5 class="py-1">10 種不可以給犬吃的有毒食物</h5>
      <hr size="10px" align="center" width="100%">
      <div class="row">
        <div class="col-6 py-3">
         <div class="" style="max-height:1200px;">
                      <img src= "https://images.unsplash.com/photo-1558231585-262086891e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" style="max-height:480px; object-fit: contain;"
                      class="d-block w-100" alt="...">
                    </div>
                    </div>
      <div class="col-6 py-5 text-left">
            <p>
              有許多常見的食物可能會導致寵物出現嚴重問題。
              所以如果要餵食飼料以外的食物，請先向獸醫師諮詢。
              <br> 以下是十種會導致犬隻發生嚴重健康問題的食物。
              </p>
      <div>
        <!-- <ul class="list-unstyled">
        <li><strong>客服專線/客服信箱 服務時間</strong></li> -->
        <ul>
            <li><strong>人工甘味劑</strong><span class="font-weight-light"> - 對犬隻而言，木糖醇具有毒性。</span></li>
            <li><strong>酒精</strong><span class="font-weight-light"> - 牠們的腎臟無法有效處理酒精。</span></li>
            <li><strong>酪梨</strong><span class="font-weight-light">
               - 酪梨肉可以食用，但酪梨籽、皮和葉子卻有毒，會導致嘔吐和腹瀉。</span></li>
            <li><strong>咖啡因</strong><span class="font-weight-light">
               - 攝取了咖啡因，可能會非常興奮或開始發抖。</span></li>
            <li><strong>巧克力</strong><span class="font-weight-light">
               - 可可鹼對犬而言毒性非常高，興奮劑會中斷犬的代謝過程，可能會腸胃不適、心臟病、癲癇，或死亡。</span></li>
            <li><strong>油炸和富含脂肪物</strong><span class="font-weight-light">
               - 使胃部不適，肥胖和相關健康問題。</span></li>
            <li><strong>大蒜和洋蔥</strong><span class="font-weight-light">
               - 對牠們的紅血球造成損害而導致貧血。</span></li>
            <li><strong>葡萄和葡萄乾</strong><span class="font-weight-light">
               - 可能導致急性和突然腎功能衰竭。</span></li>
            <li><strong>堅果</strong><span class="font-weight-light">
               - 特別注意是夏威夷豆已獲證實對犬來說有很大的毒性，會造成犬無法行走、嘔吐、嗜睡和發抖。</span></li>
               <li><strong>牛奶、奶油和起司</strong><span class="font-weight-light">
               - 成犬因缺少足夠的消化酶，所以無法消化乳製品。</span></li>
        <!-- </ul> -->
        </ul>
      </div>
      </div>
            </div>

       </div>
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
