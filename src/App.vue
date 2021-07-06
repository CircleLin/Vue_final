<template>
<div class="wrapper">
<div class="py-1 bg-primary"></div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-relative py-0">
    <div class="container">
      <router-link class="navbar-brand logo" to="/">Circle's Coffee</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link px-4 py-3 fw-bold" aria-current="page" href="#">關於我們</a>
          <router-link to="/products" class="nav-link px-4  py-3 fw-bold"
          @mouseenter="active = true"
          >買咖啡</router-link>
          <a class="nav-link px-4  py-3 fw-bold" href="#">門市地點</a>
          <div class="d-flex position-relative px-4 py-2">
            <router-link calss="nav-link" to="/cart">
              <img width="32" height="32" src="../src/assets/icons/cart-check.svg" alt="cart" />
            </router-link>
            <div
              class="fw-bold cartItem position-absolute bg-danger px-2
            rounded-pill text-white"
            >
              {{cartCount}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</div>
  <footer class="bg-light py-4">
      <p class="text-center mb-0">© 2021  |  Circle's Coffee</p>
  </footer>
  <loading></loading>
</template>

<style lang="scss">
@import './assets/all'
</style>

<style>

body{
  font-family: "Microsoft JhengHei", Arial;
  color:#105670;
}

.wrapper{
  min-height: calc(100vh - 24px);
}

.cartItem {
  right: 10px;
  top: 2px;
}
</style>

<script>
export default {
  data() {
    return {
      active: false,
      cartCount: 0,
      cartProducts: [],
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.cartCount = res.data.data.carts.length;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.emitter.on('updateCart', () => {
      this.getCart();
    });
    this.getCart();
  },
};
</script>
