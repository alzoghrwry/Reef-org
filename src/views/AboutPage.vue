<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-primary-green via-accent-yellow to-warm-brown overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto text-white">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">من نحن</h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed opacity-90">
            مؤسسة ريف للتنمية الإنسانية - نعمل من أجل مستقبل أفضل للمجتمعات الريفية في اليمن
          </p>
        </div>
      </div>
    </section>

    <!-- نبذة عن المؤسسة -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-4 sm:mb-6">نبذة عن مؤسسة ريف</h2>
            <div class="w-16 sm:w-20 md:w-24 h-1 bg-primary-green mb-6 sm:mb-8"></div>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              مؤسسة ريف للتنمية الإنسانية هي منظمة مجتمعية غير ربحية تأسست عام 2010، تهدف إلى تحسين أوضاع النساء والشباب في المناطق الريفية المتضررة من الحرب والكوارث الطبيعية في اليمن.
            </p>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              نؤمن بأن التنمية المستدامة تبدأ من المجتمع المحلي، ونسعى لتمكين المجتمعات الريفية من خلال برامج شاملة تركز على التعليم، الصحة، الزراعة المستدامة، وتمكين المرأة.
            </p>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              منذ تأسيسها، عملت المؤسسة على تنفيذ أكثر من 150 مشروع تنموي في مختلف محافظات اليمن، مما ساهم في تحسين حياة أكثر من 25,000 فرد من أفراد المجتمع.
            </p>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="مؤسسة ريف" 
                 class="rounded-xl shadow-2xl">
            <!-- <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-green to-field-green rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- رؤيتنا ورسالتنا -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-4">رؤيتنا ورسالتنا</h2>
          <div class="w-16 sm:w-20 md:w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- الرؤية -->
          <div class="card p-8 text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-green to-field-green rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-dark-text mb-3 sm:mb-4">رؤيتنا</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              نسعى إلى تحقيق مجتمع يمني ريفي مزدهر ومستقر، يتمتع بالعدالة الاجتماعية والتنمية المستدامة، حيث تكون المرأة والشباب قوة دافعة للتغيير الإيجابي.
            </p>
          </div>
          
          <!-- الرسالة -->
          <div class="card p-8 text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-green to-field-green rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-dark-text mb-3 sm:mb-4">رسالتنا</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              نعمل على تمكين المجتمعات الريفية من خلال برامج تنموية شاملة تركز على التعليم، الصحة، الزراعة المستدامة، وتمكين المرأة، مع التركيز على الاستدامة والمشاركة المجتمعية.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- أهدافنا - Professional Timeline -->
    <section class="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Background Elements -->
          <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 right-20 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-80 h-80 bg-accent-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-24">
          <div class="inline-flex items-center bg-primary-green rounded-full px-6 py-3 mb-8">
            <svg class="w-6 h-6 ml-3 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="text-lg font-semibold text-primary-green">اهداف المؤسسة</span>
          </div>
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            <span class="bg-gradient-to-r from-primary-green to-primary-green bg-clip-text text-transparent">
              اهداف المؤسسة
            </span>
          </h2>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اهداف المؤسسة الرئيسية لتعزيز الحضور الرقمي والتفاعل مع المجتمع
          </p>
        </div>
        
        <!-- Professional Timeline -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Central Timeline Line -->
          <div class="absolute right-1/2 transform translate-x-1/2 w-1 bg-gradient-to-b from-primary-green via-accent-yellow to-brown-700 timeline-line-pro" 
               :style="{ height: timelineProgress + '%' }"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-32">
            <div v-for="(goal, index) in timelineGoals" :key="index" 
                 class="timeline-item-pro relative"
                 :class="{ 'timeline-item-pro-visible': goal.visible }">
              
              <!-- Timeline Marker -->
              <div class="absolute right-1/2 transform translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-green shadow-xl z-20 flex items-center justify-center"
                   :class="{ 'timeline-marker-pro-animated': goal.visible }">
                <div class="w-6 h-6 bg-primary-green rounded-full"></div>
              </div>
              
              <!-- Goal Card - Responsive Design -->
              <div class="timeline-card-pro bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg mx-auto md:mx-0 border border-gray-100"
                   :class="{ 
                     'timeline-card-pro-visible': goal.visible,
                     'timeline-card-right': index % 2 === 0,
                     'timeline-card-left': index % 2 === 1
                   }">
                
                <!-- Content -->
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight text-right">{{ goal.title }}</h3>
                <p class="text-gray-600 leading-relaxed text-base md:text-lg text-right">{{ goal.description }}</p>
                
                <!-- Progress Indicator -->
                <div class="mt-6 flex items-center justify-between">
                  <span class="text-sm font-semibold text-primary-green">{{ Math.round((index + 1) / timelineGoals.length * 100) }}%</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <div class="h-full bg-gradient-to-r from-primary-green to-accent-yellow rounded-full transition-all duration-1000"
                         :style="{ width: goal.visible ? '100%' : '0%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom CTA -->
        <div class="text-center mt-24">
          <div class="inline-flex items-center bg-gradient-to-r from-primary-green to-accent-yellow text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            اكتشف المزيد من إنجازاتنا
          </div>
        </div>
      </div>
    </section>

    <!-- قيمنا -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">قيمنا</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(value, index) in values" :key="index" 
               class="text-center p-6">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-field-green rounded-full flex items-center justify-center">
              <component :is="value.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-lg font-bold text-dark-text mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- فريق العمل -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">فريق العمل</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" 
               class="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <img :src="member.image" :alt="member.name" 
                 class="w-32 h-32 mx-auto mb-4 rounded-full object-cover">
            <h3 class="text-xl font-bold text-dark-text mb-2">{{ member.name }}</h3>
            <p class="text-primary-green font-semibold mb-3">{{ member.position }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- إنجازاتنا -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">إنجازاتنا</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(achievement, index) in achievements" :key="index" 
               class="text-center p-6 card hover:shadow-xl transition-all duration-300">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-field-green rounded-full flex items-center justify-center">
              <component :is="achievement.icon" class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-primary-green mb-2">{{ achievement.number }}</div>
            <h3 class="text-lg font-semibold text-dark-text mb-2">{{ achievement.title }}</h3>
            <p class="text-gray-600">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- شهادات الاعتماد -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">شهادات الاعتماد</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(certificate, index) in certificates" :key="index" 
               class="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <img :src="certificate.image" :alt="certificate.title" 
                 class="w-24 h-24 mx-auto mb-4 object-contain">
            <h3 class="text-lg font-bold text-dark-text mb-2">{{ certificate.title }}</h3>
            <p class="text-gray-600 text-sm">{{ certificate.issuer }}</p>
            <p class="text-primary-green text-sm font-semibold">{{ certificate.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 bg-gradient-to-r from-primary-green via-accent-yellow to-warm-brown relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">انضم إلينا في رحلة التغيير</h2>
          <p class="text-xl mb-8 leading-relaxed opacity-90">
            يمكنك المساهمة في إحداث فرق حقيقي في حياة المجتمعات الريفية من خلال التطوع أو التبرع أو المشاركة في مشاريعنا
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn-secondary bg-white text-primary-green hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
              <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              تبرع الآن
            </button>
            <button class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
              <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              كن متطوعًا
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

// Icon components
const EducationIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>
  `
})

const HealthIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  `
})

const AgricultureIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
    </svg>
  `
})

const WomenIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  `
})

const IntegrityIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
})

const TransparencyIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  `
})

const RespectIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  `
})

const ExcellenceIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
    </svg>
  `
})

const ProjectsIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
    </svg>
  `
})

const BeneficiariesIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>
  `
})

const VolunteersIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
  `
})

const CommunitiesIcon = defineComponent({
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  `
})

export default {
  name: 'AboutPage',
  components: {
    EducationIcon,
    HealthIcon,
    AgricultureIcon,
    WomenIcon,
    IntegrityIcon,
    TransparencyIcon,
    RespectIcon,
    ExcellenceIcon,
    ProjectsIcon,
    BeneficiariesIcon,
    VolunteersIcon,
    CommunitiesIcon
  },
        setup() {
          const timelineProgress = ref(0)
          const timelineGoals = ref([
            {
              title: 'تعزيز الحضور الرقمي',
              description: 'تعزيز حضور المنظمة الرقمي وزيادة الوعي بعملها من خلال منصة إلكترونية متطورة.',
              visible: false
            },
            {
              title: 'منصة مركزية شاملة',
              description: 'توفير منصة مركزية وشاملة لعرض رؤية المنظمة، رسالتها، برامجها، وإنجازاتها.',
              visible: false
            },
            {
              title: 'تسهيل التواصل والتفاعل',
              description: 'تسهيل التواصل والتفاعل المباشر مع الجمهور، المانحين، والشركاء.',
              visible: false
            },
            {
              title: 'بناء الثقة والشفافية',
              description: 'بناء الثقة والشفافية من خلال عرض قصص النجاح والتقارير والوثائق.',
              visible: false
            },
            {
              title: 'تحليل سلوك الزوار',
              description: 'توفير أداة لتحليل سلوك الزوار وتحسين استراتيجيات التواصل.',
              visible: false
            },
            {
              title: 'نقطة انطلاق للدعم',
              description: 'أن يكون الموقع نقطة انطلاق لجذب المتطوعين والباحثين عن عمل والدعم.',
              visible: false
            }
          ])

    const goals = [
      {
        title: 'تحسين التعليم',
        description: 'توفير فرص تعليمية عالية الجودة للأطفال والشباب في المناطق الريفية',
        icon: 'EducationIcon'
      },
      {
        title: 'تعزيز الصحة',
        description: 'تحسين الخدمات الصحية والوقائية في المجتمعات الريفية',
        icon: 'HealthIcon'
      },
      {
        title: 'الزراعة المستدامة',
        description: 'تطوير الزراعة المستدامة وضمان الأمن الغذائي',
        icon: 'AgricultureIcon'
      },
      {
        title: 'تمكين المرأة',
        description: 'تعزيز دور المرأة في التنمية الاقتصادية والاجتماعية',
        icon: 'WomenIcon'
      },
      {
        title: 'التنمية المجتمعية',
        description: 'بناء قدرات المجتمعات المحلية وتطوير البنية التحتية',
        icon: 'CommunitiesIcon'
      },
      {
        title: 'الاستدامة البيئية',
        description: 'حماية البيئة وضمان الاستدامة في جميع مشاريعنا',
        icon: 'ExcellenceIcon'
      }
    ]

    const values = [
      {
        title: 'النزاهة',
        description: 'نلتزم بأعلى معايير الأخلاقيات والشفافية في جميع أعمالنا',
        icon: 'IntegrityIcon'
      },
      {
        title: 'الشفافية',
        description: 'نؤمن بالشفافية الكاملة في الإدارة والمساءلة المجتمعية',
        icon: 'TransparencyIcon'
      },
      {
        title: 'الاحترام',
        description: 'نحترم كرامة الإنسان ونقدر التنوع الثقافي والاجتماعي',
        icon: 'RespectIcon'
      },
      {
        title: 'التميز',
        description: 'نسعى للتميز في تقديم خدماتنا وتحقيق أفضل النتائج',
        icon: 'ExcellenceIcon'
      }
    ]

    const teamMembers = [
      {
        name: 'د. أحمد محمد',
        position: 'المدير التنفيذي',
        description: 'خبير في التنمية المستدامة مع أكثر من 15 عاماً من الخبرة',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'فاطمة علي',
        position: 'مديرة برامج المرأة',
        description: 'متخصصة في تمكين المرأة والتنمية المجتمعية',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'محمد سالم',
        position: 'مدير المشاريع',
        description: 'خبير في إدارة المشاريع التنموية والتنفيذ',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]

    const achievements = [
      {
        number: '150+',
        title: 'مشروع مكتمل',
        description: 'مشاريع تنموية شاملة',
        icon: 'ProjectsIcon'
      },
      {
        number: '25,000+',
        title: 'مستفيد',
        description: 'أفراد استفادوا من برامجنا',
        icon: 'BeneficiariesIcon'
      },
      {
        number: '500+',
        title: 'متطوع',
        description: 'متطوعين نشطين',
        icon: 'VolunteersIcon'
      },
      {
        number: '50+',
        title: 'مجتمع',
        description: 'مجتمع ريفي مستفيد',
        icon: 'CommunitiesIcon'
      }
    ]

    const certificates = [
      {
        title: 'شهادة الاعتماد الدولية',
        issuer: 'منظمة الأمم المتحدة',
        year: '2023',
        image: 'https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=UN'
      },
      {
        title: 'شهادة الجودة',
        issuer: 'منظمة الصحة العالمية',
        year: '2022',
        image: 'https://via.placeholder.com/100x100/2196F3/FFFFFF?text=WHO'
      },
      {
        title: 'شهادة التميز',
        issuer: 'اليونيسيف',
        year: '2023',
        image: 'https://via.placeholder.com/100x100/FF9800/FFFFFF?text=UNICEF'
      }
    ]

    // Professional Timeline Animation Logic
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item-pro')
      const timelineLine = document.querySelector('.timeline-line-pro')
      
      if (!timelineLine || timelineItems.length === 0) return
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      
      // Get timeline section bounds
      const timelineSection = timelineItems[0].closest('section')
      if (!timelineSection) return
      
      const timelineSectionRect = timelineSection.getBoundingClientRect()
      const timelineStart = timelineSectionRect.top + scrollTop
      const timelineEnd = timelineSectionRect.bottom + scrollTop
      
      // Calculate scroll progress through timeline section
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop - timelineStart + windowHeight) / (timelineEnd - timelineStart + windowHeight)))
      
      // Update timeline progress (0-100%)
      timelineProgress.value = Math.round(scrollProgress * 100)
      
      // Check visibility of each timeline item with intersection observer logic
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
        
        if (isVisible && !timelineGoals.value[index].visible) {
          // Add delay for staggered animation
          setTimeout(() => {
            timelineGoals.value[index].visible = true
          }, index * 200)
        }
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial call
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      timelineProgress,
      timelineGoals,
      goals,
      values,
      teamMembers,
      achievements,
      certificates
    }
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Professional Timeline Styles */
.timeline-line-pro {
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 100px;
  background: linear-gradient(to bottom, #AFAA28, #D4CD40, #825B26);
  box-shadow: 0 0 20px rgba(175, 170, 40, 0.3);
}

.timeline-item-pro {
  opacity: 0;
  transform: translateY(80px) scale(0.9);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item-pro-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.timeline-marker-pro-animated {
  animation: professionalPulse 2s infinite;
  transform: scale(1.1);
}

.timeline-card-pro {
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.timeline-card-pro-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Alternating card positions */
.timeline-card-right {
  margin-right: auto;
  margin-left: 0;
  transform: translateX(-100px) translateY(60px) scale(0.95);
}

.timeline-card-right.timeline-card-pro-visible {
  transform: translateX(0) translateY(0) scale(1);
}

.timeline-card-left {
  margin-left: auto;
  margin-right: 0;
  transform: translateX(100px) translateY(60px) scale(0.95);
}

.timeline-card-left.timeline-card-pro-visible {
  transform: translateX(0) translateY(0) scale(1);
}

@keyframes professionalPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(175, 170, 40, 0.7);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(175, 170, 40, 0.3);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(175, 170, 40, 0);
    transform: scale(1);
  }
}

/* Professional hover effects */
.timeline-card-pro:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
}

/* Gradient text animation */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-card-pro {
    transform: translateY(40px) scale(0.95);
    margin: 0 1rem;
  }
  
  .timeline-card-pro-visible {
    transform: translateY(0) scale(1);
  }
  
  .timeline-item-pro {
    transform: translateY(60px) scale(0.9);
  }
  
  .timeline-item-pro-visible {
    transform: translateY(0) scale(1);
  }
  
  /* Hide timeline line and markers on mobile */
  .timeline-line-pro {
    display: none;
  }
  
  .timeline-marker-pro-animated {
    display: none;
  }
  
  /* Center all cards on mobile */
  .timeline-card-right,
  .timeline-card-left {
    transform: translateY(40px) scale(0.95);
    margin: 0 1rem;
  }
  
  .timeline-card-right.timeline-card-pro-visible,
  .timeline-card-left.timeline-card-pro-visible {
    transform: translateY(0) scale(1);
  }
}
</style>
