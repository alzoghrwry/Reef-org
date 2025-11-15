<template>
  <div class="border-t border-gray-200 pt-4">
    <div class="flex items-center justify-center space-x-4 space-x-reverse">
      <!-- Language button -->
      <button @click="$emit('toggle-language')" class="w-14 h-14 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-12 shadow-xl hover:shadow-2xl relative group overflow-hidden">
        <!-- Animated shimmer effect -->
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <!-- Language icon -->
        <svg class="w-7 h-7 text-white relative z-10 transform transition-transform duration-300 group-hover:rotate-360 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
        
        <!-- Glowing checkmark indicator -->
        <div v-if="language === 'ar'" class="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white animate-pulse relative z-10">
          <svg class="w-3 h-3 text-brown-900 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gold-300 rounded-full blur-md opacity-75 animate-ping"></div>
        </div>
      </button>
      
      <!-- Settings button -->
      <button class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200">
        <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
        </svg>
      </button>
      
      <!-- Search button -->
      <button @click="$emit('toggle-search')" class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  language: {
    type: String,
    default: 'ar'
  }
})

defineEmits(['toggle-language', 'toggle-search'])
</script>
