<template>
  <div class="container p-5">
    <h3 class="fw-bold mb-4">Concept</h3>
    <hr class="mb-4">
    <div class="row mb-7">
      <div class="col-md-6  d-flex flex-column justify-content-center">

    <h5 class="text-muted mb-4 fw-bold">“感受甜蜜，回味美好！” 用專業的技藝，帶出咖啡豆的美味。</h5>
    <p>咖啡豆種類繁多，即使您只看原產地和採收後的加工方法。
即使用同樣的豆子，不同的烘焙方法，味道也會有很大的不同，所以
咖啡風味的變化真的是無限的。</p>

<p>我們提供的咖啡豆，帶有咖啡特有的“甜味”，讓您不由自主地微笑，
乾淨且獨特的風味，即使冷了也很美味。</p>
      </div>
      <div class="col-md-6">
        <img :src="bean_img" alt="">
      </div>
    </div>

    <h3 class="fw-bold mb-4">Members</h3>
    <hr class="mb-4">
    <div class="row mb-5">
      <!-- staff 1 -->
      <div class="col-md-6 text-center">
        <img :src="staff1_img" alt="staff1 image" />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="fw-bold mb-3 text-primary">Kamie Borton</h2>
        <h5 class="mb-3 text-muted">Circle's Coffee 共同創辦人</h5>
        <p>一個因緣際會，愛上咖啡的程式設計師，有著不遺餘力，推廣精品咖啡的瘋狂使命感</p>
        <p>喜歡研究咖啡豆生長的奧秘，因此在北歐大大小小的咖啡莊園，都可以看到Kamie的身影</p>
        <p>在店裡主要擔任尋豆師的角色，為同樣喜歡咖啡的朋友，尋找世界上優質的咖啡豆，
          也因此不太有機會在店裡遇見Kamiie，如果你在店裡遇到她，可說是非常幸運的事喔！</p>
      </div>
    </div>
    <div class="row flex-md-row flex-column flex-column-reverse">
      <!-- staff 2 -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="fw-bold mb-3">Lusa May Allen</h2>
        <h5 class="mb-3 text-muted">Circle's Coffee 共同創辦人</h5>
        <p>一個好好的建築師不做，偏偏要跑來開咖啡店的奇女子</p>
        <p>喜愛與咖啡相關的一切，店內的咖啡熟豆都是由Lusa烘焙的呢</p>
        <p>除了咖啡技能之外，聽說還會做網站，而且前端三寶都相當熟練，你現在看到的這個網站
          ，好像就是Lusa做的唷！</p>
      </div>
       <div class="col-md-6 text-center">
        <img :src="staff2_img" alt="staff2 image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: "Caveat", cursive;
}
img {
  width:100%;
  height:auto;
}
</style>

<script>
export default {
  data() {
    return {
      staff1_img:
        'https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      staff2_img:
        'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bean_img: 'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZSUyMGJlYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    };
  },
};
</script>
