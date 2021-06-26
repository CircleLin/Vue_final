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
</template>

<style scoped>
.logo {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.cartItem{
  right: 8px;
  top:-6px;
}
</style>
