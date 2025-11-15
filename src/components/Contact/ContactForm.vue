<template>
  <div class="card-premium p-12 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-green/20 to-accent-yellow/20"></div>
      <div class="absolute top-10 right-10 w-20 h-20 border border-primary-green/30 rounded-full"></div>
      <div class="absolute bottom-10 left-10 w-16 h-16 border border-accent-yellow/30 rounded-full"></div>
    </div>
    
    <div class="relative z-10">
      <div class="text-center mb-12">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-green to-field-green rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-500 shadow-2xl">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-bold gradient-text mb-6">أرسل لنا رسالة</h2>
        <p class="text-xl text-dark leading-relaxed">نحن نستمع ونرد على جميع استفساراتك بسرعة ودقة</p>
      </div>
      
      <form @submit.prevent="submitForm" class="space-y-8">
        <!-- Name Field -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              الاسم الكامل
            </span>
          </label>
          <div class="relative">
            <input 
              v-model="form.fullName"
              type="text" 
              required
              class="w-full px-6 py-4 pr-10 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
              placeholder="أدخل اسمك الكامل"
              @focus="animateField($event)"
              @blur="resetField($event)"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Email Field -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              البريد الإلكتروني
            </span>
          </label>
          <div class="relative">
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full px-6 py-4 pr-10 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
              placeholder="example@gmail.com"
              @focus="animateField($event)"
              @blur="resetField($event)"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Phone Field -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              رقم الهاتف
            </span>
          </label>
          <div class="relative">
            <input 
              v-model="form.phone"
              type="tel" 
              class="w-full px-6 py-4 pl-75 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
              placeholder="+967 777 123 456"
              @focus="animateField($event)"
              @blur="resetField($event)"
             
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Inquiry Type -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              نوع الاستفسار
            </span>
          </label>
          <div class="relative">
            <select 
              v-model="form.inquiryType"
              required
              class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
              @focus="animateField($event)"
              @blur="resetField($event)"
            >
              <option value="">اختر نوع الاستفسار</option>
              <option value="general">استفسار عام</option>
              <option value="project">مشروع جديد</option>
              <option value="partnership">شراكة</option>
              <option value="volunteer">التطوع</option>
              <option value="donation">التبرع</option>
              <option value="media">إعلامي</option>
              <option value="other">أخرى</option>
            </select>
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg class="w-6 h-6 text-gray-400 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Subject Field -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              الموضوع
            </span>
          </label>
          <div class="relative">
            <input 
              v-model="form.subject"
              type="text" 
              required
              class="w-full px-6 py-4 pr-10 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
              placeholder="موضوع الرسالة"
              @focus="animateField($event)"
              @blur="resetField($event)"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="w-6 h-6 text-gray-400 mt-1 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Message Field -->
        <div class="group">
          <label class="block text-lg font-semibold text-dark mb-3 transition-colors duration-300 group-focus-within:text-primary-green">
            <span class="flex items-center">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              الرسالة
            </span>
          </label>
          <div class="relative">
            <textarea 
              v-model="form.message"
              required
              rows="6"
              class="w-full px-6 py-4 pr-10 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-all duration-300 resize-none text-lg group-hover:shadow-lg bg-white/80 backdrop-blur-sm"
              placeholder="اكتب رسالتك هنا..."
              @focus="animateField($event)"
              @blur="resetField($event)"
            ></textarea>
            <div class="absolute top-4 right-4">
              <svg class="w-6 h-6 text-gray-400 mt-1 transition-colors duration-300 group-focus-within:text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Terms Agreement -->
        <div class="flex items-start group">
          <div class="relative">
            <input 
              v-model="form.agreeToTerms"
              type="checkbox" 
              required
              class="w-6 h-6 text-primary-green border-gray-300 rounded focus:ring-primary-green focus:ring-2 transition-all duration-300"
            >
          </div>
          <label class="mr-4 text-lg text-dark leading-relaxed cursor-pointer group-hover:text-primary-green transition-colors duration-300">
            أوافق على 
            <a href="#" class="text-primary-green hover:underline font-semibold transition-all duration-300">شروط الاستخدام</a>
            و
            <a href="#" class="text-primary-green hover:underline font-semibold transition-all duration-300">سياسة الخصوصية</a>
          </label>
        </div>
        
        <!-- Submit Button -->
        <div class="pt-4">
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary text-xl py-5 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span v-if="isSubmitting" class="flex items-center justify-center relative z-10">
              <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري الإرسال...
            </span>
            <span v-else class="flex items-center justify-center relative z-10">
              <svg class="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              إرسال الرسالة
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactForm',
  setup() {
    const isSubmitting = ref(false)
    const form = ref({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: '',
      subject: '',
      message: '',
      agreeToTerms: false
    })
    
    const animateField = (event) => {
      const field = event.target
      if (field && field.parentElement) {
        field.parentElement.classList.add('animate-pulse')
        setTimeout(() => {
          field.parentElement.classList.remove('animate-pulse')
        }, 200)
      }
    }
    
    const resetField = (event) => {
      const field = event.target
      if (field && field.parentElement) {
        field.parentElement.classList.remove('animate-pulse')
      }
    }
    
    const submitForm = async () => {
      isSubmitting.value = true
      await new Promise(resolve => setTimeout(resolve, 2500))
      form.value = {
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        agreeToTerms: false
      }
      isSubmitting.value = false

      const successMessage = document.createElement('div')
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300'
      successMessage.innerHTML = `
        <div class="flex items-center">
          <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      `
      document.body.appendChild(successMessage)
      setTimeout(() => {
        successMessage.classList.remove('translate-x-full')
      }, 100)
      setTimeout(() => {
        successMessage.classList.add('translate-x-full')
        setTimeout(() => {
          if (document.body.contains(successMessage)) document.body.removeChild(successMessage)
        }, 300)
      }, 5000)
    }
    
    return {
      form,
      isSubmitting,
      submitForm,
      animateField,
      resetField
    }
  }
}
</script>
