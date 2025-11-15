<template>
  <section ref="sectionRef" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">أثرنا في الأرقام</h2>
        <div class="w-24 h-1 bg-primary-green mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, index) in stats" :key="index" 
             class="text-center p-6 card hover:shadow-xl transition-all duration-300" 
             ref="statCards">
          <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center shadow-lg">
            <div v-html="stat.icon" class="w-10 h-10 text-white"></div>
          </div>
          <div class="text-4xl font-bold text-primary-green mb-2" >
            {{ formatNumber(stat.current) }}
          </div>
          <h3 class="text-lg font-semibold text-dark-text mb-2">{{ stat.title }}</h3>
          <p class="text-gray-600">{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    required: true
  }
})

const sectionRef = ref(null)
const statCards = ref([])
let animationTimers = []

const animateNumbers = () => {
  // Reset all stats to 0 first
  props.stats.forEach((stat, index) => {
    stat.current = 0
  })
  
  // Clear any existing timers
  animationTimers.forEach(timer => {
    if (timer) clearInterval(timer)
  })
  animationTimers = []
  
  props.stats.forEach((stat, index) => {
    const duration = 2000
    const steps = 60
    const increment = stat.target / steps
    let current = 0
    
    // Add slight delay for staggered effect
    setTimeout(() => {
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.target) {
          stat.current = stat.target
          clearInterval(timer)
        } else {
          stat.current = Math.floor(current)
        }
      }, duration / steps)
      animationTimers.push(timer)
    }, index * 100)
  })
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

let observer = null

onMounted(() => {
  // Use Intersection Observer to trigger animation when section is in view
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers()
      }
    })
  }, {
    threshold: 0.3, // Trigger when 30% of section is visible
    rootMargin: '0px'
  })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  // Clean up all timers
  animationTimers.forEach(timer => {
    if (timer) clearInterval(timer)
  })
})
</script>

