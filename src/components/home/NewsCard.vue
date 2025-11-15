<template>
  <div class="card card-hover-effect overflow-hidden">
    <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        {{ news.date }}
      </div>
      <h3 class="text-xl font-bold text-dark-text mb-3">{{ news.title }}</h3>
      <p class="text-gray-600 mb-4 leading-relaxed">{{ news.summary }}</p>
      <button class="text-primary-green font-semibold hover:text-primary-green transition-colors">
        اقرأ المزيد
        <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>

