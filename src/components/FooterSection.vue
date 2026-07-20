<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>

<template>
  <footer class="footer"><div class="container footer-inner"><span>{{ copyright }}</span></div></footer>
</template>
