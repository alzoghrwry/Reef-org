<template>
  <section class="py-20 bg-gradient-to-br from-light-beige to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-flex items-center bg-gradient-to-r from-primary-green/10 to-accent-yellow/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
          <svg class="w-8 h-8 ml-3 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="text-xl font-bold text-dark-text">الصور المميزة</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">الصور المميزة</h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">مجموعة مختارة من أفضل الصور التي توثق إنجازاتنا ومشاريعنا التنموية</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div 
          v-for="image in featuredImages" 
          :key="image.id"
          class="card-premium group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500"
          @click="$emit('open', image)"
        >
          <div class="relative overflow-hidden">
            <img :src="image.image" :alt="image.title" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{{ getCategoryName(image.categoryId) }}</span>
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <h3 class="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{{ image.title }}</h3>
              <p class="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{{ image.description.substring(0, 80) }}...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <button class="btn-primary px-8 py-4 text-lg font-bold">
          <span class="flex items-center justify-end">
            <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            المزيد من الصور المميزة
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedImages',
  props: {
    featuredImages: { type: Array, required: true },
    getCategoryName: { type: Function, required: true }
  }
}
</script>


