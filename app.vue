<script setup>
import IconsManager from './components/general/IconsManager.vue'
</script>

<template>
  <div>
    <header class="header">
      <NuxtLink to="/" class="header__link">Home</NuxtLink>
      <NuxtLink to="/gallery" class="header__link">Gallery</NuxtLink>
    </header>
  </div>
  <NuxtPage />
  <IconsManager />
</template>
