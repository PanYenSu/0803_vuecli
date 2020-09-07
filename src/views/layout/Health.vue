<template>
    <div>
         <div class="container my-7">
             <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <router-link to='/'>HOME</router-link>
                <!-- <a class="text-muted" href="./index.html">Home</a> -->
                </li>
              <li class="breadcrumb-item">
                <router-link to='/health'>寵健康</router-link>
               </li>
            </ol>
          </nav>

          <!-- test info -->
           <div class="bg-light mt-7" >
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

          <div class="carousel-inner">
                  <img src="https://images.unsplash.com/photo-1545387804-ff58d3817f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                   alt="" class="mr-2"
                   style="width: 1070px; height:170px; object-fit: cover;opacity:0.5;">
                  <!-- </div> -->
          <!-- <div class="carousel-inner" style="opacity:0.5; weight:1200px;
           background-image:url(https://images.unsplash.com/photo-1545387804-ff58d3817f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"> -->
            <div class="carousel-item active">
              <div class="row justify-content-center py-7" style="opacity:1;">
                <div class="col-md-6 text-center text-light">
                  <h3 class="py-1">狗狗會感冒嗎？</h3>
                  <p class="my-1">“當然會囉！,
                     此外，幼犬也容易得到一種名為
                      犬傳染性氣管支氣管炎的疾病，
                      也就是俗稱的「犬窩咳」。”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center text-light">
                  <h3 class="py-1">狗狗多久洗一次澡？</h3>
                  <p class="my-1">“一般建議7-10天洗一次即可。
                    由於狗狗的皮膚表層和人類不同，
                    洗得太勤反而會破壞表皮的細菌生態，
                    反而引起皮膚方面的疾病。”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 text-center text-light">
                  <h3 class="py-1">狗狗也有分血型嗎？</h3>
                  <p class="my-1">“狗狗的血型可分成13種，
                    若不小心輸錯血，狗狗身體小、血液循環快，
                    很可能造成體內免疫系統失衡，
                    而由壁蝨帶原的「焦蟲症」，
                    會破壞紅血球，導致氧氣難以被運送，
                    若紅血球指數低於15%，就需要馬上輸血！”</p>
                  <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                   target="_blank" style="text-decoration:none;">
                   新手狗爸媽的常見QA｜專業獸醫—吳展祥</a>—</small></p>
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
             <!-- <h4 class="mt-4">10 種不可以給狗狗吃的有毒食物</h4>
      <div class="row">
        <div class="col-md-6  mt-5">
          <img src="https://images.unsplash.com/photo-1551290464-66719418ca54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
           alt="" class="img-fluid">
        </div>
        <div class="col-md-6 py-5 m-auto text-left">

          <p class="text-muted">有許多常見的食物可能會導致寵物出現嚴重問題。
              <br>所以如果要餵食飼料以外的食物，請先向獸醫師諮詢。
              <br> 以下是十種會導致犬隻發生嚴重健康問題的食物。
          </p>
          <div>
        <ul>
            <li><strong>人工甘味劑</strong><span class="font-weight-light"> - 對犬隻而言，木糖醇具有毒性。</span></li>
            <li><strong>酒精</strong><span class="font-weight-light">
                 - 牠們的腎臟無法有效處理酒精，新鮮、乾淨的清水就是最好的。</span></li>
            <li><strong>酪梨</strong><span class="font-weight-light">
               - 酪梨肉可以食用，但酪梨籽、皮和葉子卻有毒，因為裡面含有一種稱為 Persin 的毒素，會導致狗狗嘔吐和腹瀉。</span></li>
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
        </ul>
      </div>
        </div>

        </div>

      <hr> -->
      <!-- <div class="row flex-row-reverse justify-content-center mt-4"> -->
          <!-- <div class="container my-7"> -->
              <h4 class="mt-4">10 種不可以給狗狗吃的有毒食物</h4>
          <div class="row">
        <div class="col-md-5 mt-5 ">
          <!-- https://images.unsplash.com/photo-1551290464-66719418ca54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 -->
          <img class="img-fluid"  style="max-width:150%; height:auto;"
          src="https://images.unsplash.com/photo-1551290464-66719418ca54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" >
        </div>
        <div class="col-md-6 py-5 m-auto text-left">

          <p class="text-muted h5">有許多常見的食物可能會導致寵物出現嚴重問題。
            <p class="text-muted h5">如果您認為自己的愛犬可能已經吃下不該吃的東西，
                請立即尋求獸醫師的協助以獲得重要的相關建議。
            <p class="text-muted h5">您也應該要將有毒的食物放在狗兒無法碰到的地方，
                確保牠們只能攝取最適合牠們的食物。
            <p class="text-muted h5"> 以下是十種會導致犬隻發生嚴重健康問題的食物。
          </p>
          </div>
          </div>
        <!-- text-center -->
        <div class="col-md-12 m-auto text-left py-5">
          <dl class="row">
  <dt class="col-sm-2">人工甘味劑</dt>
  <dd class="col-sm-10">木糖醇是一種人工甘味劑，口香糖、無糖醬、牙膏和其他產品都會加入這種甘味劑。對犬隻而言，木糖醇具有毒性。</dd>

  <dt class="col-sm-2">酒精</dt>
  <dd class="col-sm-10">牠們的腎臟無法有效處理酒精，新鮮、乾淨的清水就是最好的。</dd>

  <dt class="col-sm-2">酪梨</dt>
  <dd class="col-sm-10">酪梨肉可以食用，但酪梨籽、皮和葉子卻有毒，因為裡面含有一種稱為 Persin 的毒素，會導致狗狗嘔吐和腹瀉。</dd>

  <dt class="col-sm-2 text-truncate">咖啡因</dt>
  <dd class="col-sm-10">雖然對犬而言咖啡因病沒有毒性，但由於犬對這種效果更為敏感。如果您的愛犬攝取了少量的咖啡因，牠們可能會變得非常興奮或開始發抖。</dd>

  <dt class="col-sm-2">巧克力</dt>
  <dd class="col-sm-10">許多實驗都證實巧克力對犬而言毒性非常高。至是因為巧克力含有可可鹼，而這種興奮劑會中斷犬的代謝過程。
      所以對牠們而言更加危險。如果不慎誤食，視攝取量而定，犬可能會有腸胃不適、心臟病、癲癇，或甚至死亡。</dd>

    <dt class="col-sm-2">油炸和富含脂肪物</dt>
    <dd class="col-sm-10">高脂肪食物會導致您的愛犬胃部不適，有的犬也可能會因此罹患胰臟炎。如果經常食用這種類型的食物，也會導致出現肥胖和相關的健康問題。</dd>

    <dt class="col-sm-2">大蒜和洋蔥</dt>
    <dd class="col-sm-10">無論是煮熟或是生的大蒜和洋蔥，犬食用後會對牠們的紅血球造成損害，從而導致貧血。</dd>

    <dt class="col-sm-2">葡萄和葡萄乾</dt>
    <dd class="col-sm-10">葡萄和葡萄乾會嚴重影響犬的健康，並可能導致急性和突然的腎功能衰竭。</dd>

    <dt class="col-sm-2">堅果</dt>
    <dd class="col-sm-10">堅果的大小可能導致窒息，而且由於富含脂肪，可能導致寵物的腸胃不適。
        特別要注意的，是夏威夷豆已獲證實對犬來說有很大的毒性，雖然不會導致死亡，但會造成犬無法行走、嘔吐、嗜睡和發抖。</dd>

    <dt class="col-sm-2">牛奶、奶油和起司</dt>
    <dd class="col-sm-10">成犬因缺少足夠的消化酶，所以無法消化乳製品，若牠們攝取，會出現乳糖不適症，症狀包括嘔吐、腹瀉和腸胃不適。</dd>
</dl>
</div>

    </div>
    <div class="bg-light py-4">
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
  name: 'About',
  data() {
    return {
    };
  },
};
</script>
