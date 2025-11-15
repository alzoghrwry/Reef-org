<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">آخر الأخبار</h2>
        <div class="w-24 h-1 bg-primary-green mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard 
          v-for="(news, index) in newsItems" 
          :key="index"
          :news="news"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsCard from './NewsCard.vue'

defineProps({
  newsItems: {
    type: Array,
    required: true
  }
})
</script>

