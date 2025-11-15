<template>
  <div class="lg:hidden mt-4 pb-4">
    <!-- Navigation Links -->
    <div class="space-y-2 mb-6">
      <template v-for="route in routes" :key="route.path">
        <!-- Media Center with Dropdown -->
        <div v-if="route.path === '/media-gallery'" class="space-y-2">
          <button 
            @click="mobileMediaCenterOpen = !mobileMediaCenterOpen"
            class="w-full flex items-center justify-between py-3 px-4 text-brown-700 hover:text-gold-600 hover:bg-gold-50 font-medium transition-colors duration-300 rounded-lg"
            :class="{ 'text-gold-600 bg-gold-50 border-r-4 border-gold-500': isMediaCenterActive }"
          >
            <div class="flex items-center space-x-2 space-x-reverse">
              <component :is="route.icon" class="w-5 h-5" />
              <span>المركز الإعلامي</span>
            </div>
            <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': mobileMediaCenterOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <!-- Dropdown Items -->
          <div v-if="mobileMediaCenterOpen" class="mr-6 space-y-1">
            <router-link 
              to="/media-gallery"
              @click="$emit('close')"
              class="flex items-center py-2 px-4 text-brown-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
              :class="{ 'text-gold-600 bg-gold-50 border-r-2 border-gold-500': currentRoute === '/media-gallery' }"
            >
              <svg class="w-5 h-5 text-gold-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>المعرض</span>
            </router-link>
            
            <router-link 
              to="/resources"
              @click="$emit('close')"
              class="flex items-center py-2 px-4 text-brown-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
              :class="{ 'text-gold-600 bg-gold-50 border-r-2 border-gold-500': currentRoute === '/resources' }"
            >
              <svg class="w-5 h-5 text-gold-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>التقارير والإصدارات</span>
            </router-link>
            
            <router-link 
              to="/success-stories"
              @click="$emit('close')"
              class="flex items-center py-2 px-4 text-brown-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
              :class="{ 'text-gold-600 bg-gold-50 border-r-2 border-gold-500': currentRoute === '/success-stories' }"
            >
              <svg class="w-5 h-5 text-gold-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              <span>قصص النجاح</span>
            </router-link>
          </div>
        </div>
        
        <!-- About with Dropdown -->
        <div v-else-if="route.path === '/about'" class="space-y-2">
          <button 
            @click="mobileAboutOpen = !mobileAboutOpen"
            class="w-full flex items-center justify-between py-3 px-4 text-brown-700 hover:text-gold-600 hover:bg-gold-50 font-medium transition-colors duration-300 rounded-lg"
            :class="{ 'text-gold-600 bg-gold-50 border-r-4 border-gold-500': isAboutActive }"
          >
            <div class="flex items-center space-x-2 space-x-reverse">
              <component :is="route.icon" class="w-5 h-5" />
              <span>من نحن</span>
            </div>
            <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': mobileAboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <!-- Dropdown Items -->
          <div v-if="mobileAboutOpen" class="mr-6 space-y-1">
            <router-link 
              to="/about"
              @click="$emit('close')"
              class="flex items-center py-2 px-4 text-brown-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
              :class="{ 'text-gold-600 bg-gold-50 border-r-2 border-gold-500': currentRoute === '/about' }"
            >
              <svg class="w-5 h-5 text-gold-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>عن المؤسسة</span>
            </router-link>
            
            <router-link 
              to="/foundation-history"
              @click="$emit('close')"
              class="flex items-center py-2 px-4 text-brown-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
              :class="{ 'text-gold-600 bg-gold-50 border-r-2 border-gold-500': currentRoute === '/foundation-history' }"
            >
              <svg class="w-5 h-5 text-gold-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>تاريخ المؤسسة</span>
            </router-link>
          </div>
        </div>
        
        <!-- Other Routes -->
        <router-link 
          v-else-if="route.path !== '/media-gallery'"
          :to="route.path" 
          class="flex items-center space-x-2 space-x-reverse py-3 px-4 text-brown-700 hover:text-gold-600 hover:bg-gold-50 font-medium transition-colors duration-300 rounded-lg"
          :class="{ 'text-gold-600 bg-gold-50 border-r-4 border-gold-500': currentRoute === route.path }"
          @click="$emit('close')"
        >
          <component :is="route.icon" class="w-5 h-5" />
          <span>{{ route.name }}</span>
        </router-link>
      </template>
    </div>
    
    <!-- Utility Icons for Mobile -->
    <MobileUtilityButtons 
      @toggle-language="$emit('toggle-language')"
      @toggle-search="$emit('toggle-search')"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MobileUtilityButtons from './MobileUtilityButtons.vue'

const props = defineProps({
  routes: {
    type: Array,
    required: true
  },
  currentRoute: {
    type: String,
    required: true
  }
})

defineEmits(['close', 'toggle-language', 'toggle-search'])

const mobileMediaCenterOpen = ref(false)
const mobileAboutOpen = ref(false)

const isMediaCenterActive = computed(() => {
  return ['/media-gallery', '/resources', '/success-stories'].includes(props.currentRoute)
})

const isAboutActive = computed(() => {
  return ['/about', '/foundation-history'].includes(props.currentRoute)
})
</script>
