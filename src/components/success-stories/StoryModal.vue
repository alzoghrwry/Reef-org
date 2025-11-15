<template>
  <div
    v-if="story"
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    @click="$emit('close')"
  >
    <div class="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" @click.stop>
      <div class="relative h-72">
        <img :src="story.image" :alt="story.title" class="w-full h-full object-cover">
        <button @click="$emit('close')" class="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="absolute top-4 right-4">
          <span class="bg-white/90 text-primary-green px-4 py-2 rounded-full text-sm font-bold">{{ story.category }}</span>
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-4 text-gray-500 text-sm">
          <span>{{ story.date }}</span>
          <span class="font-bold text-primary-green">{{ story.impact }}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3 text-dark-text">{{ story.title }}</h3>
        <div class="prose max-w-none" v-html="story.fullContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  story: { type: Object, required: false }
})
defineEmits(['close'])
</script>


