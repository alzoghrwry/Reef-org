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
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">الفعاليات والأنشطة</h1>
          <p class="text-xl md:text-2xl leading-relaxed opacity-90">
            تعرف على فعالياتنا القادمة والتجارب القيمة التي نقدمها في مختلف المجالات
          </p>
        </div>
      </div>
    </section>

    <!-- Events Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in events" :key="event.id" 
               class="card card-hover-effect overflow-hidden">
            <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ event.date }}
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">{{ event.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ event.summary }}</p>
              
              <!-- Event Details -->
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 ml-2 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {{ event.location }}
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 ml-2 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ event.time }}
                </div>
              </div>
              
              <button class="text-brown-700 font-semibold hover:text-brown-800 transition-colors">
                اشترك الآن
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
  name: 'Events',
  setup() {
    const events = ref([
      {
        id: 1,
        title: 'ملتقى التنمية المستدامة',
        date: '20 يناير 2025',
        time: '9:00 صباحاً - 4:00 مساءً',
        location: 'الرياض، مركز المؤتمرات',
        summary: 'ملتقى شامل يجمع الخبراء وأصحاب المصلحة لمناقشة أفضل ممارسات التنمية المستدامة في المجتمعات الريفية.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        title: 'يوم تطوعي لتنظيف الأحياء',
        date: '15 يناير 2025',
        time: '7:00 صباحاً - 12:00 ظهراً',
        location: 'الخبر، الواجهة البحرية',
        summary: 'يوم تطوعي مجاني مفتوح للجميع للمساهمة في تنظيف وتحسين بيئتنا المحلية مع جلسات توعية بيئية.',
        image: 'https://images.unsplash.com/photo-1525064788330-5ceb9f13587b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        title: 'ورشة عمل الزراعة العضوية',
        date: '10 يناير 2025',
        time: '3:00 مساءً - 6:00 مساءً',
        location: 'بريدة، المزرعة التعليمية',
        summary: 'ورشة عملية تعلم فيها أساليب الزراعة العضوية المستدامة وطرق إنتاج غذاء صحي بدون مواد كيميائية.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 4,
        title: 'معرض الفنون الريفية',
        date: '5 يناير 2025',
        time: '10:00 صباحاً - 8:00 مساءً',
        location: 'جدة، المركز الثقافي',
        summary: 'معرض يسلط الضوء على المواهب المحلية ويعرض أعمال الفن الريفي التقليدي والحديث مع فرصة للشراء.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 5,
        title: 'حملة التبرع بالدم',
        date: '28 ديسمبر 2024',
        time: '9:00 صباحاً - 5:00 مساءً',
        location: 'الدمام، مستشفى القطيف',
        summary: 'حملة تضامنية للتبرع بالدم مع توعية بأهمية التبرع وفوائده الصحية للمتبرع والمستقبل.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 6,
        title: 'دورة المهارات القيادية للشباب',
        date: '25 ديسمبر 2024',
        time: '5:00 مساءً - 8:00 مساءً',
        location: 'أبها، مركز التدريب',
        summary: 'دورة مكثفة لتطوير المهارات القيادية وصناعة القرار لدى الشباب مع تدريبات عملية وتطبيقية.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 7,
        title: 'مهرجان التراث الريفي',
        date: '20 ديسمبر 2024',
        time: '2:00 مساءً - 10:00 مساءً',
        location: 'الطائف، الساحة الرئيسية',
        summary: 'مهرجان ثقافي يعرض التراث الريفي الأصيل مع عروض فلكلورية، أطباق تقليدية، وحرف يدوية.',
        image: 'https://images.unsplash.com/photo-1573869906633-92e663803823?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      }
    ])

    return {
      events
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

