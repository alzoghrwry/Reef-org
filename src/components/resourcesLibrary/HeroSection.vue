<template>
  <section class="relative bg-gradient-to-r from-primary-green to-warm-brown text-white py-20">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
})
</script>


