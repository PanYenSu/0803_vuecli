<template>
    <div></div>
</template>
<script>
export default {
  data() {
    return {
      token: '',
      uuid: process.env.VUE_APP_UUID,
      api: process.env.VUE_APP_APIPATH,
      isLoading: false,
    };
  },
  methods: {
    logout() {
      this.isLoading = true;
      const url = `${this.api}auth/logout`;
      this.$http.post(url, { api_token: this.token }).then(() => {
        this.$router.push('/login');
        document.cookie = 'hexToken=;expires=;';
        console.log('token 已清除');
        this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
    },
  },
};
</script>
