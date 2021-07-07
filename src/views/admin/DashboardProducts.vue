<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="this.$router.push('/admin/addproduct')">
        建立新的產品
      </button>
    </div>
    <table class="table table-striped bg-white mt-4 shadow-sm">
      <thead>
        <tr class="text-center bg-dark text-white">
          <th width="120">
            分類
          </th>
          <th width="120">產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id" class="text-center">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="this.$router.push(`/admin/editproduct/${item.id}`)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0
                    .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65
                    -.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5
                     4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5
                     3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1
                     .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821
                      3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0
                      1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="deleteProduct(item.id, item.title)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1
                    0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5
                    v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5
                    a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2
                    2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1
                    1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1
                    1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1
                    1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882
                    4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
     <pages :pagination="pagination" @get-paged-data="getProducts"></pages>
  </div>
</template>

sc
<script>
import pages from '@/components/Pages.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl:
        'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
        imagesUrl: [],
      },
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    pages,
  },
  methods: {
    getProducts(page = 1) {
      const loader = this.$loading.show();
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          const { success, products, pagination } = res.data;
          if (success) {
            this.products = products;
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
    addProduct(product) {
      this.$http
        .post(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/product`, { data: product })
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.getProducts();
            this.productModal.hide();
          } else {
            this.$swal.fire('Oops...', `${message}`, 'error');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    deleteProduct(id, name) {
      this.$swal.fire({
        title: `確定要刪除${name}?`,
        confirmButtonText: '刪除',
        denyButtonText: '不刪除',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$http
            .delete(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`)
            .then((res) => {
              const { success, message } = res.data;
              if (success) {
                this.getProducts();
                this.$swal.fire('已刪除');
              } else {
                this.$swal.fire('Oops...', `${message}`, 'error');
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else if (result.isDenied) {
          this.$swal.fire('Changes are not saved', '', 'info');
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
