<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">شركاؤنا</h2>
        <div class="w-24 h-1 bg-primary-green mx-auto"></div>
      </div>
      
      <div class="relative overflow-hidden">
        <div class="flex animate-scroll space-x-8 space-x-reverse">
          <div v-for="(partner, index) in partners" :key="index" 
               class="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer">
            <img :src="partner.logo" :alt="partner.name" class="max-w-32 max-h-16 object-contain">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  partners: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>

