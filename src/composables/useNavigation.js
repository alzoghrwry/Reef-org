/**
 * Navigation Management Composable
 * Handles navigation state and interactions
 */

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { mediaCenterRoutes } from '@/routes/navigation'

export function useNavigation() {
  const route = useRoute()
  const mobileMenuOpen = ref(false)
  const mediaCenterOpen = ref(false)
  const mobileMediaCenterOpen = ref(false)
  const showSearch = ref(false)
  const searchQuery = ref('')

  const isMediaCenterActive = computed(() => {
    return mediaCenterRoutes.includes(route.path)
  })

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  const toggleMediaCenter = () => {
    mediaCenterOpen.value = !mediaCenterOpen.value
  }

  const toggleMobileMediaCenter = () => {
    mobileMediaCenterOpen.value = !mobileMediaCenterOpen.value
  }

  const toggleSearch = () => {
    showSearch.value = !showSearch.value
    if (!showSearch.value) {
      searchQuery.value = ''
    }
  }

  return {
    mobileMenuOpen,
    mediaCenterOpen,
    mobileMediaCenterOpen,
    showSearch,
    searchQuery,
    isMediaCenterActive,
    toggleMobileMenu,
    toggleMediaCenter,
    toggleMobileMediaCenter,
    toggleSearch
  }
}

