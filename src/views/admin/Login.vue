<template>
<div class="container my-5">
 <div class="row justify-content-center">
    <h1 class="h3 mb-3 font-weight-normal text-center">
      登入
    </h1>
    <div class="col-4">
      <form id="form" class="form-signin">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="username"
            v-model="email"
            placeholder="name@example.com"
            required
            autofocus
          />
          <label for="username">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="pw"
            placeholder="Password"
            required
          />
          <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
          登入
        </button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      pw: '',
    };
  },
  methods: {
    login() {
      const loader = this.$loading.show();
      if (this.email === '' || this.pw === '') {
        this.$Swal.fire('請輸入Email、密碼');
        return;
      }

      const user = {
        username: this.email,
        password: this.pw,
      };

      this.$http
        .post(`${process.env.VUE_APP_BASEURL}/admin/signin`, user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `token=${token}; expires=${new Date(expired)}; path=/`;
            this.$router.push('/admin');
          } else {
            this.$Swal.fire(res.data.message);
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
