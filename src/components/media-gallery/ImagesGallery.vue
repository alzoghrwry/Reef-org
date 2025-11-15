<template>
  <section class="py-20 bg-gradient-to-br from-light-beige to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-flex items-center bg-gradient-to-r from-accent-yellow/10 to-primary-green/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
          <svg class="w-8 h-8 ml-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="text-xl font-bold text-dark-text">معرض الصور</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">معرض الصور</h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">استكشف مجموعتنا الشاملة من الصور التي توثق رحلتنا في التنمية الإنسانية</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="$emit('update:selectedCategory', category.id)"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          :class="selectedCategory === category.id 
            ? 'bg-primary-green text-white shadow-lg' 
            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'"
        >
          {{ category.name }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="image in filteredImages" 
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
              <p class="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{{ image.description.substring(0, 60) }}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImagesGallery',
  props: {
    categories: { type: Array, required: true },
    selectedCategory: { type: String, required: true },
    filteredImages: { type: Array, required: true },
    getCategoryName: { type: Function, required: true }
  }
}
</script>


