<template>
  <div class="min-h-screen bg-white">
    <section class="bg-gradient-to-br from-primary-green via-reef-green-600 to-brown-700 text-white py-16">
      <div class="container mx-auto px-4 relative">
        <button @click="goBack" class="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors">
          <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold">{{ story?.title }}</h1>
          <div class="mt-4 text-white/90">
            <span class="bg-white/10 px-3 py-1 rounded-full mr-2">{{ story?.date }}</span>
            <span class="bg-white/10 px-3 py-1 rounded-full">{{ story?.category }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 bg-light-beige">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img v-for="(img, idx) in story?.images || [story?.image]" :key="idx" :src="img" :alt="story?.title" class="w-full h-72 object-cover rounded-xl shadow" />
          </div>
          <div class="prose max-w-none bg-white p-6 rounded-2xl shadow" v-html="story?.fullContent"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSuccessStories } from '@composables/useSuccessStories'

const route = useRoute()
const router = useRouter()
const { getStoryById } = useSuccessStories()
const story = computed(() => getStoryById(route.params.id))

const goBack = () => {
  if (window.history.length > 1) router.back()
  else router.push({ name: 'success-stories' })
}
</script>


