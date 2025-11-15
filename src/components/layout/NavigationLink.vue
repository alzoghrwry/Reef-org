<template>
  <router-link 
    :to="route.path" 
    class="relative flex items-center space-x-1.5 space-x-reverse text-brown-700 hover:text-gold-600 font-medium transition-all duration-300 px-2 py-2 group"
  >
    <component :is="route.icon" class="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0" />
    <span class="relative z-10 transition-all duration-300 group-hover:font-bold whitespace-nowrap text-sm">{{ route.name }}</span>
    
    <!-- Animated underline effect -->
    <span 
      class="absolute bottom-0 right-0 left-0 h-1 bg-gold-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-full"
    ></span>
    
    <!-- Active state - full underline -->
    <span 
      v-if="isActive"
      class="absolute bottom-0 right-0 left-0 h-1 bg-gold-500 scale-x-100 rounded-full"
    ></span>
  </router-link>
</template>

<script setup>
defineProps({
  route: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>
