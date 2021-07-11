<template>
  <div class="container">
    <div class="text-end mt-4">
    <button
      type="button"
      class="btn btn-primary"
      @click="openCouponModal(true)"
    >
      建立新的優惠券
    </button>
  </div>
    <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelCouponModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <CouponModal
    :coupon="tempCoupon"
    :is-new="isNew"
    ref="couponModal"
    @update-coupon="updateCoupon"
  />
 <DelCouponModal :coupon="tempCoupon" ref="delModal" @delete-coupon="delCoupon" />
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelCouponModal from '@/components/DelCouponModal.vue';

export default {
  data() {
    return {
      coupons: [],
      isNew: false,
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
    };
  },
  components: {
    CouponModal,
    DelCouponModal,
  },
  methods: {
    getCoupons() {
      const loader = this.$loading.show();
      this.$http.get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupons`, this.tempProduct)
        .then((response) => {
          this.coupons = response.data.coupons;
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    updateCoupon(tempCoupon) {
      const loader = this.$loading.show();
      if (this.isNew) {
        const url = `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon })
          .then((res) => {
            if (res.data.success) {
              this.$swal.fire(res.data.message);
              this.getCoupons();
              this.$refs.couponModal.hideModal();
            }
          })
          .catch((err) => {
            console.log(err.message);
          })
          .finally(() => {
            loader.hide();
          });
      } else {
        const url = `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon })
          .then((res) => {
            if (res.data.success) {
              this.$swal.fire(res.data.message);
              this.getCoupons();
              this.$refs.couponModal.hideModal();
            }
          })
          .catch((err) => {
            console.log(err.message);
          })
          .finally(() => {
            loader.hide();
          });
      }
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      console.log(this.tempCoupon);
      this.$refs.delModal.showModal();
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      const loader = this.$loading.show();
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.$swal.fire(res.data.message);
            this.$refs.delModal.hideModal();
            this.getCoupons();
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
    this.getCoupons();
  },
};
</script>
