<template>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div v-if="resources.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard
            v-for="resource in resources"
            :key="resource.id"
            :resource="resource"
            :categoryName="getCategoryName(resource.categoryId)"
          />
        </div>
        <EmptyState v-else />
      </div>
    </section>
  </template>
  
  <script setup>
  import ResourceCard from './ResourceCard.vue'
  import EmptyState from './EmptyState.vue'
  
  defineProps({
    resources: Array,
    getCategoryName: Function
  })
  </script>
  