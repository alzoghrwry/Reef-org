<template>
  <div>
    <h4 class="text-lg font-bold mb-4 border-b-2 border-gold-500 pb-2">النشرة الإخبارية</h4>
    <p class="text-sm text-brown-200 mb-4">اشترك في نشرتنا الإخبارية لتصلك آخر الأخبار والمشاريع</p>
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <input 
        v-model="email"
        type="email" 
        placeholder="البريد الإلكتروني"
        class="w-full px-4 py-2 bg-brown-700 text-white rounded-lg border border-brown-600 focus:border-gold-500 focus:outline-none"
        required
      >
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-gradient-to-r from-gold-500 to-gold-400 text-white py-2 px-4 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-300 hover:text-brown-900 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <span v-if="isSubmitting">جاري الاشتراك...</span>
        <span v-else>اشتراك</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['subscribe'])

const email = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!email.value) return
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  emit('subscribe', email.value)
  
  email.value = ''
  isSubmitting.value = false
  
  alert('تم الاشتراك في النشرة البريدية بنجاح! شكراً لك.')
}
</script>
