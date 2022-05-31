<script setup>
import { ref } from "vue";

const projectName = process.env.VUE_APP_PROJECT_NAME;
const painAudio = ref(null);
</script>

<template>
  <div class="nav-bar-wrapper">
    <div class="logo pointer">
      <img src="@/assets/images/runner.png" alt="Logo" />
      <div>{{ projectName }}</div>
    </div>

    <div class="links">
      <router-link @click="painAudio.play()" :to="{ name: 'SkillTree' }"
        >Skill Tree</router-link
      >
      <router-link @click="painAudio.play()" :to="{ name: 'Profile' }"
        >Profile</router-link
      >
    </div>
  </div>
  <audio src="pain1.mp3" ref="painAudio" />
</template>

<style lang="scss" src="@/assets/scss/NavBar.scss" scoped />
