<template>
  <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
    <button 
      class="relative flex items-center space-x-1.5 space-x-reverse text-brown-700 hover:text-gold-600 font-medium transition-all duration-300 px-2 py-2 group"
      :class="{ 
        'text-gold-600': isActive
      }"
    >
      <component :is="route.icon" class="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0" />
      <span class="relative z-10 transition-all duration-300 group-hover:font-bold whitespace-nowrap text-sm">المركز الإعلامي</span>
      <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': dropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
      
      <!-- Animated underline effect -->
      <span 
        class="absolute bottom-0 right-0 left-0 h-1 bg-gold-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-full"
      ></span>
      
      <!-- Active state - full underline -->
      <span 
        v-if="isActive"
        class="absolute bottom-0 right-0 left-0 h-1 bg-gold-500 scale-x-100 rounded-full"
      ></span>
    </button>
    
    <!-- Dropdown Menu -->
    <div v-if="dropdownOpen" class="absolute top-full mt-2 bg-white rounded-lg shadow-2xl py-2 min-w-[200px] z-50 border border-gray-200">
      <router-link 
        to="/media-gallery"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <span>المعرض</span>
      </router-link>
      
      <router-link 
        to="/resources"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200 border-t border-brown-100"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>التقارير والإصدارات</span>
      </router-link>
      
      <router-link 
        to="/success-stories"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200 border-t border-brown-100"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
        <span>قصص النجاح</span>
      </router-link>
      
      <router-link 
        to="/events"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200 border-t border-brown-100"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <span>الفعاليات</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  route: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const dropdownOpen = ref(false)
</script>
