<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <table class="table" v-if="carts.length > 0">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in carts" :key="cart.id">
            <td><button type="button" class="btn btn-outline-danger"
            @click="deleteCart(cart.id)">移除購物車</button></td>
            <td>{{cart.product.title}}</td>
            <td>{{cart.product.price}}</td>
            <td>{{cart.qty}}</td>
          </tr>
        </tbody>
      </table>
      <template v-else>
        <h1 class="text-center">購物車無商品</h1>
      </template>
        <section class="my-5">
          <order v-on:refresh-cart="getCart"></order>
        </section>
    </div>
  </div>
</div>
</template>

<script>
import order from './Order.vue';

export default {
  data() {
    return {
      carts: [],
    };
  },
  components: {
    order,
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    deleteCart(id) {
      this.$http.delete(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal(message);
            this.getCart();
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
