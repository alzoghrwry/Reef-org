<template>
  <div class="card group hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <img
      v-if="imageSrc"
      :src="imageSrc"
      :alt="resource.title"
      class="block w-full h-40 object-cover"
      @error="onImgError"
    >
    <div class="p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-brown-50 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-6 h-6 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div>
          <span class="bg-brown-100 text-warm-brown px-3 py-1 rounded-full text-sm font-medium">
            {{ categoryName }}
          </span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-green transition-colors">
        {{ resource.title }}
      </h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        {{ resource.description }}
      </p>

      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{{ formattedDate }}</span>
        <span>{{ resource.fileSize }}</span>
      </div>

      <button class="w-full btn-secondary group-hover:shadow-lg transition-all duration-300">
        <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        تحميل الملف
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import fallbackLogo from '@/assets/img/logo.png'

const props = defineProps({
  resource: { type: Object, required: true },
  getCategoryName: { type: Function, required: true },
  formatDate: { type: Function, required: true }
})

const imageSrcRef = ref(props.resource.image || fallbackLogo)
const onImgError = () => { imageSrcRef.value = fallbackLogo }
const imageSrc = computed(() => imageSrcRef.value)

const categoryName = computed(() => props.getCategoryName(props.resource.categoryId))
const formattedDate = computed(() => props.formatDate(props.resource.date))
</script>


