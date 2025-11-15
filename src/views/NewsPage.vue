<template>
  <!-- <div class="min-h-screen">
   
    <section class="relative py-24 bg-gradient-to-br from-primary-green via-accent-yellow to-warm-brown overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">آخر الأخبار</h1>
          <p class="text-xl md:text-2xl leading-relaxed opacity-90">
            ابق على اطلاع بأحدث التطورات، قصص النجاح، والفعاليات من مؤسسة ريف
          </p>
        </div>
      </div> -->
    
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-green to-reef-green-600 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
           آخر الأخبار
          </h1>
          <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
            ابق على اطلاع بأحدث التطورات، قصص النجاح، والفعاليات من مؤسسة ريف
          </p>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="newsItem in news" :key="newsItem.id" 
               class="card card-hover-effect overflow-hidden">
            <img :src="newsItem.image" :alt="newsItem.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ newsItem.date }}
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ newsItem.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ newsItem.summary }}</p>
              <button class="text-primary-green font-semibold hover:text-primary-green transition-colors">
                اقرأ المزيد
                <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <nav class="flex items-center space-x-2 space-x-reverse">
            <button class="px-4 py-2 rounded-lg text-gray-600 hover:bg-primary-green hover:text-white transition-colors duration-300">السابق</button>
            <button class="px-4 py-2 rounded-lg bg-primary-green text-white">1</button>
            <button class="px-4 py-2 rounded-lg text-gray-600 hover:bg-primary-green hover:text-white transition-colors duration-300">2</button>
            <button class="px-4 py-2 rounded-lg text-gray-600 hover:bg-primary-green hover:text-white transition-colors duration-300">3</button>
            <button class="px-4 py-2 rounded-lg text-gray-600 hover:bg-primary-green hover:text-white transition-colors duration-300">التالي</button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NewsPage',
  setup() {
    const news = ref([
      {
        id: 1,
        title: 'افتتاح مشروع مياه جديد في قرية نائية',
        date: '15 ديسمبر 2024',
        summary: 'تم بحمد الله افتتاح مشروع مياه الشرب النظيف في قرية الأمل، مما سيوفر المياه لأكثر من 500 أسرة.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        title: 'حملة توعية صحية شاملة في المناطق الريفية',
        date: '12 ديسمبر 2024',
        summary: 'أطلقت مؤسسة ريف حملة توعية صحية واسعة النطاق تستهدف الأمراض الشائعة وطرق الوقاية منها.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        title: 'برنامج تدريب مهني للشباب لتعزيز فرص العمل',
        date: '10 ديسمبر 2024',
        summary: 'بدأ برنامج تدريب مهني مكثف يستفيد منه عشرات الشباب في مجالات مختلفة لتمكينهم اقتصادياً.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 4,
        title: 'توزيع سلال غذائية على الأسر الأكثر احتياجاً',
        date: '8 ديسمبر 2024',
        summary: 'في إطار جهودها الإغاثية، قامت المؤسسة بتوزيع مئات السلال الغذائية على الأسر المتضررة.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 5,
        title: 'ورش عمل لتعليم الزراعة المستدامة',
        date: '5 ديسمبر 2024',
        summary: 'نظمت المؤسسة ورش عمل متخصصة لتعليم المزارعين أحدث تقنيات الزراعة المستدامة لزيادة الإنتاج.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 6,
        title: 'بناء فصول دراسية جديدة لدعم التعليم',
        date: '3 ديسمبر 2024',
        summary: 'تم الانتهاء من بناء ثلاثة فصول دراسية جديدة في مدرسة الأمل الابتدائية لتقليل الاكتظاظ.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 7,
        title: 'إطلاق برنامج التوعية الرقمية للمجتمعات الريفية',
        date: '1 ديسمبر 2024',
        summary: 'أطلقت مؤسسة ريف برنامجاً شاملاً للتوعية الرقمية يستهدف تعليم المجتمع على الاستخدام الآمن للإنترنت والتقنيات الرقمية.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ])

    return {
      news
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
