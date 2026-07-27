<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ModpackCard from '@/components/ModpackCard.vue'
import type { ModpackData } from '@/types/modpack'

const data = ref<ModpackData | null>(null)

onMounted(async () => {
  const response = await fetch('/mods.json')
  data.value = await response.json()
})

const sharedFiles = computed(() => data.value?.berkas ?? [])
</script>

<template>
  <main class="modpack-page" id="top">
    <section class="section" aria-labelledby="mod-list-title">
      <div class="container">
        <SectionHeading eyebrow="BERKAS" title="Sharing Link Penting" />
        <div v-if="data && sharedFiles.length" class="mods-grid">
          <ModpackCard v-for="mod in sharedFiles" :key="mod.id" :mod="mod" />
        </div>
        <div v-else-if="data" class="empty-state glass">
          <p>No files have been shared yet.</p>
        </div>
        <div v-else class="empty-state glass">
          <p>Loading shared files…</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.modpack-page{min-height:100vh;background:linear-gradient(135deg,rgba(16,19,22,.7),rgba(33,21,47,.86)),url('https://i.imgur.com/tJWmZFf.png') center/cover scroll}
.mods-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.empty-state{padding:24px;text-align:center;color:var(--color-muted-lavender)}
@media(max-width:860px){.mods-grid{grid-template-columns:1fr}}
</style>
