<template>
  <section class="banner">
    <h1 class="fw-bold text-white display-1">想來杯咖啡嗎?</h1>
  </section>

<section class="bg-white py-6">
<div class="container my-5">
    <h3 class="text-center mb-0 title">what we give you</h3>
    <div class="short-hr bg-primary mx-auto mt-5 mb-6"></div>
    <div class="row">
      <div class="col-md-3">
        <div class="card p-3">
          <div class="card-body">
            <div class="row">
              <div class="col-6 position-relative px-2">
                <img
                  class="img-fluid position-absolute card-icon"
                  width="64"
                  src="../assets/icons/roaster.svg"
                  alt="roaster icon"
                />
              </div>
              <div class="col-6 d-flex flex-column border-start">
                <ul class="justify-content-center mb-0 ps-3 pe-0">
                  <li class="h5 fw-bold">新鮮烘焙</li>
                  <li>Fresh Roast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3">
          <div class="card-body">
            <div class="row">
              <div class="col-6 position-relative px-2">
                <img
                  class="img-fluid position-absolute card-icon"
                  width="64"
                  src="../assets/icons/coffee-bean.svg"
                  alt="beans icon"
                />
              </div>
              <div class="col-6 d-flex flex-column border-start">
                <ul class="justify-content-center mb-0 ps-3 pe-0">
                  <li class="h5 fw-bold">精品咖啡</li>
                  <li>Specialty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3">
          <div class="card-body">
            <div class="row">
              <div class="col-6 position-relative px-2">
                <img
                  class="img-fluid position-absolute card-icon"
                  width="64"
                  src="../assets/icons/coffee-pot.svg"
                  alt="pot icon"
                />
              </div>
              <div class="col-6 d-flex flex-column border-start">
                <ul class="justify-content-center mb-0 ps-3 pe-0">
                  <li class="h5 fw-bold">專業手沖</li>
                  <li>Drip over</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3">
          <div class="card-body">
            <div class="row">
              <div class="col-6 position-relative px-2">
                <img
                  class="img-fluid position-absolute card-icon"
                  width="64"
                  src="../assets/icons/latte.svg"
                  alt="latte icon"
                />
              </div>
              <div class="col-6 d-flex flex-column border-start">
                <ul class="justify-content-center mb-0 ps-3 pe-0">
                  <li class="h5 fw-bold">義式咖啡</li>
                  <li>espresso</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <div class="container my-7">
    <div class="row newItem" >
      <h1 class="fw-bold ps-5">新品上市</h1>
      <div class="col-md-6 py-6 px-5 position-relative">
        <img class="img-fluid" src="../assets/images/icecoffee.jpg" alt="coffee bag" />
        <div class="position-absolute newItemTag ps-3 pe-5 py-2">
          <h3>New Arrival</h3>
        </div>
      </div>
      <div class="col-md-6 p-6">
        <h2 class="bg-primary text-white fw-bold ps-3 py-3 mb-6">享受自家沖煮的樂趣</h2>
        <p class="h3 lh-lg">迎風吹來的樹木告知夏天的到來，會想喝一杯來自南太平洋的清爽時令咖啡，這個夏天，何不在家享受一下冰咖啡的清淡口感呢？</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<style scoped>

.banner{
  background-image: url('../assets/images/header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height:100vh;
  position: relative;
}

.banner h1{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}

.newItemTag{
  top:40px;
  left:30px;
  background-color: #FDE18D;
  transform:rotate(-6deg);
}

.newItemTag h3{
  right:35px;
  bottom:35px;
  font-family: "Caveat", cursive;
}

.title {
  font-family: "Caveat", cursive;
  font-weight: 600;
  font-size: 3rem;
}

li {
  list-style: none;
}

.logo {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.card-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.short-hr {
  width: 10vh;
  height: 2px;
}
</style>
