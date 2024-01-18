<template>
  <div class="wrapper">
    <div class="home-img"></div>

    <div class="main-text">
      <h1 class="main-heading">
        THAKUR PHOOL SINGH SERVIND SINGH PUBLIC SCHOOL
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit
        eos illo officiis amet sint tempora accusantium, hic qui voluptas
        aperiam sequi totam optio. Omnis eius asperiores praesentium amet
        ducimus facere dolor quibusdam veritatis fugit!
      </p>
      <router-link to="/location" class="hero-btn"
        >Visit us to know more</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #f1e8da;
}
.home-img {
  background-image: linear-gradient(
      rgba(16, 22, 49, 0.7),
      rgba(10, 17, 42, 0.7)
    ),
    url(../../assets/Home/school-img.webp);
  background-size: cover;
  min-width: 100vw;
  width: 100%;
  background-position: center;
  height: 100vh;
}

.main-text {
  color: white;
  font-style: italic;
  font-size: 25px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -50%);
  padding: 10px;
}
.main-heading {
  border-bottom: 8px double rgb(155, 11, 11);
  border-radius: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: 40px;
  transition: 0.3s ease-in-out;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-shadow: 3px 2px 3px rgb(93, 93, 93);
}
.main-heading:hover {
  border-bottom: 8px double #f73325;
}
.main-text p {
  margin: 10px o 40px;
  font-size: 20px;
  color: rgb(200, 200, 200);
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
</style>
