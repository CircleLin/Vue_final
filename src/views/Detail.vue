<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 large-p-img p-3">
        <img
          src="https://images.unsplash.com/photo-1496374200594-218d93021c8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvZmZlZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="product img"
        />
      </div>
      <div class="col-md-6 p-3">
        <h1 class="fw-bold mb-4">耶家雪菲 果丁丁</h1>
        <hr>
        <h4 class="fw-bold">風味描述：</h4>
        <p class="h5 mb-5">柑橘味、黑巧克力</p>
        <h4 class="fw-bold">烘焙度：</h4>
        <p class="h5 mb-5">中烘焙 Full city</p>
        <h4 class="fw-bold">研磨方式</h4>
        <select name="" id="" class="form-select mb-5">
          <option value="">不研磨</option>
          <option value="">手沖</option>
          <option value="">義式</option>
          <option value="">冰滴</option>
        </select>
        <div class="row">
          <div class="col-6">
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                -
              </button>
              <input
                type="number"
                class="form-control text-center"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value=0
              />
              <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                +
              </button>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-100 d-block">加入購物車</button>
          </div>
        </div>
        <hr>
        <div class="float-end fw-bold h3">TWD 380 元</div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-between">
      <div class="col-4">
        <h3 class="fw-bold">風味相近的還有..</h3>
      </div>
      <div class="col-3 text-end">
        <button class="btn btn-outline-primary me-1">prev</button>
        <button class="btn btn-primary">next</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.large-p-img img{
  width:100%;
  height:auto;
}
</style>
