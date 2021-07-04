<template>
  <div class="container">

    <div class="row my-4">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products">買咖啡</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-6 large-p-img p-3">
        <img :src="product.imageUrl" :alt="product.title" />
      </div>
      <div class="col-md-6 p-3">
        <h1 class="fw-bold mb-4">{{ product.title }}</h1>
        <hr />
        <h5 class="mb-5 text-danger fw-bold">{{ product.unit }} / TWD {{ product.price }}</h5>
        <h4 class="fw-bold">風味描述：</h4>
        <p class="h5 mb-5">{{ product.flavor_desc }}</p>
        <h4 class="fw-bold">烘焙度：</h4>
        <p class="h5 mb-5">{{ product.roast }}</p>
        <h4 class="fw-bold">研磨方式</h4>
        <select class="form-select mb-5" v-model="selectedGrind">
          <option :value="option.value" v-for="option in grindOption" :key="option.value"
        >{{option.text}}</option>
        </select>
        <div class="row">
          <div class="col-6">
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="qty == 0 ? 0 : (qty -= 1)"
              >
                -
              </button>
              <input
                type="v-model.number"
                class="form-control text-center"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model="qty"
              />
              <button class="btn btn-outline-secondary" type="button" @click="qty += 1">
                +
              </button>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-100 d-block" @click="addCart">加入購物車</button>
          </div>
        </div>
        <hr />
        <div class="float-end fw-bold h3">TWD {{ totalPrice }} 元</div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-between">
      <div class="col-4">
        <h3 class="fw-bold">風味相近的還有..</h3>
      </div>
      <div class="col-3 text-end">
        <button class="btn btn-outline-primary me-1">prev</button>
        <button class="btn btn-primary">next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.large-p-img img {
  width: 100%;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {
      selectedGrind: 0,
      grindOption: [
        { text: '不研磨 Whole Bean', value: 0 },
        { text: '手沖 Pour Over', value: 1 },
        { text: '虹吸式 Syphon', value: 2 },
        { text: '義式 espresso', value: 3 },
      ],
      product: {},
      qty: 0,
    };
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`,
        )
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    addCart() {
      if (this.qty > 0) {
        const loader = this.$loading.show();
        const cartData = {
          product_id: this.product.id,
          qty: this.qty,
          grindType: this.product.category === '咖啡豆' ? this.selectedGrind : '',
        };
        this.$http
          .post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`, {
            data: cartData,
          })
          .then((res) => {
            const { success } = res.data;
            if (success) {
              this.emitter.emit('updateCart');
              this.$swal('已加入購物車');
            }
          })
          .catch((err) => {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: '出了點問題..',
            });
            console.log(err.message);
          })
          .finally(() => {
            loader.hide();
          });
      } else {
        this.$swal('請選擇數量');
      }
    },
  },
  computed: {
    totalPrice() {
      return this.product.price * this.qty;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
