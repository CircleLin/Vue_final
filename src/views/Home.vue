<template>
  <section class="banner">
    <h1 class="text-white text-center">令人印象深刻的咖啡體驗</h1>
    <div class="icon-scroll"></div>
  </section>

<section class="bg-white pb-6">
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

  <div class="container my-5 px-5">
    <h3 class="text-center mb-0 title">New Release</h3>
    <div class="short-hr bg-primary mx-auto mt-5 mb-3"></div>
    <div class="row newItem" >
      <div class="col-md-6 py-6 position-relative">
        <img class="img-fluid" src="../assets/images/icecoffee.jpg" alt="coffee bag" />
        <div class="position-absolute newItemTag ps-3 pe-5 py-2">
          <h3>New Arrival</h3>
        </div>
      </div>
      <div class="col-md-6 p-6 d-flex flex-column justify-content-center">
        <h4 class="bg-primary text-white fw-bold ps-3 py-3 mb-6">享受自家沖煮的樂趣</h4>
        <p class="h5 fw-bold lh-lg">迎風吹來的樹木告知夏天的到來，會想喝一杯來自南太平洋的清爽時令咖啡，這個夏天，何不在家享受一下冰咖啡的清淡口感呢？</p>
      </div>
    </div>
  </div>

  <div class="container my-5 px-5">
     <h3 class="text-center mb-0 title">Shop</h3>
    <div class="short-hr bg-primary mx-auto mt-5 mb-5"></div>
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <ul>
          <li>
            <p class="text-center fw-bold">TEL:(02) 1234-5678</p>
          </li>
          <li>
            <p class="text-center fw-bold">台北市光復南路999號</p>
          </li>
          <li>
            <p class="text-center fw-bold">周一到周日 10:00 ~ 20:00</p>
          </li>
          <li>
            <p class="text-center fw-bold">circlecoffee@gmail.com</p>
          </li>
        </ul>

      </div>
      <div class="col-md-6 text-center px-6">
         <img class="img-fluid ps-5" src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner{
  background-image: url('../assets/images/header3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height:100vh;
  position: relative;
}

.banner h1{
  position: absolute;
  top:15%;
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

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 80%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
          animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>
