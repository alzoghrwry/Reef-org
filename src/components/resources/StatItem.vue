<template>
  <div ref="rootEl" class="text-center">
    <div class="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <h3 class="text-3xl font-bold text-reef-brown-600 mb-2">{{ displayText }}</h3>
    <p class="text-gray-600">{{ stat.label }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  stat: {
    type: Object,
    required: true // { id, target: number, label, suffix?: string }
  },
  durationMs: { type: Number, default: 2000 },
  delayMs: { type: Number, default: 0 }
})

const rootEl = ref(null)
const current = ref(0)
const hasAnimated = ref(false)

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const displayText = computed(() => {
  const base = props.stat?.target ? formatNumber(current.value) : (props.stat.value || '0')
  return props.stat?.suffix ? `${base}${props.stat.suffix}` : base
})

let observer
let rafId

const animate = () => {
  const steps = 60
  const to = Number(props.stat?.target || 0)
  const increment = to / steps
  let value = 0
  setTimeout(() => {
    const interval = setInterval(() => {
      value += increment
      if (value >= to) {
        current.value = to
        clearInterval(interval)
      } else {
        current.value = Math.floor(value)
      }
    }, props.durationMs / steps)
  }, props.delayMs)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animate()
      }
    })
  }, { threshold: 0.3 })
  if (rootEl.value) observer.observe(rootEl.value)
})

onBeforeUnmount(() => {
  if (observer && rootEl.value) observer.unobserve(rootEl.value)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>


