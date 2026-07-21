<script setup lang="ts">
import type { ModpackEntry } from '@/types/modpack'

defineProps<{ mod: ModpackEntry }>()
</script>

<template>
  <article class="mod-card glass">
    <div class="mod-card-top">
      <img class="mod-icon" :src="mod.icon" :alt="`${mod.name} icon`" loading="lazy" decoding="async" />
      <div>
        <h3 class="card-title">{{ mod.name }}</h3>
        <p class="card-version">{{ mod.version }}</p>
      </div>
    </div>
    <p class="card-description">{{ mod.description }}</p>
    <div class="card-footer">
      <span v-if="mod.source" class="source-badge">{{ mod.source }}</span>
      <a class="secondary-link" :href="mod.url" target="_blank" rel="noopener noreferrer" :aria-label="`Open ${mod.name}`">Download</a>
    </div>
  </article>
</template>

<style scoped>
.mod-card{padding:24px;display:flex;flex-direction:column;gap:16px}
.mod-card-top{display:flex;align-items:center;gap:16px}
.mod-icon{width:56px;height:56px;object-fit:cover;border-radius:14px;border:1px solid rgba(252,231,243,.2);background:rgba(255,255,255,.06)}
.card-title{font-family:var(--font-card-heading-family),sans-serif;font-size:var(--font-card-heading-size);line-height:var(--font-card-heading-line-height);margin:0}
.card-version{margin:6px 0 0;color:var(--color-sakura-pink);font-size:12px;letter-spacing:.14em;text-transform:uppercase}
.card-description{margin:0;color:var(--color-muted-lavender)}
.card-footer{margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.source-badge{padding:8px 12px;border-radius:999px;font-size:12px;text-transform:uppercase;letter-spacing:.16em;background:rgba(255,140,196,.16);color:var(--color-sakura-pink)}
.secondary-link{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:12px 18px;font-family:var(--font-ui-label-bold-family),sans-serif;font-weight:700;transition:transform .2s ease,box-shadow .2s ease;background:transparent;border:1px solid rgba(252,231,243,.24);color:var(--color-warm-white)}
.secondary-link:hover{transform:translateY(-2px)}
@media(max-width:640px){.mod-card{padding:20px}.card-footer{flex-direction:column;align-items:flex-start}}
@media(prefers-reduced-motion:reduce){.secondary-link{transition:none}}
</style>
