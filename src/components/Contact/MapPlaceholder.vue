<template>
  <div class="card-premium p-8 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-yellow/20 to-primary-green/20"></div>
    </div>

    <div class="relative z-10">
      <div class="text-center mb-6">
        <div class="w-20 h-20 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 shadow-2xl">
          <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-dark mb-4">موقعنا على الخريطة</h3>
        <p class="text-lg text-gray-600">اكتشف موقعنا الجغرافي</p>
      </div>

      <div class="w-full h-80 bg-gradient-to-br from-light-beige to-white rounded-2xl flex items-center justify-center border-2 border-dashed border-accent-yellow hover:border-primary-green transition-colors duration-300 group cursor-pointer">
        <div class="text-center">
          <svg class="w-20 h-20 text-accent-yellow mx-auto mb-6 group-hover:text-primary-green transition-colors duration-300 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <p class="text-xl text-dark font-bold mb-2 group-hover:text-primary-green transition-colors duration-300">خريطة تفاعلية</p>
          <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">ستكون متاحة قريباً</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPlaceholder'
}
</script>
