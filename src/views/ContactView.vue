<template>
  <div class="contact-container">
    <div class="contact-middle-container">
      <ContactHomeCompo></ContactHomeCompo>
      <FooterCompo></FooterCompo>
    </div>
  </div>
</template>

<script setup>
import FooterCompo from "@/components/Footer/FooterCompo.vue";
import ContactHomeCompo from "../components/Contact/ContactHomeCompo.vue";
</script>

<style scoped>
.contact-container {
  background-color: rgb(205, 205, 205);
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-middle-container {
  background-color: rgb(255, 250, 246);
  width: 85rem;
}
</style>
