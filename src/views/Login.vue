<template>
    <div class="container" id='login'>
        <loading :active.sync="isLoading"></loading>
        <form class="form-signin" @submit.prevent="signin">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="form-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input id="inputEmail" v-model="user.email" type="email"
            class="form-control" placeholder="Email address"
              required autofocus>
          </div>
          <div class="form-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input id="inputPassword" v-model="user.password" type="password" class="form-control"
              placeholder="Password" required>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
          <br>
          <p class="mt-5 mb-3 text-muted">
            © 2020~∞ - 六角學院
          </p>
        </form>
      </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signin() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.$http.post(api, this.user)
        .then((response) => {
          this.isLoading = false;
          const { token } = response.data;
          const { expired } = response.data;
          // token
          document.cookie = `hexToken=${token}; expires=${new Date(expired * 1000)}; path=/`;
          // window.location = 'products.html';
          this.$bus.$emit(
            'message:push',
            '登入成功',
            'success',
          );

          this.$router.push('/admin');
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style>
    #login {
        height: 80vh;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  </style>
