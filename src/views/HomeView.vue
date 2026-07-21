<script setup lang="ts">
import { site } from '@/config/site'
import SectionHeading from '@/components/SectionHeading.vue'
import SocialCard from '@/components/SocialCard.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="avatar" aria-label="Profile avatar">
          <img v-if="site.profile.avatarImage" class="avatar-image" :src="site.profile.avatarImage" alt="" />
          <template v-else>{{ site.profile.avatar }}</template>
        </div>
        <h1 id="hero-title" class="hero-title">{{ site.profile.name.split(' ')[0] }} <span>{{ site.profile.name.split(' ')[1] }}</span></h1>
        <p class="hero-copy">{{ site.profile.bio }}<br />{{ site.profile.description }}</p>
      </div>
    </section>
    <section id="links" class="section">
      <div class="container">
        <SectionHeading eyebrow="LANGSUNG AJA" title="Places of Dreams." />
        <div class="social-grid"><SocialCard v-for="item in site.socialLinks" :key="item.label" :item="item" /></div>
      </div>
    </section>
    <FooterSection v-bind="site.footer" />
  </main>
</template>

<style scoped>
main{min-height:100vh;background:linear-gradient(135deg,rgba(16,19,22,.62),rgba(33,21,47,.75)),url('https://i.imgur.com/tJWmZFf.png') center/cover fixed}
.hero{min-height:0;display:block;padding:96px 0 var(--spacing-2xl);background:transparent}
.avatar{width:144px;height:144px;overflow:hidden}
.avatar-image{width:100%;height:100%;object-fit:cover}
.section{padding-top:var(--spacing-2xl);background:transparent}
:deep(.footer){background:transparent!important}
</style>
