<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">الفعاليات</h2>
        <div class="w-24 h-1 bg-primary-green mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EventCard 
          v-for="(event, index) in events" 
          :key="index"
          :event="event"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCard from './EventCard.vue'

defineProps({
  events: {
    type: Array,
    required: true
  }
})
</script>

