<template>
  <div class="card card-hover-effect p-0 overflow-hidden">
    <div class="relative">
      <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 rounded-full text-sm font-semibold text-white"
              :class="project.status === 'مكتمل' ? 'bg-primary-green' : 'bg-accent-yellow'">
          {{ project.status }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-dark-text mb-3">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
      
      <!-- Progress Circle -->
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-600">نسبة الإنجاز</span>
        <div class="flex items-center space-x-2">
          <div class="w-16 h-16 relative">
            <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" stroke="#e5e7eb" stroke-width="6" fill="none"/>
              <circle cx="50" cy="50" r="30" stroke="#5d3f1a" stroke-width="6" fill="none" 
                      :stroke-dasharray="188.4" :stroke-dashoffset="188.4 - (188.4 * project.progress / 100)" 
                      class="transition-all duration-1000"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-bold text-brown-700">{{ project.progress }}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <button class="btn-primary w-full">
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
        معرفة المزيد
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

