<template>
  <div v-if="authenticated">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">管理後台</a>
    <button class="navbar-toggler"
    type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">回到前台</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">產品編輯</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupon">優惠券管理</router-link>
        </li>
         <li class="nav-item">
          <button type="button" class="btn btn-outline-primary btn-sm"
          @click="signOut">登出</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
