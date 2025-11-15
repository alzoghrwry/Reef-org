/**
 * Newsletter Management Composable
 * Handles newsletter subscription functionality
 */

import { ref } from 'vue'
import { isValidEmail } from '@/utils/validation'
import { post } from '@/utils/http'

export function useNewsletter() {
  const newsletterEmail = ref('')
  const isSubmitting = ref(false)
  const submitError = ref('')
  const submitSuccess = ref(false)

  const subscribe = async () => {
    submitError.value = ''
    submitSuccess.value = false

    // Validate email
    if (!isValidEmail(newsletterEmail.value)) {
      submitError.value = 'يرجى إدخال بريد إلكتروني صحيح'
      return
    }

    isSubmitting.value = true

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, use this:
      // await post('/newsletter/subscribe', { email: newsletterEmail.value })

      // Reset form
      newsletterEmail.value = ''
      isSubmitting.value = false
      submitSuccess.value = true

      // Show success message
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)

    } catch (error) {
      isSubmitting.value = false
      submitError.value = 'حدث خطأ أثناء الاشتراك، يرجى المحاولة مرة أخرى'
      console.error('Newsletter subscription error:', error)
    }
  }

  return {
    newsletterEmail,
    isSubmitting,
    submitError,
    submitSuccess,
    subscribe
  }
}

