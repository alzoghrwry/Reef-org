<template>
  <div
    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
    @click="$emit('open', story)"
  >
    <div class="relative h-64 overflow-hidden">
      <img :src="story.image" :alt="story.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div class="absolute top-4 right-4">
        <span class="bg-white/90 text-primary-green px-4 py-2 rounded-full text-sm font-bold">{{ story.category }}</span>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-3 text-gray-500 text-sm">
        <span>{{ story.date }}</span>
        <span class="font-bold text-primary-green">{{ story.impact }}</span>
      </div>
      <h3 class="text-xl font-bold mb-2 text-dark-text">{{ story.title }}</h3>
      <p class="text-gray-600 mb-4">{{ story.description }}</p>
      <button class="text-primary-green font-bold inline-flex items-center" @click.stop="$emit('open', story)">
        اقرأ المزيد
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  story: { type: Object, required: true }
})
defineEmits(['open'])
</script>


