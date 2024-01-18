<template>
  <div class="background-wrapper">
    <div class="background-img"></div>
    <div class="address-text">Our Address</div>
    <a
      href="https://www.google.com/maps/place/Thakur+Phool+Singh+Serbind+Singh+Public+School/@26.209593,79.5589684,17z/data=!4m6!3m5!1s0x399d854b55b4cd45:0x2b19dd8041de7e42!8m2!3d26.2093537!4d79.5600765!16s%2Fg%2F11hbpwrw9n?entry=ttu"
      class="locate-us"
    >
      <button class="btn">Locate us on GOOGLE MAP</button>
    </a>
    <div class="address">TFSSS Public School, Niyamatpur, Kalpi (Jalaun)</div>
  </div>
</template>

<style scoped>
.background-wrapper {
  background-color: rgb(255, 250, 246);
  height: 100vh;
}
.background-img {
  background-image: linear-gradient(
      rgba(16, 22, 49, 0.7),
      rgba(10, 17, 42, 0.7)
    ),
    url(../assets/Location/school-location.png);
  background-size: cover;
  min-width: 100vw;
  width: 100%;
  background-position: center;
  height: 100vh;
}

.address-text {
  color: rgb(235, 98, 98);
  position: absolute;
  left: 50%;
  top: 130px;
  transform: translate(-50%, -50%);
  border-bottom: 2px solid gray;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-shadow: 3px 2px 3px rgb(93, 93, 93);
  font-size: 60px;
}
.locate-us {
  position: absolute;
  top: 200px;
  font-size: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  width: 200px;
  height: 30px;
  background-color: rgb(255, 128, 128);
  border-radius: 10px;
  border: none;
}
.address {
  position: absolute;
  top: 300px;
  transform: translate(-50%, -50%);
  left: 50%;
  background: linear-gradient(rgba(16, 22, 49, 0.7), rgba(10, 17, 42, 0.7));
  width: 500px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: wheat;
}
</style>
