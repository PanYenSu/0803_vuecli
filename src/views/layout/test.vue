<template>
<div>
<div class="container py-5">
    <div style="width:1200px;height:150px"></div>
<!-- test hover-->
<!-- style="text-align:center; width:300px;height:100px" -->
<!-- <div class="article test1 bd-content-title bg-warm h3" -->
<div data-aos="fade-up">
  <h1 >Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Incidunt, autem.
  </h1>
</div>
<div data-aos="slide-left"

  class="article test1 bd-content-title bg-warm h3 "
 type="tooltip-options" data-toggle="tooltip"
        data-placement="" title=""
          style="color:white;
          height:250px;
          background-size:cover;
          background-position:center;
          backgroundImage:url(https://images.unsplash.com/photo-1570402383251-9f8a173630da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
<p>6666666</p>
<div class="more">
  <a href="#" target="_blank" title="777"  style="color:white;">view more</a>
  </div>
</div>
<div>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Placeat nomnis ut provident<br>
     eaque cumque suscipit autem doloribus.</p><br>
     <p>Lorem ing elit.<br>
     Placeat nisi pariatur blanditiis omnis ut provident
     eaque cumque suscipit autem doloribus.</p><br>
</div>
              <!-- test imgfont -->
              <div data-aos="fade-up-right" data-aos-duration="4000">
                  <img src="https://images.unsplash.com/photo-1545387804-ff58d3817f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                   alt="" class="mr-2"
                   style="width: 1070px; height:170px; object-fit: cover;opacity:0.5;">
                <div class="carousel-item active">
                <div class="row justify-content-center py-7 " style="opacity:1;">
                  <div class="col-md-6 text-center text-light">
                    <h3 class="py-1">狗狗會感冒嗎？</h3>
                    <p class="my-1">“當然會囉！</p>
                    <p><small>—<a href="https://reurl.cc/gm2z5R" class="text-light"
                    target="_blank" style="text-decoration:none;">
                    新手狗爸媽</a>—</small></p>
                  </div>
                </div>
              </div>
            </div>

    </div>
    </div>
</template>
<style scoped>
 .more a{  /* 因為繼續閱讀是個超連結，要用a來定義 */
display: none;  /* 平常設定不要顯示 */
}
.article:hover .more a{
  display: block;  /* 當滑鼠移至該篇文章時，設定以block顯示，可設定超連結以一個區塊顯示 */
  /* 設定長與寬 */
  /* width: 150px;
  height: 150px; */
  /* 設定背景 */
  /* background: url(https://img.icons8.com/pastel-glyph/2x/search--v2.png) center center no-repeat; */
  /* 將繼續閱讀的位置放置於文章左上角，top=0, left=0 */
  /* position: absolute; */
  /* top: 0px; */
  left: 50%;
  font-size: 32px;  /* 設定背景來顯示不要文字出現 則設 0px， */
}
.test1 {
    opacity:0.3;
}
.test1:hover {
    opacity:1;
    /* 放大 */
    /* transform:scale(1.2); */
}
/* body[data-aos-duration='4000'] [data-aos],
  [data-aos][data-aos][data-aos-duration='4000'] {
    transition-duration: 8000ms;
  } */
</style>
