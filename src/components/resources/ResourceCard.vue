<template>
    <div class="card group hover:shadow-2xl transition-all duration-300 p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-lg flex items-center justify-center mr-4">
          <slot name="icon" />
        </div>
        <span class="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-medium">
          {{ categoryName }}
        </span>
      </div>
  
      <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-green transition-colors">
        {{ resource.title }}
      </h3>
      <p class="text-gray-600 leading-relaxed mb-4">{{ resource.description }}</p>
  
      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{{ formattedDate }}</span>
        <span>{{ resource.fileSize }}</span>
      </div>
  
      <button class="w-full btn-secondary group-hover:shadow-lg transition-all duration-300">
        <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586l5.414 5.414V19a2 2 0 01-2 2z"/>
        </svg>
        تحميل الملف
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    resource: Object,
    categoryName: String
  })
  
  const formattedDate = computed(() => {
    const date = new Date(props.resource.date)
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })
  })
  </script>
  