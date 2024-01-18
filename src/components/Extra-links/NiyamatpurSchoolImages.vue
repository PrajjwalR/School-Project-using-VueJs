<template>
  <div class="container">
    <div class="school-images-wrapper">
      <div>
        <img
          class="img-1"
          src="../../assets/School-images/img-1.jpeg"
          alt=""
        /><img
          class="img-1"
          src="../../assets/School-images/img-2.jpeg"
          alt=""
        />
      </div>
      <div></div>
      <div>
        <img class="img-1" src="../../assets/School-images/img-3.jpeg" alt="" />
        <img class="img-1" src="../../assets/School-images/img-4.jpeg" alt="" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: antiquewhite;
}

.school-images-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-1 {
  margin-top: 70px;
  /* width: 500px; */
  height: 500px;
  padding: 20px;
}
</style>
