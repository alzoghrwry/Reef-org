<template>
  <div class="mt-4 pb-4">
    <div class="relative">
      <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text" 
        placeholder="البحث السريع..."
        class="w-full px-4 py-3 pr-12 rounded-lg border-2 border-brown-200 focus:border-gold-500 focus:outline-none transition-colors duration-300"
      >
      <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
