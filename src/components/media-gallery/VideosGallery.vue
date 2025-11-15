<template>
  <section class="py-20 bg-gradient-to-br from-light-beige to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-flex items-center bg-gradient-to-r from-primary-green/10 to-accent-yellow/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
          <svg class="w-8 h-8 ml-3 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <span class="text-xl font-bold text-dark-text">معرض الفيديوهات</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6 gradient-text">معرض الفيديوهات</h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">شاهد قصصنا التوثيقية ومشاريعنا التنموية من خلال الفيديوهات التفاعلية</p>
        <p class="text-lg text-gray-500">عرض {{ paginatedVideos.length }} من {{ allVideosCount }} فيديو</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="video in paginatedVideos" 
          :key="video.id"
          class="card-premium group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500"
          @click="$emit('open', video)"
        >
          <div class="relative overflow-hidden">
            <img :src="video.image" :alt="video.title" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <svg class="w-10 h-10 text-primary-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{{ getCategoryName(video.categoryId) }}</span>
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center justify-between mb-2">
                <span class="bg-primary-green/90 text-white px-3 py-1 rounded-full text-sm font-medium">{{ video.duration }}</span>
                <span class="text-white/90 text-sm">{{ formatDate(video.date) }}</span>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">{{ video.title }}</h3>
              <p class="text-white/90 text-sm">{{ video.description.substring(0, 80) }}...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4 mt-16">
        <button
          @click="$emit('prev')"
          :disabled="currentVideoPage === 1"
          class="group relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-gray-200 hover:border-primary-green"
          :class="{'cursor-not-allowed': currentVideoPage === 1}"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-primary-green to-accent-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg class="w-6 h-6 mx-auto text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <button
            v-for="page in visibleVideoPages"
            :key="page"
            @click="$emit('goToPage', page)"
            class="relative group"
          >
            <div
              v-if="page === currentVideoPage"
              class="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-reef-green-600 shadow-2xl flex items-center justify-center transform scale-110 transition-all duration-300"
            >
              <div class="absolute inset-0 rounded-full border-4 border-accent-yellow/50 animate-spin" style="animation-duration: 3s;"></div>
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-yellow/20 to-transparent"></div>
              <span class="text-2xl font-black text-white relative z-10">{{ page }}</span>
            </div>
            <div
              v-else
              class="relative w-12 h-12 rounded-full bg-white shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-primary-green group"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-accent-yellow/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="text-lg font-bold text-gray-600 group-hover:text-primary-green relative z-10 transition-colors duration-300">{{ page }}</span>
            </div>
          </button>
          <div v-if="totalVideoPages > 5 && currentVideoPage < totalVideoPages - 2" class="text-gray-400 text-2xl font-bold px-2">...</div>
        </div>
        <button
          @click="$emit('next')"
          :disabled="currentVideoPage === totalVideoPages"
          class="group relative w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-gray-200 hover:border-primary-green"
          :class="{'cursor-not-allowed': currentVideoPage === totalVideoPages}"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-accent-yellow to-primary-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg class="w-6 h-6 mx-auto text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div class="text-center mt-8">
        <p class="text-gray-500 text-lg">الصفحة <span class="font-bold text-primary-green">{{ currentVideoPage }}</span> من <span class="font-bold text-primary-green">{{ totalVideoPages }}</span></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideosGallery',
  props: {
    paginatedVideos: { type: Array, required: true },
    getCategoryName: { type: Function, required: true },
    formatDate: { type: Function, required: true },
    currentVideoPage: { type: Number, required: true },
    totalVideoPages: { type: Number, required: true },
    visibleVideoPages: { type: Array, required: true },
    allVideosCount: { type: Number, required: true }
  }
}
</script>


