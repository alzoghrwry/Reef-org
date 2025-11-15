<template>
  <div class="hidden lg:flex items-center">
    <button 
      @click="$emit('toggle')" 
      class="flex items-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-white px-6 py-3 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 relative group overflow-hidden"
    >
      <!-- Animated background gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-gold-200 via-gold-300 to-gold-200 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
      
      <!-- Animated shimmer effect -->
      <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      
      <!-- Language icon -->
      <svg class="w-6 h-6 relative z-10 transform transition-transform duration-300 group-hover:rotate-360 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L17 18l-1.12-1z"/>
      </svg>
      
      <!-- Language text -->
      <span class="font-bold text-sm relative z-10 transition-all duration-300 group-hover:text-gold-200">{{ language === 'ar' ? 'عربي' : 'English' }}</span>
      
      <!-- Glowing checkmark indicator -->
      <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse relative z-10 ring-2 ring-white/50">
        <svg class="w-4 h-4 text-brown-900 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gold-300 rounded-full blur-lg opacity-75 animate-ping"></div>
      </div>
      
      <!-- Sparkle effects -->
      <div class="absolute top-1 right-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
      <div class="absolute bottom-1 right-10 w-1 h-1 bg-gold-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  language: {
    type: String,
    default: 'ar'
  }
})

defineEmits(['toggle'])
</script>
