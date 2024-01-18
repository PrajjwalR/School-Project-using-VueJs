<template>
  <div class="facilities">
    <h1>Our Facilities</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur officia
      corporis libero nemo rerum enim
    </p>

    <div class="row">
      <div class="facilities-col">
        <img src="../../assets/Home/campus-4.webp" />
        <h3>Best Library</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          nisi.
        </p>
      </div>
      <div class="facilities-col">
        <img src="../../assets/Home/playground.jpg" />
        <h3>Huge Playground</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          nisi.
        </p>
      </div>
      <div class="facilities-col">
        <img src="../../assets/Home/campus-5.jpg" />
        <h3>Best Furniture</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          nisi.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.facilities {
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
p {
  color: #777;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}
.facilities-col {
  flex-basis: 30%;
  border-radius: 10px;
  margin-bottom: 5%;
  text-align: center;
}

.facilities-col img {
  height: 200px;
  width: 100%;
  border-radius: 10px;
}

.facilities-col p {
  padding: 0;
}

.facilities-col h3 {
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: left;
}
.row {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
</style>
