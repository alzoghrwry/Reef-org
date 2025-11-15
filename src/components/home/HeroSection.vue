<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Images -->
    <div class="absolute inset-0 z-0">
      <div class="hero-slider">
        <div v-for="(slide, index) in slides" :key="index" 
             class="absolute inset-0 transition-opacity duration-1000"
             :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover">
          <!-- Overlay with brand color -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-green/70 via-primary-green/60 to-reef-green-600/70"></div>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center text-white">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {{ slides[currentSlide].title }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          {{ slides[currentSlide].description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="goContact" class="btn-primary bg-gradient-to-r from-primary-green to-reef-green-600 hover:from-accent-yellow hover:to-reef-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
            <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            تواصل معنا
          </button>
          <button @click="goAbout" class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
            <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            المزيد عنا
          </button>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button @click="previousSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    <button @click="nextSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
    
    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
      <button v-for="(slide, index) in slides" :key="index"
              @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-all"
              :class="currentSlide === index ? 'bg-white' : 'bg-white/50'">
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

const currentSlide = ref(0)
const router = useRouter()

const goContact = () => router.push({ name: 'contact' })
const goAbout = () => router.push({ name: 'about' })

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? props.slides.length - 1 : currentSlide.value - 1
}

onMounted(() => {
  // Auto-slide functionality
  setInterval(nextSlide, 5000)
})
</script>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

