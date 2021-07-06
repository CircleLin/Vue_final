<template>
  <div>
    <div class="container py-5">
      <h5 class="fw-bold mb-5">結帳付款 Pay</h5>
      <!-- product -->

      <h6 class="fw-bold">訂購明細</h6>
      <div class="row justify-content-center bg-secondary py-3 mb-5">
        <div class="col-md-8">
          <table class="table text-center">
            <thead>
              <tr>
                <th>商品</th>
                <th>品名</th>
                <th>數量</th>
                <th>售價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  <div class="img-container mx-auto">
                    <img :src="product.product.imageUrl" :alt="product.product.title" />
                  </div>
                </td>
                <td class="align-middle">{{ product.product.title }}</td>
                <td class="align-middle">{{ product.product.unit }}</td>
                <td class="align-middle">TWD {{ product.product.price }}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end fw-bold">TWD {{ order.total }} 元</div>
        </div>
      </div>

      <h6 class="fw-bold">收件資訊</h6>
      <div class="row justify-content-center bg-secondary py-3">
        <div class="col-md-8">
          <table class="table">
            <tbody>
               <tr>
              <td class="py-3">收件人姓名</td>
              <td class="py-3">{{order.user.name}}</td>
            </tr>
            <tr>
              <td class="py-3">Email</td>
              <td class="py-3">{{order.user.email}}</td>
            </tr>
            <tr>
              <td class="py-3">電話</td>
              <td class="py-3">{{order.user.tel}}</td>
            </tr>
            <tr>
              <td class="py-3">地址</td>
              <td class="py-3">{{order.user.address}}</td>
            </tr>
             <tr>
              <td class="py-3">付款狀態</td>
              <td class="py-3" v-if="order.is_paid">
                <span class="text-success fw-bold">已付款</span>
              </td>
              <td class="py-3" v-else>
                <span class="text-danger fw-bold">尚未付款</span>
              </td>
            </tr>
            </tbody>
          </table>
          <div>
            <button type="button"
            v-if="!order.is_paid"
            class="btn btn-primary btn-lg d-block w-100 mt-4"
            @click="pay"
            >進行付款</button>
            <router-link v-else class="btn btn-primary w-100 d-block btn-lg"
            to="/products">繼續購物</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  height: 100px;
  width: 150px;
}
.img-container > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

<script>
export default {
  data() {
    return {
      order: {},
      products: [],
    };
  },
  methods: {
    getOrder() {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/order/-Mdt4NsMtmoccdKqTfE6`,
        )
        .then((res) => {
          console.log(res.data);
          const { success, order } = res.data;
          if (success) {
            this.order = order;
            this.products = Object.values(order.products);
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    pay() {
      const loader = this.$loading.show();
      this.$http
        .post(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/pay/${this.$route.orderId}`,
        )
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.order.is_paid = true;
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
    this.getOrder();
  },
};
</script>
