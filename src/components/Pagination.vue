<template>
       <div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{'disabled': pages.current_page === 1}">
      <a @click.prevent="updatePage(pages.current_page-1)"
      class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for='item in pages.total_pages' :key='item' class="page-item">
        <a class="page-link" href="#">{{item}}</a>
    </li>
    <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
      <a @click.prevent="updatePage(pages.current_page+1)"
      class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    pages: { },
  },
  methods: {
    updatePage(num) {
      this.$emit('update', num);
    },
  },
};
</script>
