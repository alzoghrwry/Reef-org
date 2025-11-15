<template>
  <!-- Desktop Navigation -->
  <div class="hidden lg:flex items-center space-x-1 space-x-reverse">
    <!-- Regular Routes -->
    <template v-for="route in routes" :key="route.path">
      <!-- Media Center with Dropdown -->
      <MediaCenterDropdown 
        v-if="route.path === '/media-gallery'"
        :route="route"
        :is-active="isMediaCenterActive"
      />
      
      <!-- About with Dropdown -->
      <AboutDropdown 
        v-else-if="route.path === '/about'"
        :route="route"
        :is-active="isAboutActive"
      />
      
      <!-- Other Routes -->
      <NavigationLink 
        v-else
        :route="route"
        :is-active="currentRoute === route.path"
      />
    </template>
  </div>

  <!-- Language Button -->
  <div class="hidden lg:flex items-center mr-4">
    <LanguageButton 
      :language="language"
      @toggle="$emit('toggle-language')" 
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MediaCenterDropdown from './MediaCenterDropdown.vue'
import AboutDropdown from './AboutDropdown.vue'
import NavigationLink from './NavigationLink.vue'
import LanguageButton from './LanguageButton.vue'

const props = defineProps({
  routes: {
    type: Array,
    required: true
  },
  currentRoute: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'ar'
  }
})

defineEmits(['toggle-language'])

const isMediaCenterActive = computed(() => {
  return ['/media-gallery', '/resources', '/success-stories', '/events'].includes(props.currentRoute)
})

const isAboutActive = computed(() => {
  return ['/about', '/foundation-history'].includes(props.currentRoute)
})
</script>