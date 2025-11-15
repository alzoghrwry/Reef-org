<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-brown-800 mb-4">مسيرتنا التاريخية عبر السنين</h2>
        <div class="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="flex justify-between items-start mb-12 relative pt-2">
        
        <div class="absolute inset-x-0 top-6 h-1 bg-gold-200 z-0 mx-4"></div>
        
        <div 
          v-for="(event, index) in events" 
          :key="index"
          class="flex flex-col items-center relative z-10 cursor-pointer w-1/4 sm:w-auto px-1 group"
          @click="activeEventIndex = index"
        >
          <div 
            class="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 transform ring-4"
            :class="[
              index === activeEventIndex 
                ? 'bg-gold-600 text-white shadow-xl scale-110 ring-gold-300' 
                : 'bg-white text-brown-700 border border-gold-400 hover:scale-105 ring-gold-100 hover:ring-gold-300'
            ]"
          >
            {{ event.year }}
          </div>
          
          <span 
            class="mt-3 text-xs md:text-sm text-center transition-colors duration-300 font-semibold pt-1"
            :class="{ 
                'text-brown-800 font-bold': index === activeEventIndex, 
                'text-gray-500 group-hover:text-brown-600': index !== activeEventIndex 
            }"
          >
            {{ event.title.split(':')[0] }} </span>
        </div>
      </div>
      
      <transition name="slide-fade" mode="out-in">
        <div :key="activeEventIndex" class="bg-gray-50 p-8 rounded-xl shadow-2xl border-t-4 border-gold-500 mt-12">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div class="md:col-span-1">
              <img 
                :src="activeEvent.image" 
                :alt="activeEvent.title"
                
                @error="activeEvent.image = 'https://via.placeholder.com/600x400/D4AF37/FFFFFF?text=Image+Not+Found'"
                
                class="w-full h-auto max-h-72 object-cover object-center rounded-lg shadow-xl hover:shadow-2xl transition duration-500"
              >
            </div>

            <div class="md:col-span-2">
              <h3 class="text-3xl font-extrabold text-brown-800 mb-3">{{ activeEvent.title }}</h3>
              <p class="text-xl font-semibold text-gold-700 mb-6 border-b pb-3 border-gold-100">عام {{ activeEvent.year }}</p>
              
              <p class="text-gray-700 leading-relaxed text-lg">
                {{ activeEvent.description }}
              </p>
            </div>
          </div>
          
        </div>
      </transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
});

const activeEventIndex = ref(0);

const activeEvent = computed(() => {
  return props.events[activeEventIndex.value];
});
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>