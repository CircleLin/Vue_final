<template>
  <div id="productModal" ref="productModal"
  class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>修改產品</span>
          </h5>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-5">
                <div class="form-group">
                  <label for="imageUrl">主要圖片網址</label>
                  <input id="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="product.imageUrl">
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
                        v-model="product.imagesUrl[key]"
                        class="form-control">
                      </div>
                      <div class="col-md-4">
                        <button type="button" class="btn btn-danger"
                        @click="product.imagesUrl.splice(key, 1)">刪除圖片</button>
                      </div>
                    </div>
                    <img :src="item" alt="">
                  </div>
                  <button type="button"
                   class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="product.imagesUrl.push('')">新增圖片</button>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title"><span class="text-danger">*</span>標題</label>
                <input id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model="product.title">
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category"><span class="text-danger">*</span>分類</label>
                  <input id="category" type="text" class="form-control"
                         placeholder="請輸入分類" v-model="product.category">
                </div>
                <div class="form-group col-md-6">
                  <label for="unit"><span class="text-danger">*</span>單位</label>
                  <input id="unit"
                  type="text"
                  class="form-control"
                  placeholder="請輸入單位"
                  v-model="product.unit">
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
                  v-model.number="product.origin_price">
                </div>
                <div class="form-group col-md-6">
                  <label for="price"><span class="text-danger">*</span>售價</label>
                  <input id="price" type="number" min="0" class="form-control"
                         placeholder="請輸入售價" v-model.number="product.price">
                </div>
              </div>
              <hr>

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea id="description" type="text" class="form-control"
                          placeholder="請輸入產品描述" v-model="product.description">
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea id="content" type="text" class="form-control"
                          placeholder="請輸入說明內容" v-model="product.content">
                </textarea>
              </div>
              <div class="form-group">
              <label for="content">風味描述</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入風味描述" v-model="product.flavor_desc">
              </textarea>
              <div class="form-group">
              <label for="content">處理法</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入處理法" v-model="product.proccess">
              </textarea>
              <div class="form-group">
              <label for="content">烘焙度</label>
              <textarea id="content" type="text" class="form-control"
                        placeholder="請輸入烘焙度" v-model="product.roast">
              </textarea>
            </div>
            </div>
            </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                         v-model="product.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button v-if="isNew"
           type="button"
           class="btn btn-primary"
           @click="sendAddData">新增</button>

          <button v-else type="button" class="btn btn-primary" @click="sendEditData">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempProduct', 'isNew'],
  data() {
    return {
      product: this.tempProduct,
    };
  },
  methods: {
    sendEditData() {
      this.$emit('edit-data', this.tempProduct);
    },
    sendAddData() {
      this.$emit('add-data', this.tempProduct);
    },
  },
};

</script>
