<template>
  <div class="container py-5">
    <div class="row">
      <h5 class="fw-bold">確認訂單 Check Out</h5>
      <router-link to="/cart" class="h6 mb-5 text-primary" style="text-decoration:none;">
      <img src="../assets/icons/arrow-left-short.svg" width="20" alt=""> 回到購物車</router-link>
      <div class="col-md-5 bg-secondary px-4 py-3">
        <div class="row mb-1 justify-content-between">
          <div class="col-2">
            <h6 class="fw-bold">商品</h6>
          </div>
          <div class="col-2 text-end">
            <h6 class="fw-bold">小計</h6>
          </div>
        </div>
        <div class="row border-top border-bottom" v-for="cart in carts" :key="cart.id">
          <div class="col-6">
            <div class="row py-3 h-100 d-flex flex-column justify-content-between">
              <div class="img-container mb-2">
                <img :src="cart.product.imageUrl" :alt="cart.product.title">
              </div>
              <div class="mb-2">{{cart.product.title}}</div>
              <div class="mb-2">{{cart.product.roast}}</div>
              <div>{{cart.product.unit }} / TWD {{ $filters.currency(cart.product.price)}}</div>
            </div>
          </div>
          <div class="col-6 py-3">
            <div class="row h-100 d-flex flex-column justify-content-between">
              <div class="text-end">數量：{{cart.qty}}</div>
              <div class="text-end">
                TWD {{ $filters.currency(cart.qty * cart.product.price)}} 元
              </div>
            </div>
          </div>
        </div>
        <h5 class="text-end mt-3">小計：{{$filters.currency(total)}} 元</h5>
        <h6 class="text-danger text-end" v-if="final_total !== total">已使用優惠券</h6>
        <h5 class="text-end">總計：{{$filters.currency(final_total)}} 元</h5>
      </div>
      <div class="col-md-7 px-4 py-3">
        <!-- 結帳表單 -->
        <h6 class="fw-bold">填寫收件人資訊</h6>
        <Form v-slot="{ errors }" @submit="onSubmit" ref="form">
          <label for="name" class="form-label mt-3"><span class="text-danger">* </span>姓名</label>
    <Field
      id="name"
      name="姓名"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors['姓名'] }"
      placeholder="請輸入姓名"
      rules="required"
      v-model="user.name"
    ></Field>
    <error-message name="姓名" class="invalid-feedback"></error-message>
    <label for="email" class="form-label mt-3"><span class="text-danger">* </span>Email</label>
    <Field
      id="email"
      name="信箱"
      type="email"
      class="form-control"
      :class="{ 'is-invalid': errors['信箱'] }"
      placeholder="請輸入 Email"
      rules="email|required"
      v-model="user.email"
    ></Field>
    <error-message name="信箱" class="invalid-feedback"></error-message>

    <label for="tel" class="form-label mt-3"><span class="text-danger">* </span>收件人電話</label>
    <Field
      id="tel"
      name="電話"
      type="tel"
      class="form-control"
      :class="{ 'is-invalid': errors['電話'] }"
      placeholder="請輸入電話"
      :rules="isPhone"
      v-model="user.tel"
    ></Field>
    <error-message name="電話" class="invalid-feedback"></error-message>

    <label for="addr" class="form-label mt-3"><span class="text-danger">* </span>收件人地址</label>
    <Field
      id="addr"
      name="地址"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors['地址'] }"
      placeholder="請輸入地址"
      rules="required"
      v-model="user.addr"
    ></Field>
    <error-message name="地址" class="invalid-feedback"></error-message>

    <label for="msg" class="form-label mt-3">訂單備註 (選填)</label>
    <Field
      id="msg"
      name="備註"
      :placeholder="'字數不可超過' + msgLengthLimit + '字元'"
      cols="10"
      rows="3"
      class="form-control"
      :class="{ 'is-invalid': errors['備註'] }"
      :rules="msgTooLong"
      v-model="msg"
      as="textarea"
    ></Field>
    <error-message name="備註" class="invalid-feedback"></error-message>
    <Field name="agree" type="checkbox" :rules="checkAgree" v-model="user.agree">
      <label class="form-check-label mt-3">
        <input type="checkbox" name="agree" class="form-check-input" v-model="user.agree" />
        <span class="text-danger">  * </span>我已閱讀並同意網站的 條款與條件
      </label>
    </Field>
    <error-message name="agree" class="invalid-feedback"></error-message>
    <button class="btn btn-primary btn-lg mt-3 d-block w-100"
    type="submit">送出訂單</button>
  </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .img-container {
    height:100px;
    width:150px;
  }
  .img-container > img{
    width:100%;
    height:100%;
    object-fit: contain;
  }
</style>

<script>
export default {
  data() {
    return {
      carts: [],
      final_total: 0,
      total: 0,
      user: {
        email: '',
        name: '',
        tel: '',
        addr: '',
        agree: false,
      },
      msg: '',
      msgLengthLimit: 250,
    };
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
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
    isPhone(value) {
      if (value !== undefined) {
        return value !== '' && value.length >= 8 && value.length <= 10
          ? true
          : '電話為必填，且長度需介於8~10碼';
      }
      return true;
    },
    msgTooLong(value) {
      if (value !== undefined) {
        return value.length < this.msgLengthLimit
          ? true
          : `留言字數不可超過${this.msgLengthLimit}個字元`;
      }
      return true;
    },
    checkAgree(value) {
      return !value ? '請閱讀並同意網站購物條款' : true;
    },
    onSubmit() {
      const loader = this.$loading.show();
      const userData = {
        data: {
          user: {
            name: this.user.name,
            email: this.user.email,
            tel: this.user.tel,
            address: this.user.addr,
          },
          message: this.msg,
        },
      };

      this.$http
        .post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/order`, userData)
        .then((res) => {
          const { success, orderId } = res.data;
          if (success) {
            this.$refs.form.resetForm();
            this.emitter.emit('updateCart');
            this.$router.push({ path: `/pay/${orderId}` });
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
