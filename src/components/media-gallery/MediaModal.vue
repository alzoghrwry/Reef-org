<template>
  <div 
    v-if="selectedItem" 
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    @click="$emit('close')"
  >
    <div 
      class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <div class="relative">
        <div v-if="selectedItem.type === 'video'" class="relative">
          <video 
            :src="selectedItem.video" 
            controls
            class="w-full h-96 object-cover rounded-t-2xl"
            :poster="selectedItem.image"
          >
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>
        <div v-else>
          <img 
            :src="selectedItem.image" 
            :alt="selectedItem.title"
            class="w-full h-96 object-cover rounded-t-2xl"
          >
        </div>
        <button 
          @click="$emit('close')"
          class="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-8">
        <div class="flex items-center gap-4 mb-6">
          <span class="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
            {{ getCategoryName(selectedItem.categoryId) }}
          </span>
          <span class="text-gray-500">{{ formatDate(selectedItem.date) }}</span>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ selectedItem.title }}</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">{{ selectedItem.description }}</p>
        <div v-if="selectedItem.content" class="prose max-w-none">
          <div v-html="selectedItem.content"></div>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <button class="btn-primary">مشاركة</button>
          <button class="btn-secondary">تحميل الصورة</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaModal',
  props: {
    selectedItem: { type: Object, required: false },
    getCategoryName: { type: Function, required: true },
    formatDate: { type: Function, required: true }
  }
}
</script>


