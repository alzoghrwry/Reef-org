/**
 * Language Management Composable
 * Handles language switching functionality
 */

import { ref, computed } from 'vue'

const currentLanguage = ref('ar')

export function useLanguage() {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'ar' ? 'en' : 'ar'
    // يمكن إضافة منطق تغيير اللغة هنا
    // مثل إرسال event أو حفظ في localStorage
    localStorage.setItem('language', currentLanguage.value)
  }

  const setLanguage = (lang) => {
    if (['ar', 'en'].includes(lang)) {
      currentLanguage.value = lang
      localStorage.setItem('language', lang)
    }
  }

  const languageName = computed(() => {
    return currentLanguage.value === 'ar' ? 'عربي' : 'English'
  })

  // استعادة اللغة من localStorage عند التحميل
  const initLanguage = () => {
    const savedLang = localStorage.getItem('language')
    if (savedLang) {
      currentLanguage.value = savedLang
    }
  }

  return {
    currentLanguage,
    languageName,
    toggleLanguage,
    setLanguage,
    initLanguage
  }
}

