<template>
  <div class="members-container">
    <h1>Members</h1>
    <div class="chairman-wrapper">
      <div>
        <span class="chairman">
          <img class="img" src="../../assets/AboutImages/pachino1.jpg" alt="" />
          <div>
            <h1>Pachino</h1>
            <h4>
              <b>- Chairman</b><br />
              Lorem ipsum dolor sit amet, ng elit. Quidem facilis itaque
            </h4>
          </div>
        </span>
        <span class="chairman">
          <img class="img" src="../../assets/AboutImages/niro1.jpg" alt="" />
          <div>
            <h1>Niro</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Quidem facilis itaque
            </h4>
          </div>
        </span>
        <span class="chairman">
          <img
            class="img"
            src="../../assets/AboutImages/washington1.jpg"
            alt=""
          />
          <div>
            <h1>Washing</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Lorem ipsum dolor sit amet, conidem facilis itaque
            </h4>
          </div>
        </span>
      </div>
      <div>
        <span class="chairman">
          <img class="img" src="../../assets/AboutImages/pachino2.jpg" alt="" />
          <div>
            <h1>Al Pachino</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Lorem ipsum dolor sit amet,
            </h4>
          </div>
        </span>
        <span class="chairman">
          <img class="img" src="../../assets/AboutImages/niro2.jpg" alt="" />
          <div>
            <h1>Di-niro</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Lorem ipsum dolor sit amet, consec. Quidem facilis itaque
            </h4>
          </div>
        </span>
        <span class="chairman">
          <img
            class="img"
            src="../../assets/AboutImages/washington2.jpg"
            alt=""
          />
          <div>
            <h1>Danzel</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Lorem ipsum dolor sitpisicing elit. Quidem facilis itaque
            </h4>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.members-container {
  display: flex;
  align-items: center;
  flex-flow: column;
  margin-top: 50px;
  margin-bottom: 50px;
}
.members-container h1 {
  padding: 20px;
}

.chairman-wrapper {
  display: flex;
}
.chairman {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 300px;
}
img {
  height: 200px;
  width: 150px;
}

.chairman div {
  background-color: #fef1f1;
  height: 200px;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  border-right: 1px solid black;
  width: 150px;
}
.chairman div h1 {
  font-family: serif;
}
.chairman div b {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.chairman div h4 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: small;
}
</style>
