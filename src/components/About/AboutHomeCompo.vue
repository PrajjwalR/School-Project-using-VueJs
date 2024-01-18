<template>
  <div class="wrapper">
    <h1 class="main-heading">Let's tell you more about ourself.</h1>
    <div class="enroll-container">
      <div class="enroll-now">Enroll Now</div>
      <button class="enroll-btn">Click to Enroll</button>
    </div>
    <div class="about-ourself">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste
      corporis soluta id earum voluptas ullam ad exercitationem unde. Explicabo
      pariatur dicta excepturi optio consectetur fuga ut similique aut officiis
      ducimus voluptatibus cumque voluptatem assumenda, veniam laborum
      doloremque sed. Architecto assumenda blanditiis dolor facilis! Est,
      corporis rem. Explicabo sapiente doloribus vitae id impedit aperiam
      adipisci voluptatibus fuga animi, eum numquam atque doloremque veniam
      asperiores dolor soluta exercitationem, libero rem. Beatae perspiciatis
      architecto accusamus, minima officiis in quis numquam pariatur, quae
      repudiandae, soluta asperiores quisquam. Officia veniam, ea labore odit
      molestias magnam aspernatur, facilis corporis aliquid beatae at natus
      optio ipsa, perferendis dolores vel incidunt. Molestias adipisci at
      dolorum, nemo ab vitae accusamus nostrum itaque aperiam alias laudantium
      quasi magni quam. Eligendi obcaecati dolor magnam nam, ab libero molestiae
      tenetur quis dicta tempora optio error ipsa asperiores aspernatur,
      exercitationem ducimus reiciendis odio id! Est quibusdam corrupti harum
      officia, inventore quis a nulla dignissimos. Repellat aliquam
      reprehenderit voluptate est harum eligendi odio magnam? Molestias
      perferendis nobis cupiditate iusto architecto. Velit quisquam enim ullam
      perspiciatis atque voluptate impedit facilis dolorum quasi, dolor
      laudantium expedita quidem doloremque beatae aspernatur, alias asperiores
      amet, aut sunt cumque? Impedit, suscipit. Itaque odit tempore a expedita?
      Magni pariatur quis unde quia accusamus vel impedit, veritatis itaque
      molestiae tempora aut commodi! Odit nobis dolorum repellendus voluptatem
      dolorem. Fugiat fuga consequatur cum eius, vel quis, aliquam totam nam
      quasi iusto quidem, odio ad perferendis voluptatem deserunt molestiae
      quibusdam porro reprehenderit cumque mollitia ut possimus rerum? Non qui
      placeat odio explicabo.
    </div>
    <div class="img-container">
      <img class="school-img" src="../../assets/Home/school-img.webp" alt="" />
      <div class="experience-text">
        20+ Years of <br />
        <b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Excellence</b>
        <br />
        in Education
      </div>
    </div>
    <div class="vision-mission-value">
      <div class="vision common-vmv-class">
        <i class="fa-solid fa-arrows-to-eye"></i>
        <h1>Vision</h1>
        <p>
          To be the educational institution of choice for all stakeholders,
          promoting human well-being through continuous learning.
        </p>
      </div>
      <div class="mission common-vmv-class">
        <i class="fa-solid fa-bullseye"></i>
        <h1>Mission</h1>
        <p>
          To provide learner-centric education that focuses on developing
          learners as competent, ethical and socially conscious management
          professionals through continuous improvement in the quality of
          teaching-learning process and research.
        </p>
      </div>
      <div class="core-value common-vmv-class">
        <i class="fa-solid fa-shield-heart"></i>
        <h1>Core Values</h1>
        <p>
          Quality Conscious | Participative Decision Making | Respect for
          Diversity and Personal Choice | Concern for Society & Ethics
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  flex-direction: column;
}
.main-heading {
  font-size: 60px;
  font-family: "Times New Roman", Times, serif;
  font-style: oblique;
  background-color: #fadddd;
  padding: 20px 50px;
  border-radius: 10px;
}

.enroll-container {
  position: fixed;
  right: 10%;
  top: 80%;
  padding: 20px 30px;
  color: white;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  z-index: 2;
}
.enroll-now {
  padding: 13px 20px;
  background-color: rgb(90, 10, 10);
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
}
.enroll-btn {
  padding: 10px 20px;
  background-color: #f99a9a;
  border-radius: 10px;
  margin-top: 10px;
  border: none;
  border-bottom: 2px solid rgb(80, 15, 15);
  color: rgb(90, 10, 10);
  font-size: 20px;
}
.enroll-btn:hover {
  background-color: #ffa4a4;
  border-bottom: 2px solid rgb(169, 14, 14);
  cursor: pointer;
}
.about-ourself {
  /* flex-basis: 31%; */
  background: #fadddd;
  border-radius: 10px;
  margin-top: 2%;
  padding: 50px 100px;
  transition: 0.5s;
  width: 80rem;
  font-size: 28px;
  font-family: "Times New Roman", Times, serif;
  font-style: oblique;
}
.about-ourself:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  background: #f5e9e9;
}
.img-container {
  margin-top: 50px;
  background-color: #f99a9a;
  height: 35rem;
  width: 75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
}
.school-img {
  height: 30rem;
  width: 70rem;
  border-radius: 5px;
}
.experience-text {
  position: absolute;
  top: 340px;
  left: 250px;
  font-size: 45px;
  color: #ffffff;
  font-weight: 700;
  font-style: italic;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-bottom: 5px double #fe7e7e;
  text-shadow: 5px 5px 3px black;
  border-radius: 5px;
}
.experience-text:hover {
  text-shadow: 5px 5px 3px rgb(58, 58, 58);
}

/* Vision Mission and Core Value */

.vision-mission-value {
  margin-top: 50px;
  display: flex;
  margin-bottom: 50px;
  padding: 20px;
  background-color: #f99a9a;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.common-vmv-class {
  height: 350px;
  width: 390px;
  border: 1px solid black;
  border-bottom-right-radius: 40px;
  background-color: rgb(255, 250, 246);
}

/* Vision */
.vision {
  margin-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.vision .fa-arrows-to-eye {
  font-size: 65px;
  color: #ffbb00;
  margin-top: 35px;
}
.vision h1 {
  margin-top: 25px;
  font-size: 35px;
  color: #383838;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.vision p {
  margin-top: 20px;
  width: 250px;
  color: #383838;
  text-align: center;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}

/* Mission */
.mission {
  margin-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.mission .fa-bullseye {
  font-size: 65px;
  color: #e00000;
  margin-top: 35px;
}
.mission h1 {
  margin-top: 25px;
  font-size: 35px;
  color: #383838;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.mission p {
  margin-top: 20px;
  width: 350px;
  color: #383838;
  text-align: center;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}
/* Core Value */
.core-value {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.core-value .fa-shield-heart {
  font-size: 65px;
  color: #f81d5b;
  margin-top: 35px;
}
.core-value h1 {
  margin-top: 25px;
  font-size: 35px;
  color: #383838;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.core-value p {
  margin-top: 20px;
  width: 350px;
  color: #383838;
  text-align: center;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
