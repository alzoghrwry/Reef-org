<template>
  <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
    <button 
      class="relative flex items-center space-x-1.5 space-x-reverse text-brown-700 hover:text-gold-600 font-medium transition-all duration-300 px-2 py-2 group"
      :class="{ 
        'text-gold-600': isActive
      }"
    >
      <component :is="route.icon" class="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0" />
      <span class="relative z-10 transition-all duration-300 group-hover:font-bold whitespace-nowrap text-sm">من نحن</span>
      <svg class="w-4 h-4 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': dropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        to="/about"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span>عن المؤسسة</span>
      </router-link>
      
      <router-link 
        to="/foundation-history"
        @click="dropdownOpen = false"
        class="flex items-center space-x-2 space-x-reverse px-4 py-3 text-brown-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-all duration-200 border-t border-brown-100"
      >
        <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>تاريخ المؤسسة</span>
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
