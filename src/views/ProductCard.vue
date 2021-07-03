<template>
  <div class="card ">
    <div class="card-body p-0 text-center">
      <router-link :to="`/products/${product.id}`" class="p-img mb-3">
        <img :src="product.imageUrl" :alt="product.title">
        <div class="p-detail"></div>
      </router-link>

      <h5 class="fw-bold mb-3">
        <router-link :to="`/products/${product.id}`"
         class="text-primary">{{product.title || ''}}</router-link>
      </h5>
      <h6 class="mb-3">{{product.roast || ''}}</h6>
      <h6 class="text-danger fw-bold mb-3">TWD {{product.price}}</h6>
      <a href="#" class="d-block py-3 text-center bg-primary text-white fw-bold">加入購物車</a>
    </div>
  </div>
</template>

<style scoped>
.p-img {
  height: 200px;
  width: 100%;
  position: relative;
}

.p-img > img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.p-img:hover .p-detail{
  opacity:1
}

.p-detail{
background:rgb(0,0,0,.5);
top:0;
left:0;
width: 100%;
height: 100%;
position: absolute;
transition:all .2s;
opacity:0;
}

.p-detail::after{
  content: '查看更多';
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  color:white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

a {
  text-decoration: none;
  display: block;
}
</style>

<script>
export default {
  props: ['product'],
  data() {
    return {};
  },
  methods: {

  },
  mounted() {
  },
};
</script>
