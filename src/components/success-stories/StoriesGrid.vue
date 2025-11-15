<template>
  <section class="py-20 bg-light-beige">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <StoryCard
        v-for="story in stories"
        :key="story.id"
        :story="story"
        @open="$emit('open', $event)"
      />
    </div>
  </section>
</template>

<script setup>
import StoryCard from './StoryCard.vue'

defineProps({
  stories: { type: Array, required: true }
})
defineEmits(['open'])
</script>


