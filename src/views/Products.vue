<template>
  <div class="container py-5">
    <div class="row mb-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/home">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">買咖啡</li>
        </ol>
      </nav>
    </div>

          <ul class="d-flex justify-content-center category ps-0 ">
            <li>
              <a href="#" class="category-item"
              :class="[activeCategory === '' ? 'active' : '']"
              @click.prevent="activeCategory = ''"
              >全部商品</a>
            </li>
            <li v-for="category in categories" :key="category">
              <a href="#" class="category-item"
              :class="[ activeCategory ===  category ? 'active' : '']"
              @click.prevent="activeCategory = category"
              >{{category}}</a>
            </li>
          </ul>

    <div class="row mb-3 justify-content-between">
      <div class="col-3">
        <p class="pb-0">共 {{filterProducts.length}} 樣商品</p>
      </div>
       <div class="col-3">
            <select name="filter" id="filter" class="form-select text-muted" v-model="sortBy">
              <option value="0">Sort by</option>
              <option value="1">價格：高 -> 低</option>
              <option value="2">價格：低 -> 高</option>
            </select>
        </div>
    </div>

    <!-- product-list -->
    <div class="row">
      <div class="col-md-3 mb-4" v-for="product in filterProducts" :key="product.id">
        <card :product="product"></card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  list-style-type: none;
}

a {
  display: block;
  text-decoration: none;
}

.category-item{
  font-size:1.1rem;
  padding:5px 20px;
  margin:10px;
  position: relative;
  font-weight: bold;
  color:#105670;
}

.category-item::before{
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  transform:scaleY(1.5);
  border-top: 1px solid #105670;
  border-bottom: 1px solid #105670;
  transition:all .5s;
  opacity:0;
}

.category-item:hover::before{
  transform: scaleY(1.2);
  opacity:1;
}

.category-item.active{
 background:#105670;
 color:white;
}

.menu a:hover {
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
      categories: [],
      activeCategory: '',
      sortBy: 0,
    };
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show();
      this.$http
        .get(`${process.env.VUE_APP_BASEURL}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          const { products } = res.data;
          this.products = products;
          this.getCategory();
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    getCategory() {
      this.products.forEach((_item) => {
        if (!this.categories.includes(_item.category)) {
          this.categories.push(_item.category);
        }
      });
    },
  },
  watch: {
    sortBy() {
      if (this.sortBy === '1') {
        this.filterProducts = this.filterProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === '2') {
        this.filterProducts = this.filterProducts.sort((a, b) => a.price - b.price);
      }
    },
  },
  computed: {
    filterProducts() {
      return this.products.filter(
        (item) => item.category.match(this.activeCategory),
      );
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
