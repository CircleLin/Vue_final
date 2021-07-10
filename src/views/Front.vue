<template>
<div class="wrapper">
<Nav></Nav>
  <router-view></router-view>
</div>
<Footer></Footer>
<a class="gotop" v-show="scY > 500" @click.prevent="goTop">
  <svg xmlns="http://www.w3.org/2000/svg" width="48"
  fill="currentColor" class="bi bi-arrow-up-circle-fill text-primary" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354
  7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>
</a>
</template>

<style>
.wrapper{
  min-height: calc(100vh - 24px);
}

.gotop{
  cursor: pointer;
  display:block;
  position:fixed;
  bottom:20px;
  right:20px;
  padding:10px;
}

</style>

<script>
import Footer from '../components/Homefooter.vue';
import Nav from '../components/Nav.vue';

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      showGoTop: false,
    };
  },
  components: {
    Footer,
    Nav,
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    });
  },
};
</script>
