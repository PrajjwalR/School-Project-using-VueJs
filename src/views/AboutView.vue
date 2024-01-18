<template>
  <div class="container">
    <div class="middle-container">
      <AboutHomeCompo></AboutHomeCompo>
      <AboutManagementCompo></AboutManagementCompo>
      <AboutBoardCompo></AboutBoardCompo>
      <MembersCompo></MembersCompo>
      <FooterCompo></FooterCompo>
    </div>
  </div>
</template>

<script setup>
import AboutHomeCompo from "@/components/About/AboutHomeCompo.vue";
import AboutManagementCompo from "@/components/About/AboutManagementCompo.vue";
import FooterCompo from "../components/Footer/FooterCompo.vue";
import AboutBoardCompo from "@/components/About/AboutBoardCompo.vue";
import MembersCompo from "@/components/About/MembersCompo.vue";
</script>

<style scoped>
.container {
  background-color: rgb(205, 205, 205);
  display: flex;
  align-items: center;
  justify-content: center;
}
.middle-container {
  background-color: rgb(255, 250, 246);
  width: 85rem;
}
</style>
