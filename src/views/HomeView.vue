<template>
  <div class="home">
    <HomeCompo msg="Welcome to Your Vue.js App" />
  </div>
  <div class="curriculum">
    <CurriculumCompo></CurriculumCompo>
  </div>
  <div class="campus">
    <GlobalCampus></GlobalCampus>
  </div>
  <div class="facilities">
    <FacilitiesCompo></FacilitiesCompo>
  </div>
  <div class="facilities">
    <TestimonialsCompo></TestimonialsCompo>
  </div>

  <footer class="footer">
    <FooterCompo></FooterCompo>
  </footer>
</template>

<script setup>
// @ is an alias to /src
import HomeCompo from "@/components/Home/HomeCompo.vue";
import CurriculumCompo from "@/components/Home/CurriculumCompo.vue";
import GlobalCampus from "@/components/Home/GlobalCampus.vue";
import FacilitiesCompo from "@/components/Home/FacilitiesCompo.vue";
import TestimonialsCompo from "@/components/Home/TestimonialsCompo.vue";
import FooterCompo from "../components/Footer/FooterCompo.vue";
</script>

<style scoped></style>
