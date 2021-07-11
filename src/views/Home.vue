<template>
  <section class="banner">
    <h1 class="text-white text-center">令人印象深刻的咖啡體驗</h1>
    <div class="icon-scroll"></div>
  </section>

<section class="bg-white pb-6">
<div class="container my-5">
    <h3 class="text-center mb-0 title">what we give you</h3>
    <div class="short-hr bg-primary mx-auto my-5"></div>
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

  <div class="container-fluid my-5 px-0">
    <h3 class="text-center mb-0 title">New Release</h3>
    <div class="short-hr bg-primary mx-auto my-5"></div>
    <swiper
    :spaceBetween="30" :centeredSlides="true" :effect="'fade'" :autoplay='{
  "delay": 5000,
  "disableOnInteraction": false
}' :navigation="true" class="mySwiper"
  >
    <swiper-slide>
      <div class="slider-img slider1">
        <div class="slider-intro float-end">
          <h3 class="text-primary fw-bold">沁涼冰濃縮</h3>
          <h5>夏季限定</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slider-img slider2">
        <div class="slider-intro">
          <h3 class="text-primary fw-bold">薄荷莓果冰沙</h3>
          <h5>清新上市</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
       <div class="slider-img slider3">
        <div class="slider-intro">
          <h3 class="text-primary fw-bold">冰可可拿鐵</h3>
          <h5>黑可可風味</h5>
        </div>
      </div>
    </swiper-slide>
    ...
  </swiper>
  </div>

  <div class="container-fluid my-5 px-0">
     <h3 class="text-center mb-0 title">Shop</h3>
    <div class="short-hr bg-primary mx-auto mt-5 mb-5"></div>
    <div class="row">
      <div class="col-md-6 text-center px-6">
         <img class="img-fluid" src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
      </div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
        <ul class="px-0">
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

.slider1{
  background-image: url('../assets/images/new1.jpg');
}

.slider-img{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:80vh;
}

.slider2{
  background-image: url('../assets/images/new2.jpg');
}

.slider3{
  background-image: url('../assets/images/new3.jpg');
}

.slider-intro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 30%;
  background-color: rgb(255, 255, 255, 0.35);
}

@media (max-width:768px) {
  .slider-intro{
    width:50%;
  }
}

</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper/core';

SwiperCore.use([Autoplay, Navigation, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
