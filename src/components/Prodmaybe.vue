<template>
  <div>
    <Swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide
        v-for="item in identical"
        :key="item.id"
      >
        <div class="shopping border-0" type="button"
        @click.prevent="getDetail(item.id)">
          <div class="over-hidden">
            <div style="height: 200px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl[0]})` }"
            >
            </div>
          </div>
          <div class="same-content">
            <h5 class="mb-3">
              {{ item.title }}
            </h5>
            <div class="">
              <del class="h6 text-secondary" v-if="item.origin_price !== 0">
                {{ item.origin_price | currency }}
              </del>
              <span class="h5"> {{ item.price | currency }}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      products: [],
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    product: {
      type: Object,
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${this.path}${this.uuid}/ec/products`;
      this.$http.get(url).then((res) => {
        this.products = res.data.data;
      }).catch(() => {
        this.$bus.$emit(
          'message:push',
          '資料讀取失敗',
          'error',
        );
      });
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
      this.$emit('update');
    },
  },
  computed: {
    identical() {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category,
      );
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
