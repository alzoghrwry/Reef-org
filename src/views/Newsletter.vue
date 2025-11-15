<template>
  <div class="min-h-screen bg-primary">
    <!-- Hero Section -->
    <section class="relative bg-hero text-white py-24 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full floating-animation"></div>
        <div class="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full floating-animation" style="animation-delay: -2s;"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full floating-animation" style="animation-delay: -4s;"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-5xl mx-auto">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
            <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="text-lg font-medium">النشرة البريدية الرسمية</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span class="gradient-text bg-gradient-to-r from-white to-accent-yellow bg-clip-text text-transparent">
              النشرة البريدية
            </span>
          </h1>
          <p class="text-2xl md:text-3xl opacity-95 leading-relaxed mb-8">
            ابق على اطلاع بأحدث أخبارنا ومشاريعنا وبرامجنا التنموية
          </p>
          
          <!-- Quick Subscribe Form -->
          <div class="max-w-2xl mx-auto">
            <div class="glass-effect rounded-2xl p-8">
              <h3 class="text-2xl font-bold mb-6 text-dark">اشترك الآن</h3>
              <form @submit.prevent="quickSubscribe" class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                  <input 
                    v-model="quickEmail"
                    type="email" 
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                    class="w-full px-6 py-4 rounded-xl border-2 border-white/30 focus:border-white focus:outline-none bg-white/20 backdrop-blur-sm text-dark placeholder-gray-600 text-lg"
                  >
                </div>
                <button 
                  type="submit"
                  :disabled="isQuickSubmitting"
                  class="btn-secondary px-8 py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isQuickSubmitting">جاري الاشتراك...</span>
                  <span v-else class="flex items-center">
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    اشترك الآن
                  </span>
                </button>
              </form>
              <p class="text-sm text-gray-600 mt-4 text-center">
                انضم إلى أكثر من 2,500 مشترك يحصلون على آخر الأخبار
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Content -->
    <section class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Benefits Section -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <svg class="w-6 h-6 ml-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-lg font-medium text-dark">لماذا تشترك في نشرتنا؟</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-dark mb-12 gradient-text">
              فوائد الاشتراك في نشرتنا
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-dark mb-4">أخبار فورية</h3>
                <p class="text-gray-600 text-lg leading-relaxed">احصل على آخر الأخبار والمستجدات فور حدوثها مع تحليلات عميقة</p>
              </div>
              
              <div class="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
                <div class="w-20 h-20 bg-gradient-to-br from-accent-yellow to-reef-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-dark mb-4">تقارير مفصلة</h3>
                <p class="text-gray-600 text-lg leading-relaxed">اطلع على تقارير مفصلة عن مشاريعنا وإنجازاتنا مع البيانات والإحصائيات</p>
              </div>
              
              <div class="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
                <div class="w-20 h-20 bg-gradient-to-br from-warm-brown to-reef-brown-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-dark mb-4">فرص المشاركة</h3>
                <p class="text-gray-600 text-lg leading-relaxed">اكتشف فرص التطوع والمشاركة في برامجنا مع أولوية في التسجيل</p>
              </div>
            </div>
          </div>

          <!-- Advanced Subscription Form -->
          <div class="card-premium p-12 mb-16">
            <div class="text-center mb-12">
              <div class="inline-flex items-center bg-gradient-to-r from-[var(--primary-green)]/10 to-[var(--accent-yellow)]/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
                <svg class="w-8 h-8 ml-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-xl font-bold text-dark">نموذج الاشتراك المتقدم</span>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold text-dark mb-6 gradient-text">
                اشترك في نشرتنا البريدية
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                احصل على آخر الأخبار والمستجدات مباشرة في بريدك الإلكتروني مع تخصيص المحتوى حسب اهتماماتك
              </p>
            </div>
            
            <form @submit.prevent="submitSubscription" class="max-w-4xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="group">
                  <label class="block text-lg font-semibold text-dark mb-3">الاسم الأول</label>
                  <div class="relative">
                    <input 
                      v-model="subscriptionForm.firstName"
                      type="text" 
                      required
                      class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg"
                      placeholder="أدخل اسمك الأول"
                    >
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <label class="block text-lg font-semibold text-dark mb-3">اسم العائلة</label>
                  <div class="relative">
                    <input 
                      v-model="subscriptionForm.lastName"
                      type="text" 
                      required
                      class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg"
                      placeholder="أدخل اسم العائلة"
                    >
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mb-8">
                <label class="block text-lg font-semibold text-dark mb-3">البريد الإلكتروني</label>
                <div class="relative">
                  <input 
                    v-model="subscriptionForm.email"
                    type="email" 
                    required
                    class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-green)] focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg"
                    placeholder="example@email.com"
                  >
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف (اختياري)</label>
                <input 
                  v-model="subscriptionForm.phone"
                  type="tel" 
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-reef-green-500 focus:outline-none transition-colors"
                  placeholder="+966 50 123 4567"
                >
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">مجالات الاهتمام</label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <label v-for="interest in interestAreas" :key="interest.id" class="flex items-center">
                    <input 
                      v-model="subscriptionForm.interests"
                      :value="interest.id"
                      type="checkbox" 
                      class="w-4 h-4 text-reef-green-600 border-gray-300 rounded focus:ring-reef-green-500"
                    >
                    <span class="mr-3 text-sm text-gray-700">{{ interest.name }}</span>
                  </label>
                </div>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">تكرار الإرسال</label>
                <select 
                  v-model="subscriptionForm.frequency"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-reef-green-500 focus:outline-none transition-colors"
                >
                  <option value="">اختر تكرار الإرسال</option>
                  <option value="weekly">أسبوعياً</option>
                  <option value="monthly">شهرياً</option>
                  <option value="quarterly">ربع سنوي</option>
                  <option value="as-needed">حسب الحاجة</option>
                </select>
              </div>
              
              <div class="mb-8">
                <div class="flex items-start">
                  <input 
                    v-model="subscriptionForm.agreeToTerms"
                    type="checkbox" 
                    required
                    class="w-4 h-4 text-reef-green-600 border-gray-300 rounded focus:ring-reef-green-500 mt-1"
                  >
                  <label class="mr-3 text-sm text-gray-600 leading-relaxed">
                    أوافق على 
                    <a href="#" class="text-reef-green-600 hover:underline">شروط الاستخدام</a>
                    و
                    <a href="#" class="text-reef-green-600 hover:underline">سياسة الخصوصية</a>
                    وأوافق على تلقي الرسائل الإلكترونية من مؤسسة ريف
                  </label>
                </div>
              </div>
              
              <div class="text-center">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary px-12 py-5 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري الاشتراك...
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    اشترك الآن مجاناً
                  </span>
                </button>
                <p class="text-sm text-gray-500 mt-4">
                  🔒 نحن نحترم خصوصيتك ولن نشارك معلوماتك مع أي طرف ثالث
                </p>
              </div>
            </form>
          </div>

          <!-- Newsletter Archive -->
          <div class="card-premium p-12">
            <div class="text-center mb-12">
              <div class="inline-flex items-center bg-gradient-to-r from-[var(--accent-yellow)]/10 to-[var(--warm-brown)]/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
                <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span class="text-xl font-bold text-dark">أرشيف النشرات</span>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold text-dark mb-6 gradient-text">
                أرشيف النشرات السابقة
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                تصفح النشرات السابقة واطلع على أهم الأخبار والإنجازات
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="newsletter in newsletterArchive" 
                :key="newsletter.id"
                class="card group hover:scale-105 transition-all duration-300 p-8"
              >
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-dark group-hover:text-primary transition-colors">{{ newsletter.title }}</h3>
                    <p class="text-sm text-gray-500 font-medium">{{ formatDate(newsletter.date) }}</p>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-6">{{ newsletter.description }}</p>
                <button class="w-full btn-secondary group-hover:shadow-lg transition-all duration-300">
                  <span class="flex items-center justify-center">
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    عرض النشرة
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Newsletter',
  setup() {
    const isSubmitting = ref(false)
    const isQuickSubmitting = ref(false)
    const quickEmail = ref('')
    const subscriptionForm = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: [],
      frequency: '',
      agreeToTerms: false
    })
    
    const interestAreas = [
      { id: 'projects', name: 'المشاريع التنموية' },
      { id: 'education', name: 'التعليم' },
      { id: 'health', name: 'الصحة' },
      { id: 'agriculture', name: 'الزراعة' },
      { id: 'environment', name: 'البيئة' },
      { id: 'volunteering', name: 'التطوع' },
      { id: 'events', name: 'الفعاليات' },
      { id: 'reports', name: 'التقارير' },
      { id: 'success-stories', name: 'قصص النجاح' }
    ]
    
    const newsletterArchive = [
      {
        id: 1,
        title: 'النشرة الشهرية - يناير 2024',
        description: 'تقرير شامل عن إنجازات شهر يناير ومشاريعنا الجديدة',
        date: '2024-01-31'
      },
      {
        id: 2,
        title: 'النشرة الأسبوعية - الأسبوع الرابع',
        description: 'أخبار الأسبوع الماضي ومستجدات مشاريعنا',
        date: '2024-01-28'
      },
      {
        id: 3,
        title: 'النشرة الشهرية - ديسمبر 2023',
        description: 'تقرير نهاية العام وإنجازات 2023',
        date: '2023-12-31'
      },
      {
        id: 4,
        title: 'النشرة الأسبوعية - الأسبوع الثالث',
        description: 'أخبار الأسبوع ومشاريع جديدة',
        date: '2024-01-21'
      },
      {
        id: 5,
        title: 'النشرة الشهرية - نوفمبر 2023',
        description: 'تقرير شهر نوفمبر ومبادرات جديدة',
        date: '2023-11-30'
      },
      {
        id: 6,
        title: 'النشرة الأسبوعية - الأسبوع الثاني',
        description: 'أخبار الأسبوع وفعاليات جديدة',
        date: '2024-01-14'
      }
    ]
    
    const quickSubscribe = async () => {
      if (!quickEmail.value) return
      
      isQuickSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form
      quickEmail.value = ''
      isQuickSubmitting.value = false
      
      // Show success message
      alert('تم الاشتراك في النشرة البريدية بنجاح! شكراً لك.')
    }
    
    const submitSubscription = async () => {
      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form
      subscriptionForm.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: [],
        frequency: '',
        agreeToTerms: false
      }
      
      isSubmitting.value = false
      
      // Show success message
      alert('تم الاشتراك في النشرة البريدية بنجاح! شكراً لك.')
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    return {
      isSubmitting,
      isQuickSubmitting,
      quickEmail,
      subscriptionForm,
      interestAreas,
      newsletterArchive,
      quickSubscribe,
      submitSubscription,
      formatDate
    }
  }
}
</script>

