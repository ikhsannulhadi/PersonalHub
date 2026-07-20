<script setup lang="ts">
import type { LinkItem } from '@/types/site'

defineProps<{ item: LinkItem }>()
</script>

<template>
  <a class="glass social-card" :href="item.href" target="_blank" rel="noreferrer" :aria-label="`Open ${item.label}`">
    <span class="symbol" aria-hidden="true">
      <img v-if="item.iconImage" class="link-icon" :src="item.iconImage" alt="" />
      <template v-else>{{ item.icon }}</template>
    </span>
    <strong class="card-title">{{ item.label }}</strong>
    <span class="arrow" aria-hidden="true">↗</span>
  </a>
</template>

<style scoped>
.link-icon{width:48px;height:48px;object-fit:contain;display:block}
</style>
