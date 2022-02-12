<template>
    <div class="py-1 bg-primary"></div>
  <nav class="navbar navbar-expand-lg navbar-light
  bg-light shadow-sm py-1">

    <div class="container">
      <button
        class="navbar-toggler order-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand logo order-2 order-lg-1 me-0"
      to="/home">Circle's Coffee</router-link>

      <div class="collapse navbar-collapse order-lg-2 justify-content-end order-4"
      id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link px-lg-4  py-3 fw-bold">關於我們</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/products" class="nav-link px-lg-4  py-3 fw-bold">買咖啡</router-link>
          </li>
          <li class="nav-">
          <router-link to="/admin" class="nav-link px-lg-4  py-3 fw-bold">後台管理</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex position-relative px-4 py-2 order-lg-3 order-3">
            <router-link calss="nav-link" to="/cart">
              <img width="32" height="32" src="../assets/icons/cart-check.svg" alt="cart" />
            </router-link>
            <div v-if="cartCount != 0"
              class="fw-bold cartItem position-absolute bg-danger px-2
            rounded-pill text-white"
            >
              {{cartCount}}
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
