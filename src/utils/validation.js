/**
 * Validation Utility Functions
 */

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Yemen format)
 */
export function isValidPhone(phone) {
  const phoneRegex = /^(\+967|967|0)?[0-9]{9}$/
  return phoneRegex.test(phone)
}

/**
 * Validate required field
 */
export function isRequired(value) {
  return value && value.trim().length > 0
}

/**
 * Validate URL
 */
export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate Yemen phone number format
 */
export function validateYemenPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.startsWith('967')) {
    return {
      valid: cleaned.length === 12,
      formatted: `+${cleaned}`,
      message: cleaned.length === 12 ? '' : 'رقم الهاتف يجب أن يكون 12 رقم'
    }
  }
  
  if (cleaned.startsWith('7') || cleaned.startsWith('3')) {
    return {
      valid: cleaned.length === 9,
      formatted: `+967${cleaned}`,
      message: cleaned.length === 9 ? '' : 'رقم الهاتف يجب أن يكون 9 أرقام'
    }
  }
  
  return {
    valid: false,
    formatted: '',
    message: 'رقم الهاتف غير صحيح'
  }
}

