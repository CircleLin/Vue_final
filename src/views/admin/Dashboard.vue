<template>
  <div v-if="authenticated">
        <h1 class="text-center">Dashboard</h1>
        <div id="nav" class="text-center">
          <router-link to="/admin/products">產品編輯</router-link> |
          <router-link to="/admin/orders">訂單管理</router-link> |
          <router-link to="/admin/coupon">優惠券管理</router-link> |
          <button type="button" class="btn btn-warning" @click="signOut">登出</button>
        </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
    };
  },
  methods: {
    signOut() {
      const loader = this.$loading.show();
      this.$http.post(`${process.env.VUE_APP_BASEURL}/logout`)
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.authenticated = false;
            this.$swal(message);
            this.$router.push('/home');
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.$http.post(`${process.env.VUE_APP_BASEURL}/api/user/check`)
      .then((res) => {
        if (res.data.success) {
          this.authenticated = true;
        } else {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>
