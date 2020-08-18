<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <h2>~ 後台管理頁面 ~</h2>
    </div>
</template>
<script>
export default {
  data() {
    return {
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
