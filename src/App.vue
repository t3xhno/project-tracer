<script setup>
import NavBar from "@/components/Navigation/NavBar.vue";
</script>

<template>
  <div class="app-wrapper">
    <nav-bar />
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>
