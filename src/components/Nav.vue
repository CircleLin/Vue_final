<template>
  <div class="py-1 bg-primary"></div>
  <nav class="navbar navbar-expand-lg navbar-light
  bg-light shadow-sm py-0">

    <div class="container">
      <router-link class="navbar-brand logo" to="/home">Circle's Coffee</router-link>
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
          <router-link to="/about" class="nav-link px-4  py-3 fw-bold">關於我們</router-link>
          <router-link to="/products" class="nav-link px-4  py-3 fw-bold">買咖啡</router-link>
          <router-link to="/admin" class="nav-link px-4  py-3 fw-bold">後台管理</router-link>
          <div class="d-flex position-relative px-4 py-2">
            <router-link calss="nav-link" to="/cart">
              <img width="32" height="32" src="../assets/icons/cart-check.svg" alt="cart" />
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
</template>

<style scoped>
.cartItem {
  right: 10px;
  top: 2px;
}
</style>

<script>
export default {
  data() {
    return {
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
