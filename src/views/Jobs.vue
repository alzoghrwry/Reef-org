<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-green to-warm-brown text-white py-20">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            الوظائف الشاغرة
          </h1>
          <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
            انضم إلى فريقنا وكن جزءاً من رحلة التنمية الإنسانية في المناطق الريفية
          </p>
        </div>
      </div>
    </section>

    <!-- Job Search and Filter -->
    <section class="py-8 bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Search Bar -->
          <div class="relative mb-6">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="ابحث في الوظائف..."
              class="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none text-lg"
            >
            <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              v-for="category in jobCategories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              class="px-6 py-3 rounded-full font-medium transition-all duration-300"
              :class="selectedCategory === category.id 
                ? 'bg-primary-green text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Jobs Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="job in filteredJobs" 
            :key="job.id"
            class="card group hover:shadow-2xl transition-all duration-300"
          >
            <div class="p-8">
              <!-- Job Header -->
              <div class="flex items-start justify-between mb-6">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-medium">
                      {{ getCategoryName(job.categoryId) }}
                    </span>
                    <span 
                      class="px-2 py-1 rounded-full text-xs font-medium"
                      :class="job.type === 'دوام كامل' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
                    >
                      {{ job.type }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-green transition-colors">
                    {{ job.title }}
                  </h3>
                  <p class="text-gray-600 mb-4">{{ job.location }}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">{{ formatDate(job.postedDate) }}</p>
                  <p class="text-sm text-gray-500">ينتهي: {{ formatDate(job.deadline) }}</p>
                </div>
              </div>
              
              <!-- Job Description -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-800 mb-2">وصف الوظيفة:</h4>
                <p class="text-gray-600 leading-relaxed">{{ job.description }}</p>
              </div>
              
              <!-- Requirements -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-800 mb-2">المتطلبات:</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1">
                  <li v-for="requirement in job.requirements" :key="requirement">{{ requirement }}</li>
                </ul>
              </div>
              
              <!-- Benefits -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-800 mb-2">المميزات:</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="benefit in job.benefits" 
                    :key="benefit"
                    class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {{ benefit }}
                  </span>
                </div>
              </div>
              
              <!-- Salary and Experience -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h5 class="font-semibold text-gray-800 mb-1">الراتب</h5>
                  <p class="text-gray-600">{{ job.salary }}</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h5 class="font-semibold text-gray-800 mb-1">الخبرة المطلوبة</h5>
                  <p class="text-gray-600">{{ job.experience }}</p>
                </div>
              </div>
              
              <!-- Apply Button -->
              <button 
                @click="openApplicationModal(job)"
                class="w-full btn-secondary group-hover:shadow-lg transition-all duration-300"
              >
                التقدم للوظيفة
              </button>
            </div>
          </div>
        </div>
        
        <!-- No Results -->
        <div v-if="filteredJobs.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">لا توجد وظائف متاحة</h3>
          <p class="text-gray-500">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
        </div>
      </div>
    </section>

    <!-- Why Work With Us Section -->
    <section class="py-16 bg-gradient-to-r from-primary-green/10 to-accent-yellow/10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">لماذا تعمل معنا؟</h2>
            <p class="text-lg text-gray-600">انضم إلى فريق ملتزم بإحداث فرق حقيقي في حياة الناس</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-reef-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">رسالة نبيلة</h3>
              <p class="text-gray-600">اعمل في مجال التنمية الإنسانية وساهم في بناء مجتمعات أفضل</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-reef-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">فريق متنوع</h3>
              <p class="text-gray-600">انضم إلى فريق متنوع من المهنيين الملتزمين والمبدعين</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-reef-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">تطوير مهني</h3>
              <p class="text-gray-600">فرص للتعلم والنمو المهني في بيئة داعمة ومحفزة</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div 
      v-if="showApplicationModal" 
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      @click="closeApplicationModal"
    >
      <div 
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-800">التقدم للوظيفة</h2>
            <button 
              @click="closeApplicationModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div v-if="selectedJob" class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">{{ selectedJob.title }}</h3>
            <p class="text-sm text-gray-600">{{ selectedJob.location }}</p>
          </div>
          
          <form @submit.prevent="submitApplication" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                <input 
                  v-model="applicationForm.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الأول"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
                <input 
                  v-model="applicationForm.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                  placeholder="أدخل اسم العائلة"
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <input 
                v-model="applicationForm.email"
                type="email" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                placeholder="example@email.com"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
              <input 
                v-model="applicationForm.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                placeholder="+967 777 123 456"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">سنوات الخبرة</label>
              <select 
                v-model="applicationForm.experience"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
              >
                <option value="">اختر سنوات الخبرة</option>
                <option value="0-1">0-1 سنة</option>
                <option value="2-3">2-3 سنوات</option>
                <option value="4-5">4-5 سنوات</option>
                <option value="6-10">6-10 سنوات</option>
                <option value="10+">أكثر من 10 سنوات</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">السيرة الذاتية</label>
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
              >
              <p class="text-sm text-gray-500 mt-1">يُفضل ملف PDF أو Word</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">رسالة التغطية</label>
              <textarea 
                v-model="applicationForm.coverLetter"
                rows="4"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none transition-colors resize-none"
                placeholder="اكتب رسالة تغطية مختصرة..."
              ></textarea>
            </div>
            
            <div class="flex items-center">
              <input 
                v-model="applicationForm.agreeToTerms"
                type="checkbox" 
                required
                class="w-4 h-4 text-reef-brown-600 border-gray-300 rounded focus:ring-reef-brown-500"
              >
              <label class="mr-3 text-sm text-gray-600">
                أوافق على 
                <a href="#" class="text-reef-brown-600 hover:underline">شروط التقدم</a>
                و
                <a href="#" class="text-reef-brown-600 hover:underline">سياسة الخصوصية</a>
              </label>
            </div>
            
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">جاري الإرسال...</span>
              <span v-else>إرسال الطلب</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Jobs',
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('all')
    const showApplicationModal = ref(false)
    const selectedJob = ref(null)
    const isSubmitting = ref(false)
    
    const applicationForm = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      agreeToTerms: false
    })
    
    const jobCategories = [
      { id: 'all', name: 'الكل' },
      { id: 'management', name: 'الإدارة' },
      { id: 'programming', name: 'البرمجة والتقنية' },
      { id: 'field-work', name: 'العمل الميداني' },
      { id: 'education', name: 'التعليم' },
      { id: 'health', name: 'الصحة' },
      { id: 'finance', name: 'المالية والمحاسبة' }
    ]
    
    const jobs = [
      {
        id: 1,
        title: 'مدير مشروع التنمية المجتمعية',
        categoryId: 'management',
        type: 'دوام كامل',
        location: 'مديرية المعافر، تعز',
        salary: '800,000 - 1,200,000 ريال يمني',
        experience: '5-7 سنوات',
        postedDate: '2024-01-15',
        deadline: '2024-02-15',
        description: 'إدارة وتنفيذ مشاريع التنمية المجتمعية في المناطق الريفية، مع التركيز على تمكين المرأة والشباب.',
        requirements: [
          'شهادة جامعية في التنمية أو الإدارة',
          'خبرة لا تقل عن 5 سنوات في إدارة المشاريع',
          'مهارات قيادية ممتازة',
          'إجادة اللغة الإنجليزية',
          'القدرة على العمل في المناطق الريفية'
        ],
        benefits: ['تأمين صحي', 'بدل سكن', 'بدل نقل', 'تدريب مستمر']
      },
      {
        id: 2,
        title: 'مطور ويب متخصص في الأنظمة الإدارية',
        categoryId: 'programming',
        type: 'دوام كامل',
        location: 'عن بُعد / تعز',
        salary: '600,000 - 900,000 ريال يمني',
        experience: '3-5 سنوات',
        postedDate: '2024-01-12',
        deadline: '2024-02-12',
        description: 'تطوير وصيانة الأنظمة الإدارية للمؤسسة، مع التركيز على أنظمة إدارة المشاريع والمتابعة.',
        requirements: [
          'شهادة جامعية في علوم الحاسوب أو ما يعادلها',
          'خبرة في تطوير تطبيقات الويب',
          'إجادة PHP, JavaScript, MySQL',
          'خبرة في Laravel أو Vue.js',
          'مهارات في إدارة قواعد البيانات'
        ],
        benefits: ['عمل مرن', 'تأمين صحي', 'أجهزة عمل', 'تدريب تقني']
      },
      {
        id: 3,
        title: 'منسق العمل الميداني',
        categoryId: 'field-work',
        type: 'دوام كامل',
        location: 'مديرية الشمايتين، تعز',
        salary: '500,000 - 700,000 ريال يمني',
        experience: '2-4 سنوات',
        postedDate: '2024-01-10',
        deadline: '2024-02-10',
        description: 'تنسيق الأنشطة الميدانية وتنفيذ البرامج التنموية في المجتمعات المحلية.',
        requirements: [
          'شهادة جامعية في التنمية أو العلوم الاجتماعية',
          'خبرة في العمل الميداني',
          'مهارات تواصل ممتازة',
          'القدرة على العمل تحت الضغط',
          'إجادة استخدام الحاسوب'
        ],
        benefits: ['بدل ميداني', 'تأمين صحي', 'بدل نقل', 'تدريب مهني']
      },
      {
        id: 4,
        title: 'مدرس برامج محو الأمية',
        categoryId: 'education',
        type: 'دوام جزئي',
        location: 'مديرية المظفر، تعز',
        salary: '300,000 - 400,000 ريال يمني',
        experience: '1-3 سنوات',
        postedDate: '2024-01-08',
        deadline: '2024-02-08',
        description: 'تدريس برامج محو الأمية للنساء والشباب في المناطق الريفية.',
        requirements: [
          'شهادة جامعية في التربية أو ما يعادلها',
          'خبرة في التدريس',
          'صبر ومهارات تعليمية',
          'القدرة على العمل مع فئات عمرية مختلفة',
          'إجادة اللغة العربية'
        ],
        benefits: ['بدل نقل', 'مواد تعليمية', 'تدريب تربوي']
      },
      {
        id: 5,
        title: 'ممرض صحة مجتمعية',
        categoryId: 'health',
        type: 'دوام كامل',
        location: 'مديرية القاهرة، تعز',
        salary: '450,000 - 600,000 ريال يمني',
        experience: '2-4 سنوات',
        postedDate: '2024-01-05',
        deadline: '2024-02-05',
        description: 'تقديم خدمات الرعاية الصحية الأساسية والتوعية الصحية في المجتمعات الريفية.',
        requirements: [
          'شهادة تمريض معترف بها',
          'خبرة في الرعاية الصحية المجتمعية',
          'مهارات في الإسعافات الأولية',
          'القدرة على العمل في المناطق النائية',
          'مهارات تواصل ممتازة'
        ],
        benefits: ['تأمين صحي', 'بدل خطر', 'بدل نقل', 'تدريب طبي']
      },
      {
        id: 6,
        title: 'محاسب مالي',
        categoryId: 'finance',
        type: 'دوام كامل',
        location: 'مقر المؤسسة، تعز',
        salary: '400,000 - 550,000 ريال يمني',
        experience: '2-3 سنوات',
        postedDate: '2024-01-03',
        deadline: '2024-02-03',
        description: 'إدارة الحسابات المالية للمؤسسة وإعداد التقارير المالية الدورية.',
        requirements: [
          'شهادة جامعية في المحاسبة أو المالية',
          'خبرة في المحاسبة المالية',
          'إجادة برامج المحاسبة',
          'مهارات في إعداد التقارير',
          'دقة واهتمام بالتفاصيل'
        ],
        benefits: ['تأمين صحي', 'بدل مواصلات', 'تدريب محاسبي', 'بيئة عمل مريحة']
      }
    ]
    
    const filteredJobs = computed(() => {
      let filtered = jobs
      
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(job => job.categoryId === selectedCategory.value)
      }
      
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(job => 
          job.title.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query)
        )
      }
      
      return filtered
    })
    
    const getCategoryName = (categoryId) => {
      const category = jobCategories.find(cat => cat.id === categoryId)
      return category ? category.name : ''
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    const openApplicationModal = (job) => {
      selectedJob.value = job
      showApplicationModal.value = true
    }
    
    const closeApplicationModal = () => {
      showApplicationModal.value = false
      selectedJob.value = null
      applicationForm.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        agreeToTerms: false
      }
    }
    
    const submitApplication = async () => {
      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      isSubmitting.value = false
      closeApplicationModal()
      
      // Show success message
      alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')
    }
    
    return {
      searchQuery,
      selectedCategory,
      showApplicationModal,
      selectedJob,
      isSubmitting,
      applicationForm,
      jobCategories,
      jobs,
      filteredJobs,
      getCategoryName,
      formatDate,
      openApplicationModal,
      closeApplicationModal,
      submitApplication
    }
  }
}
</script>
