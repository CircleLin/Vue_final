<template>
 <div class="container">
  <table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length"
            :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                     v-model="item.is_paid"
                     @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                     @click="editOrder(item)" >檢視</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="showDeleteOrder(item)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
 <pages :pagination="pagination" @get-paged-data="getOrders"></pages>
 <ordermodal ref="ordermodal"
 :order="tempOrder"
 @update-paid="updatePaid"></ordermodal>
<delmodal ref="delmodal"
:order="tempOrder"
@delete-order="deleteOrder"></delmodal>
 </div>
</template>

<script>
import pages from '@/components/Pages.vue';
import ordermodal from '@/components/OrderModal.vue';
import delmodal from '@/components/DelOrderModal.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    pages,
    ordermodal,
    delmodal,
  },
  methods: {
    getOrders(page = 1) {
      const loader = this.$loading.show();
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          const { success, orders, pagination } = res.data;
          if (success) {
            this.orders = orders;
            this.pagination = pagination;
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    updatePaid(item) {
      const loader = this.$loading.show();
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`, { data: paid })
        .then((res) => {
          const { message } = res.data;
          this.isLoading = false;
          this.$swal.fire(message);
          this.getOrders();
          this.$refs.ordermodal.hide();
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    editOrder(order) {
      this.tempOrder = { ...order };
      this.$refs.ordermodal.show();
    },
    showDeleteOrder(order) {
      this.tempOrder = { ...order };
      this.$refs.delmodal.showModal();
    },
    deleteOrder(id) {
      const loader = this.$loading.show();
      this.$http.delete(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`)
        .then(() => {
          this.$swal.fire('已刪除訂單');
          this.getOrders();
          this.$refs.delmodal.hideModal();
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
    this.getOrders();
  },
};
</script>
