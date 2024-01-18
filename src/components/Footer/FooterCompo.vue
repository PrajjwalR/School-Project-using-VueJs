<template>
  <div class="wrapper">
    <!--Call to action -->
    <section class="cta">
      <h1>Enroll Soon, Limted Seats Available</h1>
      <a href="" class="hero-btn">Contact Us</a>
    </section>
    <!-- footer-->
    <section class="footer">
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure
        nihilesse natus similique <br />
        maxime minus nostrum accusamus totam repellat?
      </p>
      <div class="icons">
        <i class="fa fa-brands fa-facebook"></i>
        <i class="fa fa-brands fa-twitter"></i>
        <i class="fa fa-brands fa-instagram"></i>
        <i class="fa fa-brands fa-linkedin"></i>
      </div>
      <p>Made With <i class="fa-regular fa-heart"></i> By Prajjwal Chauhan</p>
    </section>
  </div>
</template>

<style scoped>
/* call to action  */
.cta {
  margin: 100px auto;
  width: 80%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../../assets/Home/call.webp);
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  text-align: center;
  padding: 100px 0;
}
.cta h1 {
  color: white;
  margin-bottom: 40px;
  padding: 0;
}

.hero-btn {
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 12px 34px;
  font-size: 20px;
  margin-top: 30px;
  border: 1px solid white;
  background: transparent;
  position: relative;
  cursor: pointer;
}
.hero-btn:hover {
  border: 1px solid #f44336;
  background: #f73325;
  transition: 1s;
}

@media (max-width: 700px) {
  .cta h1 {
    font-size: 24px;
  }
}

/* //////footer///////////// */

.footer {
  width: 100%;
  text-align: center;
  padding: 30px 0;
}

.footer h4 {
  margin-bottom: 25px;
  margin-top: 20px;
  font-weight: 600;
}

.icons .fa {
  color: #f44336;
  margin: 0 13px;
  cursor: pointer;
  padding: 18px 0;
}
.fa-heart {
  color: red;
}

p {
  color: #777;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}
</style>
