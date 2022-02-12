<template>
  <div class="card ">
    <div class="card-body p-0 text-center">
      <a @click.prevent="goProduct(product.id)" class="p-img mb-3">
        <img :src="product.imageUrl" :alt="product.title" />
        <div class="p-detail"></div>
        <div class="out-of-stock text-white bg-danger fw-bold"
         v-if="product.instock == 1">僅剩1組</div>
      </a>
      <h5 class="fw-bold mb-3">
        <a @click.prevent="goProduct(product.id)" class="text-primary">
          {{ product.title }}
        </a>
      </h5>
      <h6 class="mb-3">{{ product.roast || "" }}</h6>
      <h6 class="text-danger fw-bold mb-3">TWD {{ $filters.currency(product.price) }}</h6>
      <a href="#" class="d-block py-3 text-center bg-primary text-white addCart"
      v-if="product.instock > 0"
      @click.prevent="addCart(product.id)">加入購物車</a>
      <button type="button"
      class="btn btn-primary rounded-0 w-100 d-block py-3 text-center disabled fw-bold"
      v-else>售完補貨中</button>
    </div>
  </div>
</template>

<style scoped>
.p-img {
  height: 200px;
  width: 100%;
  position: relative;
}

.p-img > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.p-img:hover .p-detail {
  opacity: 1;
}

.p-detail {
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.2s;
  opacity: 0;
}

.p-detail::after {
  content: "查看更多";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

.out-of-stock{
  position: absolute;
  top:0;
  left:0;
  padding: 5px;
}

a {
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.addCart:hover{
  font-weight: bold;
}
</style>

<script>
export default {
  props: ['product'],
  data() {
    return {};
  },
  methods: {
    addCart(productId) {
      const loader = this.$loading.show();
      const cartData = {
        product_id: productId,
        qty: 1,
        grindType: this.product.category === '咖啡豆' ? 0 : '',
      };
      this.$http
        .post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`, {
          data: cartData,
        })
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.$swal('已加入購物車');
            this.emitter.emit('updateCart');
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    goProduct(id) {
      this.$router.push(`/products/${id}`);
      this.$emit('get-product');
    },
  },
  mounted() {},
};
</script>
