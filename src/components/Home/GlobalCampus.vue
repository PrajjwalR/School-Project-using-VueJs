<template>
  <div class="campus">
    <h1>Our Campuses</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi.
    </p>

    <div class="row">
      <div class="campus-col">
        <img src="../../assets/Home/campus-1.webp" />
        <router-link to="/niyamatpur">
          <div class="layer">
            <h3>NIYAMATPUR</h3>
          </div>
        </router-link>
      </div>
      <div class="campus-col">
        <router-link to="/anwan">
          <img src="../../assets/Home/campus-3.jpg"
        /></router-link>
        <div class="layer">
          <h3>ANWAN</h3>
        </div>
      </div>
      <div class="campus-col">
        <img src="../../assets/Home/campus-2.jpg" />
        <router-link to="/upcoming">
          <div class="layer">
            <h3>COMING SOON...</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.campus {
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 50px;
}

p {
  color: #777;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}
.campus-col {
  flex-basis: 32%;
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}
.campus-col img {
  width: 100%;
  height: 300px;
  display: block;
}
.layer {
  background: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s;
}
.layer:hover {
  background: rgba(226, 0, 0, 0.7);
}

.layer h3 {
  width: 100%;
  font-weight: 500;
  color: white;
  font-size: 26px;
  bottom: 0;
  transform: translate(-50%);
  left: 50%;
  position: absolute;
  opacity: 0;
  transition: 1s;
}
.layer:hover h3 {
  bottom: 40%;
  opacity: 1;
}
.row {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
</style>
