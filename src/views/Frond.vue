<template>
  <div class="py-1 bg-primary"></div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <a class="navbar-brand logo" href="#">Circle's Coffee</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active px-4" aria-current="page" href="#">關於我們</a>
          <a class="nav-link px-4" href="#">買咖啡</a>
          <a class="nav-link px-4" href="#">門市地點</a>
          <div class="d-flex position-relative px-4">
            <a calss="nav-link" href="#">
              <img width="32" height="32" src="../assets/icons/cart-check.svg" alt="cart" />
            </a>
            <div
              class="fw-bold cartItem position-absolute bg-danger px-1
            rounded-pill text-white"
            >
              12
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="container-fluid p-0">
      <img class="img-fluid" src="../assets/images/header.jpg"  alt="" />
  </div>

  <div class="container my-5">
    <h3 class="text-center mb-0 title">what we give you</h3>
    <div class="short-hr bg-primary mx-auto mt-5 mb-6"></div>
    <div class="row">
      <div class="col-md-3">
        <div class="card border-0 p-3">
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
        <div class="card border-0 p-3">
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
                  <li>Coffee bean</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card border-0 p-3">
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
         <div class="card border-0 p-3">
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
</template>

<style scoped>
.title{
  font-family: 'Caveat', cursive;
  font-weight: 600;
  font-size: 3rem;
}

li{
  list-style: none;
}

.logo {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.cartItem {
  right: 8px;
  top: -6px;
}

.card-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.short-hr{
  width:10vh;
  height:2px;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
