<template>
<div class="wrapper">
<div class="py-1 bg-primary"></div>
<Nav></Nav>
  <router-view></router-view>
</div>
<Footer></Footer>
</template>

<style>
.wrapper{
  min-height: calc(100vh - 24px);
}
</style>

<script>
import Footer from '../components/Homefooter.vue';
import Nav from '../components/Nav.vue';

export default {
  components: {
    Footer,
    Nav,
  },
};
</script>
