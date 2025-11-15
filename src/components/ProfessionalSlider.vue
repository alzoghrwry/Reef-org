<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Slides Container -->
    <div class="relative h-full">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="absolute inset-0 transition-all duration-1000 ease-in-out"
        :class="{
          'opacity-100 z-10': index === currentSlide,
          'opacity-0 z-0': index !== currentSlide
        }"
      >
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img 
            :src="slide.image" 
            :alt="slide.title" 
            class="w-full h-full object-cover"
          />
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 h-full flex items-center">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl">
              <!-- Badge -->
              <div class="inline-block bg-primary-green/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeInUp">
                {{ slide.badge }}
              </div>
              
              <!-- Title -->
              <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp" style="animation-delay: 0.2s">
                {{ slide.title }}
              </h1>
              
              <!-- Description -->
              <p class="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl animate-fadeInUp" style="animation-delay: 0.4s">
                {{ slide.description }}
              </p>
              
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style="animation-delay: 0.6s">
                <button class="btn-primary bg-primary-green hover:bg-reef-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group">
                  <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {{ slide.primaryButton }}
                </button>
                <button class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green px-8 py-4 rounded-lg font-semibold flex items-center justify-center group">
                  <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {{ slide.secondaryButton }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button 
      @click="previousSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
    >
      <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
    >
      <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
    
    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="{
          'bg-white scale-125': index === currentSlide,
          'bg-white/50 hover:bg-white/70': index !== currentSlide
        }"
      ></button>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 right-8 z-20 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ProfessionalSlider',
  setup() {
    const currentSlide = ref(0)
    const autoplayInterval = ref(null)
    
    const slides = ref([
      {
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        badge: 'مؤسسة ريف للتنمية الإنسانية',
        title: 'نصنع فرقًا في حياة المجتمعات الريفية',
        description: 'منظمة ريف تعمل على تمكين المجتمعات الريفية عبر مشاريع مستدامة في التعليم، الصحة، الزراعة والتنمية الاقتصادية',
        primaryButton: 'شاهد فيديو تعريفي',
        secondaryButton: 'ادعم مشاريعنا'
      },
      {
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        badge: 'التعليم والتنمية',
        title: 'نحو مستقبل أفضل للأطفال',
        description: 'نؤمن بقوة التعليم في تغيير المستقبل، لذلك نعمل على بناء المدارس وتوفير التعليم الجيد للأطفال في المناطق الريفية',
        primaryButton: 'اكتشف مشاريعنا التعليمية',
        secondaryButton: 'كن جزءًا من التغيير'
      },
      {
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        badge: 'الزراعة المستدامة',
        title: 'نحو أمن غذائي مستدام',
        description: 'ندعم المزارعين بتقنيات الزراعة الحديثة والمستدامة لضمان الأمن الغذائي وتحسين الدخل في المجتمعات الريفية',
        primaryButton: 'تعرف على برامجنا الزراعية',
        secondaryButton: 'ادعم المزارعين'
      },
      {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        badge: 'الصحة والرعاية',
        title: 'صحة أفضل للمجتمعات',
        description: 'نعمل على توفير الرعاية الصحية الأساسية وتحسين الظروف الصحية في المناطق الريفية المحرومة من الخدمات الطبية',
        primaryButton: 'اكتشف برامجنا الصحية',
        secondaryButton: 'ساهم في الرعاية الصحية'
      }
    ])
    
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length
    }
    
    const previousSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
    }
    
    const goToSlide = (index) => {
      currentSlide.value = index
    }
    
    const startAutoplay = () => {
      autoplayInterval.value = setInterval(nextSlide, 6000) // تغيير الشريحة كل 6 ثوان
    }
    
    const stopAutoplay = () => {
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
        autoplayInterval.value = null
      }
    }
    
    onMounted(() => {
      startAutoplay()
    })
    
    onUnmounted(() => {
      stopAutoplay()
    })
    
    return {
      currentSlide,
      slides,
      nextSlide,
      previousSlide,
      goToSlide
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* تأثيرات إضافية */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 187, 106, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}
</style>
