<template>
  <div class="container py-5">
    <div class="row" v-if="carts.length === 0">
      <h5 class="fw-bold mb-5">購物車 Shopping Cart</h5>
      <h1 class="fw-bold text-primary text-center">購物車沒有東西唷！</h1>
      <h5 class="text-center my-5">快到商品頁面看看喜歡的商品吧。</h5>
      <router-link
        to="/products"
        class="btn btn-primary btn-lg d-block w-25 mx-auto"
        >繼續購物</router-link
      >
    </div>
    <div v-else>
      <div class="row">
        <h5 class="fw-bold mb-5">購物車 Shopping Cart</h5>
        <div class="col-md-8">
          <div
            class="row border-top border-bottom py-5"
            v-for="(cart, i) in carts"
            :key="cart.id"
          >
            <div class="col-4">
              <img
                class="img-fluid"
                :src="cart.product.imageUrl"
                :alt="cart.product.title"
              />
            </div>
            <div class="col-4">
              <div class="row h-100 flex-column justify-content-evenly">
                <div class="text-center">{{ cart.product.title }}</div>
                <div class="text-center">{{ cart.product.roast }}</div>
                <div class="text-center">
                  {{ cart.product.unit }} / TWD
                  {{ $filters.currency(cart.product.price) }}
                </div>
                <div class="text-center" v-if="cart.product.category === '咖啡豆'">
                  研磨方式：{{ $filters.grindText(cart.grindType)}}
                </div>
              </div>
            </div>
            <div class="col-3 px-4">
              <div class="row h-100 flex-column justify-content-center">
                <div class="input-group mb-3">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="
                      calcQty(cart.id, cart.product_id, cart.qty, i, 'minus')
                    "
                  >
                    -
                  </button>
                  <input
                    type="v-model.number"
                    class="form-control text-center"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model="cart.qty"
                  />
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="
                      calcQty(cart.id, cart.product_id, cart.qty, i, 'add')
                    "
                  >
                    +
                  </button>
                </div>
                <h6 class="text-end">
                  小計 {{ $filters.currency(cart.product.price * cart.qty) }} 元
                </h6>
              </div>
            </div>
            <div class="col-1 d-flex justify-content-center align-items-center">
              <a href="#" @click.prevent="deleteCart(cart.id)">
                <img
                  src="../assets/icons/bag-x.svg"
                  width="24"
                  alt="delete cart"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 border-top">
          <div class="sticky-top ps-md-4">
            <h5 class="fw-bold mb-md-4 mt-md-5">購物車總計</h5>
            <h6 class="mb-3">小計：TWD {{ $filters.currency(total) }} 元</h6>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                v-model="coupon"
                :disabled="final_total !== total"
                placeholder="輸入優惠券"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                @click="checkCoupon"
                :disabled="final_total !== total"
              >
                套用
              </button>
            </div>
            <p v-if="final_total !== total" class="text-danger">已使用優惠券</p>
            <hr />
            <h5 class="mb-3">
              總計：TWD {{ $filters.currency(final_total) }} 元
            </h5>
            <router-link
              to="/order"
              class="btn btn-primary d-block w-100 btn-lg mb-2"
            >
              確認訂單</router-link
            >
            <router-link
              to="/products"
              class="btn btn-outline-primary d-block w-100"
              >繼續購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      coupon: '',
    };
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`,
        )
        .then((res) => {
          console.log(res.data);
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    calcQty(cartId, productId, qty, index, act) {
      const updateQty = act === 'add' ? qty + 1 : qty - 1;
      this.carts[index].qty = updateQty;
      this.updateCart(cartId, productId, updateQty);
    },
    updateCart(id, productId, qty) {
      const cartData = {
        product_id: productId,
        qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
          {
            data: cartData,
          },
        )
        .then(() => {})
        .catch((err) => {
          console.log(err.message);
        });
    },
    deleteCart(id) {
      this.$swal.fire({
        title: '確定要刪除?',
        showDenyButton: true,
        confirmButtonText: '刪除',
        denyButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show();
          this.$http
            .delete(
              `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
            )
            .then((res) => {
              const { success, message } = res.data;
              if (success) {
                this.$swal(message);
                this.getCart();
              }
            })
            .catch((err) => {
              console.log(err.message);
            })
            .finally(() => {
              loader.hide();
            });
        }
      });
    },
    checkCoupon() {
      const loader = this.$loading.show();
      const couponData = { code: this.coupon };
      this.$http.post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/coupon`, { data: couponData })
        .then((res) => {
          if (res.data.success) {
            this.$swal(res.data.message);
            this.final_total = res.data.data.final_total;
          } else {
            this.$swal(res.data.message);
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
    this.getCart();
  },
};
</script>
