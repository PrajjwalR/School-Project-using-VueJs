<template>
  <div class="course">
    <h1>Our Curriculum</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid
      iusto iste deleniti. Doloremque nesciunt iusto optio perspiciatis esse
      quia.
    </p>

    <div class="row">
      <div class="course-col">
        <h3>Pre Primary</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit
          voluptas ducimus esse assumenda quos sed, autem, quasi tempora nulla
          temporibus molestiae corporis architecto dignissimos!
        </p>
      </div>
      <div class="course-col">
        <h3>Primary</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit
          voluptas ducimus esse assumenda quos sed, autem, quasi tempora nulla
          temporibus molestiae corporis architecto dignissimos!
        </p>
      </div>
      <div class="course-col">
        <h3>Junior</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit
          voluptas ducimus esse assumenda quos sed, autem, quasi tempora nulla
          temporibus molestiae corporis architecto dignissimos!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course {
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
h1 {
  font-size: 36px;
  font-weight: 600;
}

p {
  color: #777;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}

.row {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
.course-col {
  flex-basis: 31%;
  background: #fadddd;
  border-radius: 10px;
  margin-bottom: 5%;
  padding: 20px 12px;
  transition: 0.5s;
}
h3 {
  text-align: center;
  font-weight: 600;
  margin: 10px 0;
}
.course-col:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  background: #f5e9e9;
}
@media (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}
</style>
