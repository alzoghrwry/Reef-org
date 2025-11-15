<template>
  <div class="flex items-start space-x-3 space-x-reverse">
    <svg class="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path :d="icon" />
    </svg>
    <div>
      <p class="text-brown-200 text-xs"><slot name="label" /></p>
      <p class="text-white font-medium"><slot name="value" /></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>
