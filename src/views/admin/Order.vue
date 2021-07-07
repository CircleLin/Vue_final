<template>
<div v-if="!readyOrder">
<Form v-slot="{ errors }" @submit="onSubmit" ref="form">
    <label for="email" class="form-label">Email</label>
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

    <label for="name" class="form-label">收件人姓名</label>
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

    <label for="tel" class="form-label">收件人電話</label>
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

    <label for="addr" class="form-label">收件人地址</label>
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

    <label for="msg" class="form-label">留言</label>
    <Field
      id="msg"
      name="留言"
      :placeholder="'字數不可超過' + msgLengthLimit + '字元'"
      cols="30"
      rows="10"
      class="form-control"
      :class="{ 'is-invalid': errors['留言'] }"
      :rules="msgTooLong"
      v-model="msg"
      as="textarea"
    ></Field>
    <error-message name="留言" class="invalid-feedback"></error-message>

    <button class="btn btn-primary mt-2" type="submit">送出</button>
  </Form>
</div>
<div v-else>
  <h1>確定結帳?</h1>
  <h2>訂單編號: {{order_id}}</h2>
  <button class="btn btn-outline-primary" @click="buy">買下去 !</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
        tel: '',
        addr: '',
      },
      msg: '',
      msgLengthLimit: 250,
      order_id: '',
      readyOrder: false,
    };
  },
  methods: {
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
    async onSubmit() {
      const loader = this.$loading.show();
      const result = await this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => res.data.data.carts.length > 0)
        .catch((err) => {
          console.log(err.message);
        });

      if (result) {
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
            const { success, message } = res.data;
            if (success) {
              this.$swal(message);
              this.clearInput();
              this.$refs.form.resetForm();
              this.order_id = res.data.orderId;
              this.readyOrder = true;
              this.$emit('refresh-cart');
            }
          })
          .catch((err) => {
            console.log(err.message);
          })
          .finally(() => {
            loader.hide();
          });
      } else {
        this.$swal('請在購物車加入商品');
        loader.hide();
      }
    },
    clearInput() {
      this.user.email = '';
      this.user.name = '';
      this.user.tel = '';
      this.user.addr = '';
      this.msg = '';
    },
    buy() {
      const loader = this.$loading.show();
      this.$http
        .post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/pay/${this.order_id}`)
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.readyOrder = false;
            this.$swal(message);
            this.$router.push('/products');
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
};
</script>
