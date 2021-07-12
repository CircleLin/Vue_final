<template>
 <div class="container py-5">
       <div class="row">
            <div class="col-sm-4">
              <div class="mb-5">
                <div class="form-group">
                  <label for="imageUrl">主要圖片網址</label>
                  <input id="imageUrl"
                   type="text"
                   class="form-control"
                   placeholder="請輸入圖片連結"
                   v-model="tempProduct.imageUrl">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              </div>
              <div>上傳多張圖片</div>
              <div v-for="(item,key) in tempProduct.imagesUrl" :key="item" class="mb-2">
                    <label :for="key">圖片網址</label>
                    <div class="row mb-1">
                      <div class="col-md-8">
                        <input :id="key"
                        type="text"
                        v-model="tempProduct.imagesUrl[key]"
                        class="form-control">
                      </div>
                      <div class="col-md-4">
                        <button
                        type="button"
                        class="btn btn-danger"
                        @click="tempProduct.imagesUrl.splice(key,1)">刪除圖片</button>
                      </div>
                    </div>
                    <img :src="item" alt="">
                  </div>
                  <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')">新增圖片</button>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title"><span class="text-danger">*</span>標題</label>
                <input id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model="tempProduct.title">
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category"><span class="text-danger">*</span>分類</label>
                  <input id="category" type="text" class="form-control"
                         placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="form-group col-md-6">
                  <label for="unit"><span class="text-danger">*</span>單位</label>
                  <input id="unit"
                  type="text"
                  class="form-control"
                  placeholder="請輸入單位"
                  v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price"><span class="text-danger">*</span>原價</label>
                  <input id="origin_price"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入原價"
                  v-model.number="tempProduct.origin_price">
                </div>
                <div class="form-group col-md-6">
                  <label for="price"><span class="text-danger">*</span>售價</label>
                  <input id="price" type="number" min="0" class="form-control"
                         placeholder="請輸入售價" v-model.number="tempProduct.price">
                </div>
                <div class="form-group col-md-6">
                  <label for="instock"><span class="text-danger">*</span>庫存</label>
                  <input id="instock" type="number" min="0" class="form-control"
                         placeholder="請輸入庫存" v-model.number="tempProduct.instock">
                </div>
              </div>
              <hr>

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea id="description" type="text" class="form-control"
                          placeholder="請輸入產品描述" v-model="tempProduct.description">
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea id="content" type="text" class="form-control"
                          placeholder="請輸入說明內容" v-model="tempProduct.content">
                </textarea>
              </div>
              <div class="form-group">
              <label for="content">風味描述</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入風味描述" v-model="tempProduct.flavor_desc">
              </textarea>
              <div class="form-group">
              <label for="content">處理法</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入處理法" v-model="tempProduct.proccess">
              </textarea>
              <div class="form-group">
              <label for="content">烘焙度</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入烘焙度" v-model="tempProduct.roast">
              </textarea>
            </div>
            </div>
            </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                         v-model="tempProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
            <div class="text-center my-4">
            <router-link to="/admin/products"
            class="btn btn-outline-primary w-25 me-2">回到商品列表</router-link>
            <button type="button" @click=editProduct
            class="btn btn-primary w-25">修改</button>
            </div>
      </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
        imagesUrl: [],
      },
    };
  },
  methods: {
    editProduct() {
      this.$http
        .put(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.$route.params.id}`, { data: this.tempProduct })
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal('修改成功');
            this.$router.push('/admin/products');
          } else {
            this.$swal.fire('Oops...', `${message}`, 'error');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getProduct() {
      const loader = this.$loading.show();
      this.$http.get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          const { product } = res.data;
          this.tempProduct = JSON.parse(JSON.stringify(product));
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
    this.getProduct();
  },
};
</script>
