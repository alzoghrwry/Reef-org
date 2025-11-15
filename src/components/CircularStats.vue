<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div 
      v-for="(stat, index) in stats" 
      :key="index"
      class="flex flex-col items-center"
    >
      <!-- الدائرة الإحصائية -->
      <div class="relative w-32 h-32 mb-4">
        <!-- الخلفية الدائرية -->
        <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <!-- الدائرة الخلفية -->
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            stroke-width="8"
            fill="none"
            class="text-gray-200"
          />
          <!-- الدائرة المقدمة المتحركة -->
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            stroke-width="8"
            fill="none"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="getStrokeDashoffset(stat.percentage)"
            class="text-brown-700 transition-all duration-2000 ease-out"
            :style="{ 
              strokeDashoffset: isVisible ? getStrokeDashoffset(stat.percentage) : circumference,
              transitionDelay: `${index * 200}ms`
            }"
          />
        </svg>
        
        <!-- النص في المنتصف -->
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <div class="text-2xl font-bold text-brown-700">{{ stat.value }}</div>
          <div class="text-xs text-gray-600 text-center leading-tight">{{ stat.label }}</div>
        </div>
        
        <!-- الأيقونة -->
        <div class="absolute -top-2 -right-2 w-8 h-8 bg-brown-700 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      
      <!-- العنوان والوصف -->
      <div class="text-center">
        <h3 class="text-lg font-semibold text-dark-text mb-2">{{ stat.title }}</h3>
        <p class="text-sm text-gray-600 leading-relaxed">{{ stat.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'CircularStats',
  setup() {
    const isVisible = ref(false)
    const circumference = 2 * Math.PI * 40 // نصف القطر 40
    
    const stats = ref([
      {
        value: '18',
        label: 'مليون ريال',
        title: 'التمويل المقدم',
        description: 'إجمالي التمويل المقدم للمشاريع التنموية',
        percentage: 85
      },
      {
        value: '2,840',
        label: 'متطوع نشط',
        title: 'المتطوعون',
        description: 'عدد المتطوعين النشطين في مختلف المشاريع',
        percentage: 90
      },
      {
        value: '52,700',
        label: 'مستفيد مباشر',
        title: 'المستفيدون',
        description: 'عدد الأشخاص الذين استفادوا من خدماتنا',
        percentage: 95
      },
      {
        value: '142',
        label: 'مشروع منجز',
        title: 'المشاريع',
        description: 'إجمالي المشاريع المنجزة بنجاح',
        percentage: 100
      }
    ])
    
    const getStrokeDashoffset = (percentage) => {
      return circumference - (percentage / 100) * circumference
    }
    
    onMounted(() => {
      // تفعيل الرسوم المتحركة عند ظهور المكون
      setTimeout(() => {
        isVisible.value = true
      }, 300)
    })
    
    return {
      stats,
      isVisible,
      circumference,
      getStrokeDashoffset
    }
  }
}
</script>

<style scoped>
/* تأثيرات إضافية للدوائر */
.circle-hover {
  transition: all 0.3s ease;
}

.circle-hover:hover {
  transform: scale(1.05);
}

/* تأثيرات النص */
.stat-text {
  transition: all 0.3s ease;
}

.stat-text:hover {
  color: #66bb6a;
}
</style>
