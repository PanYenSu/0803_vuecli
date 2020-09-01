<template>
    <div>
        <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
           id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h5 class="mb-0">
                    狗狗用品
                  </h5>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li v-for="item in categories" :key="item">
                      <a href="#" class="py-2 d-block text-muted"
                      @click.prevent="showCategory(item)"
                    :class="{ active: item === filterCategory }">{{item}}</a></li>
                    <!-- <li><a href="#" class="py-2 d-block text-muted">蓋毯/睡墊</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">衣/帽</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">玩具/外出用品</a></li> -->
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h5 class="mb-0">
                    貓咪用品
                  </h5>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">衣/帽</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">玩具</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0
              border-top border-left-0 border-right-0"
              id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h5 class="mb-0">
                    項圈/牽繩
                  </h5>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
              data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      categories: ['項圈', '犬潮服', '睡墊', '護目鏡'],
      filterCategory: '',
      uuid: process.env.VUE_APP_UUID,
      path: process.env.VUE_APP_APIPATH,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    showCategory(item) {
      // this.$router.push(`/products);
      this.filterCategory = item;
      this.$emit('update', item);
    },
    getProducts() {
      const url = `${this.path}${this.uuid}/ec/products?page=1&paged=100`;
      this.$http.get(url).then((res) => {
        this.products = res.data.data;
        const { categoryName } = this.$route.params;
        if (categoryName) {
          this.filterCategory = categoryName;
        }
      }).catch(() => {
        this.$bus.$emit(
          'message:push',
          '資料讀取失敗',
          'error',
        );
      });
    },
    // selecCategory(isNew, item) {
    //   switch (isNew) {
    //     case '項圈/牽繩':
    //       return this.products.filter(
    //         () => ((item.category === '項圈')
    //         || (item.category === '胸背帶')),
    //       );
    //     case '衣/帽':
    //       return this.products.filter(
    //         () => ((item.category === '犬潮服')
    //         || (item.category === '領巾')),
    //       );
    //     case '蓋毯/睡墊':
    //       return this.products.filter(
    //         () => ((item.category === '睡墊')),
    //       );
    //     case '玩具/外出用品':
    //       return this.products.filter(
    //         () => ((item.category === '旅行袋')
    //         || (item.category === '玩具')
    //         || (item.category === '護目鏡')),
    //       );
    //     default:
    //       break;
    //   }
    // },
  },
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .includes(this.filterCategory);
          return data;
        });
      }
      return this.products;
    },
  },
};
</script>
