<template>
  <div class="board-container">
    <div class="governors-div">
      <h1>Board of Governors</h1>
      <div class="chairman-wrapper">
        <span class="chairman">
          <img
            class="di-niro-img"
            src="../../assets/AboutImages/di-niro.jpg"
            alt=""
          />
          <div>
            <h1>Robert Di-Niro</h1>
            <h4>
              <b>- Chairman</b><br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              facilis itaque sunt ducimus ad odit vitae ex voluptatem fuga
              cupiditate.
            </h4>
          </div>
        </span>
        <span class="chairman">
          <img
            class="al-pachino-img"
            src="../../assets/AboutImages/vice-chairman.webp"
            alt=""
          />
          <div>
            <h1>Al Pachino</h1>
            <h4>
              <b>- Vice Chairman</b>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              facilis itaque sunt ducimus ad odit vitae ex voluptatem fuga
              cupiditate.
            </h4>
          </div>
        </span>
      </div>
    </div>
    <div class="members-div"></div>
  </div>
</template>

<style scoped>
.governors-div {
  display: flex;
  align-items: center;
  flex-flow: column;
}

.chairman-wrapper {
  display: flex;
}
.chairman {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 10px;
  /* border: 1px solid black; */
}
.di-niro-img {
  height: 330px;
  width: 250px;
}
.al-pachino-img {
  height: 330px;
  width: 250px;
}
.chairman div {
  background-color: #fef1f1;
  height: 330px;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  border-right: 2px solid black;
}
.chairman div h1 {
  margin-top: 80px;
  font-family: serif;
}
.chairman div b {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.chairman div h4 {
  margin-top: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
