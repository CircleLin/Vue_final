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
                <td class="align-middle">{{ product.qty }}</td>
                <td class="align-middle">TWD {{ $currency(product.product.price) }}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end fw-bold">TWD {{ $currency(order.total) }} 元</div>
        </div>
      </div>

      <!-- 收件資訊 -->
      <h6 class="fw-bold">收件資訊</h6>
      <div class="row justify-content-center bg-secondary py-3">
        <div class="col-md-8">
          <table class="table">
            <tbody>
               <tr>
              <td class="py-3">收件人姓名</td>
              <td class="py-3" v-if="order.user">{{order.user.name}}</td>
            </tr>
            <tr>
              <td class="py-3">Email</td>
              <td class="py-3" v-if="order.user">{{order.user.email}}</td>
            </tr>
            <tr>
              <td class="py-3">電話</td>
              <td class="py-3" v-if="order.user">{{order.user.tel}}</td>
            </tr>
            <tr>
              <td class="py-3">地址</td>
              <td class="py-3" v-if="order.user">{{order.user.address}}</td>
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
            class="btn btn-primary btn-lg d-block w-100 mt-4"
            @click="pay"
            >進行付款</button>
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
      orderId: '',
      order: {},
      products: [],
    };
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.order_Id;
      this.$http
        .get(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`,
        )
        .then((res) => {
          const { success, order } = res.data;
          if (success) {
            this.order = order;
            this.products = Object.values(order.products);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    pay() {
      const loader = this.$loading.show();
      this.$http
        .post(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`,
        )
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.$router.push('/complete');
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
  mounted() {
    this.getOrder();
  },
};
</script>
