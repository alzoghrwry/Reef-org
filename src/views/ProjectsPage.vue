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
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">مشاريعنا</h1>
          <p class="text-xl md:text-2xl leading-relaxed opacity-90">
            نقدم مشاريع متنوعة تهدف إلى تحسين حياة المجتمعات الريفية وتمكينها من تحقيق التنمية المستدامة
          </p>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-12 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="activeFilter = filter.id"
            class="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            :class="activeFilter === filter.id 
              ? 'bg-primary-green text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ filter.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in filteredProjects" :key="project.id" 
               class="card card-hover-effect p-0 overflow-hidden">
            <div class="relative">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      :class="getStatusClass(project.status)">
                  {{ project.status }}
                </span>
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-sm font-semibold bg-white/90 text-gray-700">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
              
              <!-- Project Details -->
              <div class="space-y-2 mb-4 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">الموقع:</span>
                  <span class="text-gray-700">{{ project.location }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">المدة:</span>
                  <span class="text-gray-700">{{ project.duration }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">المستفيدون:</span>
                  <span class="text-gray-700">{{ project.beneficiaries }}</span>
                </div>
              </div>
              
              <!-- Progress Circle -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-600">نسبة الإنجاز</span>
                <div class="flex items-center space-x-2">
                  <div class="w-16 h-16 relative">
                    <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" stroke="#e5e7eb" stroke-width="6" fill="none"/>
                      <circle cx="50" cy="50" r="30" stroke="#5d3f1a" stroke-width="6" fill="none" 
                              :stroke-dasharray="188.4" :stroke-dashoffset="188.4 - (188.4 * project.progress / 100)" 
                              class="transition-all duration-1000"/>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-sm font-bold text-brown-700">{{ project.progress }}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button class="btn-primary w-full">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                معرفة المزيد
              </button>
            </div>
          </div>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-secondary">
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            عرض المزيد
          </button>
        </div>
      </div>
    </section>

    <!-- Project Categories -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">مجالات عملنا</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="category in categories" :key="category.id" 
               class="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-accent-yellow rounded-full flex items-center justify-center">
              <component :is="category.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-bold text-dark-text mb-3">{{ category.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ category.description }}</p>
            <div class="mt-4 text-primary-green font-semibold">{{ category.projectsCount }} مشروع</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-20 bg-gradient-to-br from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">إحصائيات المشاريع</h2>
          <div class="w-24 h-1 bg-primary-green mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in projectStats" :key="stat.id" 
               class="text-center p-6 card hover:shadow-xl transition-all duration-300">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-green to-accent-yellow rounded-full flex items-center justify-center">
              <component :is="stat.icon" class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-primary-green mb-2">{{ stat.number }}</div>
            <h3 class="text-lg font-semibold text-dark-text mb-2">{{ stat.title }}</h3>
            <p class="text-gray-600">{{ stat.description }}</p>
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
          <h2 class="text-4xl md:text-5xl font-bold mb-6">شارك في مشاريعنا</h2>
          <p class="text-xl mb-8 leading-relaxed opacity-90">
            يمكنك المساهمة في دعم مشاريعنا أو التطوع للمشاركة في تنفيذها
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn-secondary bg-white text-primary-green hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center group shadow-2xl">
              <svg class="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              دعم المشاريع
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
import { ref, computed, defineComponent } from 'vue'

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
  name: 'ProjectsPage',
  components: {
    EducationIcon,
    HealthIcon,
    AgricultureIcon,
    WomenIcon,
    ProjectsIcon,
    BeneficiariesIcon,
    VolunteersIcon,
    CommunitiesIcon
  },
  setup() {
    const activeFilter = ref('all')
    
    const filters = [
      { id: 'all', name: 'جميع المشاريع' },
      { id: 'education', name: 'التعليم' },
      { id: 'health', name: 'الصحة' },
      { id: 'agriculture', name: 'الزراعة' },
      { id: 'women', name: 'تمكين المرأة' },
      { id: 'digital-awareness', name: 'التوعية الرقمية' },
      { id: 'completed', name: 'مكتملة' },
      { id: 'ongoing', name: 'قيد التنفيذ' }
    ]
    
    const projects = [
      {
        id: 1,
        title: 'مشروع تعليم القرية',
        description: 'بناء وتجهيز مدرسة متكاملة لخدمة 500 طالب في المنطقة الشمالية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        category: 'التعليم',
        location: 'محافظة تعز',
        duration: '12 شهر',
        beneficiaries: '500 طالب',
        progress: 91,
        type: 'education'
      },
      {
        id: 2,
        title: 'مشروع المياه النظيفة',
        description: 'توفير مصادر مياه نظيفة لـ 10 قرى في المناطق النائية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'مكتمل',
        category: 'الصحة',
        location: 'محافظة الحديدة',
        duration: '8 أشهر',
        beneficiaries: '2,000 شخص',
        progress: 100,
        type: 'health'
      },
      {
        id: 3,
        title: 'الزراعة المستدامة',
        description: 'تدريب المزارعين على تقنيات الزراعة المستدامة وحماية المحاصيل',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        category: 'الزراعة',
        location: 'محافظة إب',
        duration: '18 شهر',
        beneficiaries: '300 مزارع',
        progress: 42,
        type: 'agriculture'
      },
      {
        id: 4,
        title: 'تمكين المرأة الريفية',
        description: 'برنامج تدريبي لتمكين المرأة في المجال الاقتصادي والاجتماعي',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'مكتمل',
        category: 'تمكين المرأة',
        location: 'محافظة تعز',
        duration: '6 أشهر',
        beneficiaries: '150 امرأة',
        progress: 100,
        type: 'women'
      },
      {
        id: 5,
        title: 'مركز صحي متكامل',
        description: 'إنشاء مركز صحي يقدم خدمات صحية شاملة للمجتمع المحلي',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        category: 'الصحة',
        location: 'محافظة الضالع',
        duration: '15 شهر',
        beneficiaries: '1,500 شخص',
        progress: 67,
        type: 'health'
      },
      {
        id: 6,
        title: 'مدرسة الأمل',
        description: 'بناء مدرسة جديدة تستوعب 300 طالب في قرية نائية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        category: 'التعليم',
        location: 'محافظة البيضاء',
        duration: '10 أشهر',
        beneficiaries: '300 طالب',
        progress: 78,
        type: 'education'
      },
      {
        id: 7,
        title: 'التوعية الرقمية',
        description: 'برنامج شامل لتعليم المجتمع على الاستخدام الآمن للإنترنت والتقنيات الرقمية',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        category: 'التوعية الرقمية',
        location: 'محافظة تعز',
        duration: '8 أشهر',
        beneficiaries: '200 شخص',
        progress: 65,
        type: 'digital-awareness'
      }
    ]
    
    const categories = [
      {
        id: 'education',
        title: 'التعليم',
        description: 'تطوير التعليم وبناء المدارس في المناطق الريفية',
        projectsCount: 25,
        icon: 'EducationIcon'
      },
      {
        id: 'health',
        title: 'الصحة',
        description: 'تحسين الخدمات الصحية والوقائية',
        projectsCount: 18,
        icon: 'HealthIcon'
      },
      {
        id: 'agriculture',
        title: 'الزراعة',
        description: 'تطوير الزراعة المستدامة والأمن الغذائي',
        projectsCount: 22,
        icon: 'AgricultureIcon'
      },
      {
        id: 'women',
        title: 'تمكين المرأة',
        description: 'تعزيز دور المرأة في التنمية المجتمعية',
        projectsCount: 15,
        icon: 'WomenIcon'
      },
      {
        id: 'digital-awareness',
        title: 'التوعية الرقمية',
        description: 'تعليم المجتمع على الاستخدام الآمن للتقنيات الرقمية',
        projectsCount: 8,
        icon: 'DigitalIcon'
      }
    ]
    
    const projectStats = [
      {
        id: 1,
        number: '150+',
        title: 'مشروع مكتمل',
        description: 'مشاريع تنموية شاملة',
        icon: 'ProjectsIcon'
      },
      {
        id: 2,
        number: '25,000+',
        title: 'مستفيد',
        description: 'أفراد استفادوا من مشاريعنا',
        icon: 'BeneficiariesIcon'
      },
      {
        id: 3,
        number: '500+',
        title: 'متطوع',
        description: 'متطوعين نشطين',
        icon: 'VolunteersIcon'
      },
      {
        id: 4,
        number: '50+',
        title: 'مجتمع',
        description: 'مجتمع ريفي مستفيد',
        icon: 'CommunitiesIcon'
      }
    ]
    
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return projects
      } else if (activeFilter.value === 'completed') {
        return projects.filter(project => project.status === 'مكتمل')
      } else if (activeFilter.value === 'ongoing') {
        return projects.filter(project => project.status === 'قيد التنفيذ')
      } else {
        return projects.filter(project => project.type === activeFilter.value)
      }
    })
    
    const getStatusClass = (status) => {
      return status === 'مكتمل' ? 'bg-primary-green' : 'bg-accent-yellow'
    }
    
    return {
      activeFilter,
      filters,
      projects,
      categories,
      projectStats,
      filteredProjects,
      getStatusClass
    }
  }
}
</script>

<style scoped>
.card-hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>
