<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-white to-primary-green/5 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-green rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-accent-yellow rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-brown rounded-full blur-2xl"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="inline-block bg-primary-green/10 backdrop-blur-sm text-primary-green px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fadeInUp">
          مؤسسة ريف للتنمية الإنسانية
        </div>
        <h2 class="text-5xl md:text-6xl font-bold text-dark-text mb-6 leading-tight animate-fadeInUp" style="animation-delay: 0.2s">
          نبذة عن مؤسستنا
        </h2>
        <div class="w-32 h-1 bg-gradient-to-r from-primary-green to-accent-yellow mx-auto mb-8 animate-fadeInUp" style="animation-delay: 0.4s"></div>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style="animation-delay: 0.6s">
          منظمة مجتمعية غير ربحية تأسست عام 2016، تهدف إلى تحسين أوضاع النساء والشباب في المناطق الريفية المتضررة من الحرب والكوارث الطبيعية في اليمن
        </p>
      </div>
      
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Mission Card -->
          <div class="card-premium p-8 hover:shadow-2xl transition-all duration-500 group">
            <div class="flex items-start space-x-4 space-x-reverse">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-text mb-3">رؤيتنا</h3>
                <p class="text-gray-600 leading-relaxed">
                  مجتمعات ريفية مزدهرة ومستقلة قادرة على تحقيق التنمية المستدامة والاعتماد على الذات
                </p>
              </div>
            </div>
          </div>
          
          <!-- Vision Card -->
          <div class="card-premium p-8 hover:shadow-2xl transition-all duration-500 group">
            <div class="flex items-start space-x-4 space-x-reverse">
              <div class="w-16 h-16 bg-gradient-to-br from-accent-yellow to-sun-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-text mb-3">رسالتنا</h3>
                <p class="text-gray-600 leading-relaxed">
                  تمكين المجتمعات الريفية من خلال برامج ومشاريع مستدامة تركز على التعليم والصحة والزراعة والتنمية الاقتصادية
                </p>
              </div>
            </div>
          </div>
          
          <!-- Values Card -->
          <div class="card-premium p-8 hover:shadow-2xl transition-all duration-500 group">
            <div class="flex items-start space-x-4 space-x-reverse">
              <div class="w-16 h-16 bg-gradient-to-br from-warm-brown to-reef-brown-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-text mb-3">قيمنا</h3>
                <p class="text-gray-600 leading-relaxed">
                  الشفافية، النزاهة، التميز، العمل الجماعي، والالتزام بخدمة المجتمع
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Content - Image Gallery -->
        <div class="relative">
          <!-- Main Image -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Reef Foundation Team" 
              class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h4 class="text-xl font-bold mb-2">فريق مؤسسة ريف</h4>
              <p class="text-sm opacity-90">متطوعون ملتزمون بخدمة المجتمع</p>
            </div>
          </div>
          
          <!-- Floating Cards -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-green">8+</div>
              <div class="text-sm text-gray-600">سنوات من الخبرة</div>
            </div>
          </div>
          
          <div class="absolute -bottom-6 -left-6 w-40 h-24 bg-gradient-to-r from-primary-green to-accent-yellow rounded-2xl shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
            <div class="text-center text-white">
              <div class="text-2xl font-bold">142</div>
              <div class="text-sm opacity-90">مشروع منجز</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Statistics Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <div v-for="(stat, index) in stats" :key="index" class="text-center group">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-green to-field-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <component :is="stat.icon" class="w-10 h-10 text-white" />
          </div>
          <div class="text-3xl font-bold text-dark-text mb-2">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center">
        <div class="card-premium p-12 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-dark-text mb-6">انضم إلينا في رحلة التغيير</h3>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            يمكنك المساهمة في إحداث فرق حقيقي في حياة المجتمعات الريفية من خلال التطوع أو التبرع أو المشاركة في مشاريعنا
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary bg-gradient-to-r from-primary-green to-field-green hover:from-reef-green-600 hover:to-field-green px-8 py-4 rounded-lg font-semibold flex items-center justify-center group">
              <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              تبرع الآن
            </button>
            <button class="btn-secondary bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group">
              <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              كن متطوعًا
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'AboutSection',
  setup() {
    const stats = ref([
      {
        value: '18M',
        label: 'مليون ريال تمويل',
        icon: 'svg'
      },
      {
        value: '2,840',
        label: 'متطوع نشط',
        icon: 'svg'
      },
      {
        value: '52,700',
        label: 'مستفيد مباشر',
        icon: 'svg'
      },
      {
        value: '142',
        label: 'مشروع منجز',
        icon: 'svg'
      }
    ])
    
    onMounted(() => {
      // إضافة تأثيرات التمرير للعناصر
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      }, observerOptions)

      // مراقبة العناصر
      const elements = document.querySelectorAll('.card-premium, .group')
      elements.forEach(el => observer.observe(el))
    })
    
    return {
      stats
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
.card-premium:hover {
  transform: translateY(-5px);
}

/* تأثيرات الأزرار */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 187, 106, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 187, 106, 0.2);
}
</style>
