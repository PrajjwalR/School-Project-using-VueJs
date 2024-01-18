<template>
  <section class="testimonials">
    <h1>What Our Students Says</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est
      iure similique facilis optio quis!
    </p>

    <div class="row">
      <div class="testimonials-col">
        <img src="../../assets/Students/leodicap.jpg" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a
            accusantium quis eos consectetur provident, reprehenderit nisi
            laudantium voluptate sed quia maiores. Odio, corrupti totam.
          </p>
          <h3>Leo Di Caprio</h3>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
      </div>
      <div class="testimonials-col">
        <img src="../../assets/Students/alpachino.jpg" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a
            accusantium quis eos consectetur provident, reprehenderit nisi
            laudantium voluptate sed quia maiores. Odio, corrupti totam.
          </p>
          <h3>Al Pachino</h3>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
      </div>
      <div class="testimonials-col">
        <img src="../../assets/Students/robert.jpg" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a
            accusantium quis eos consectetur provident, reprehenderit nisi
            laudantium voluptate sed quia maiores. Odio, corrupti totam.
          </p>
          <h3>Robert Di Nairo</h3>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  width: 80%;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}

p {
  color: #777;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}

.testimonials-col {
  flex-basis: 33%;
  border-radius: 10px;
  margin-bottom: 5%;
  text-align: left;
  background: #fff3f3;
  padding: 25px;
  cursor: pointer;
  display: flex;
}
.testimonials-col img {
  height: 40px;
  margin-left: 5px;
  margin-right: 30px;
  border-radius: 10%;
}
.testimonials-col p {
  padding: 0;
}
.testimonials-col h3 {
  margin-top: 15px;
  text-align: left;
}

.testimonials-col .fa {
  color: #f44336;
}
.row {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 700px) {
  .testimonials-col img {
    margin-left: 0px;
    margin-right: 15px;
  }
}
</style>
