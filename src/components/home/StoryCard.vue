<template>
  <div class="card card-hover-effect overflow-hidden">
    <img :src="story.image" :alt="story.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-bold text-dark-text mb-3">{{ story.title }}</h3>
      <p class="text-gray-600 mb-4 leading-relaxed">{{ story.summary }}</p>
      <button class="btn-primary w-full">
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        قراءة المزيد
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  story: {
    type: Object,
    required: true
  }
})
</script>

