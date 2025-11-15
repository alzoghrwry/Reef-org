<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <HeroSection :slides="heroSlides" />

    <!-- About Section -->
    <AboutSection />

    <!-- Impact Stats Section -->
    <ImpactStatsSection :stats="impactStats" />

    <!-- Featured Projects Section -->
    <FeaturedProjectsSection :projects="featuredProjects" />

    <!-- Latest News Section -->
    <LatestNewsSection :news-items="latestNews" />

    <!-- Events Section -->
    <EventsSection :events="upcomingEvents" />

    <!-- Success Stories Section -->
    <SuccessStoriesSection :stories="successStories" />

    <!-- Partners Section -->
    <PartnersSection :partners="partners" />
  </div>
</template>

<script setup>
import { ref } from 'vue'


import reef1 from '@/assets/img/reef1.jpg'
import reef2 from '@/assets/img/reef2.jpg'
import reef3 from '@/assets/img/reef4.jpg'


import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ImpactStatsSection from '../components/home/ImpactStatsSection.vue'
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection.vue'
import LatestNewsSection from '../components/home/LatestNewsSection.vue'
import EventsSection from '../components/home/EventsSection.vue'
import SuccessStoriesSection from '../components/home/SuccessStoriesSection.vue'
import PartnersSection from '../components/home/PartnersSection.vue'

    
    const heroSlides = ref([
      {
        title: 'نحو مستقبل أفضل للمجتمعات الريفية',
        description: 'نسعى لتمكين المجتمعات الريفية في اليمن من خلال برامج التنمية المستدامة والتعليم والصحة',
    image: reef1
      },
      {
        title: 'تمكين المرأة والشباب',
        description: 'نؤمن بقوة المرأة والشباب في بناء مجتمعات قوية ومستقرة ومزدهرة',
    image: reef2
      },
      {
        title: 'الزراعة المستدامة والأمن الغذائي',
        description: 'نعمل على تطوير الزراعة المستدامة وضمان الأمن الغذائي للمجتمعات الريفية',
    image: reef3
      }
    ])

    
    const impactStats = ref([
      {
        title: 'مشاريع مكتملة',
        description: 'مشاريع تنموية شاملة',
        current: 0,
        target: 150,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`
      },
      {
        title: 'مستفيدين',
        description: 'أفراد استفادوا من برامجنا',
        current: 0,
        target: 25000,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>`
      },
      {
        title: 'متطوعين',
        description: 'متطوعين نشطين',
        current: 0,
        target: 500,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`
      },
      {
        title: 'مساهمات',
        description: 'إجمالي المساهمات بالدولار',
        current: 0,
        target: 2500000,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
      }
    ])
    
// ✅ باقي الأقسام تبقى كما هي
    const featuredProjects = ref([
      {
        title: 'مشروع تعليم القرية',
        description: 'بناء وتجهيز مدرسة متكاملة لخدمة 500 طالب في المنطقة الشمالية',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        progress: 91
      },
      {
        title: 'مشروع المياه النظيفة',
        description: 'توفير مصادر مياه نظيفة لـ 10 قرى في المناطق النائية',
    image: 'https://images.unsplash.com/photo-1582751515782-c0d92b9d5f32?auto=format&fit=crop&w=1000&q=80',
        status: 'مكتمل',
        progress: 100
      },
      {
        title: 'التوعية الرقمية',
        description: 'برنامج شامل لتعليم المجتمع على الاستخدام الآمن للإنترنت والتقنيات الرقمية',
    image: 'https://images.unsplash.com/photo-1540950493631-74d3e79623f1?auto=format&fit=crop&w=1000&q=80',
        status: 'قيد التنفيذ',
        progress: 65
      }
    ])
    
// ✅ باقي البيانات كما هي (latestNews, upcomingEvents, successStories, partners)
    const latestNews = ref([
      {
        title: 'افتتاح مدرسة جديدة في قرية المزارع',
        summary: 'تم افتتاح مدرسة جديدة تستوعب 200 طالب في قرية المزارع بمحافظة تعز',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        date: '15 ديسمبر 2024'
      },
      {
        title: 'ورشة عمل حول الزراعة المستدامة',
        summary: 'عقدت مؤسسة ريف ورشة عمل لتدريب 50 مزارع على تقنيات الزراعة المستدامة',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
        date: '12 ديسمبر 2024'
      },
      {
        title: 'توزيع مساعدات غذائية لـ 500 عائلة',
        summary: 'تم توزيع مساعدات غذائية شاملة لـ 500 عائلة في المناطق المتضررة',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        date: '10 ديسمبر 2024'
      }
    ])
    
    const upcomingEvents = ref([
      {
        title: 'مؤتمر التنمية المستدامة',
        summary: 'مؤتمر سنوي يناقش تحديات التنمية المستدامة في المناطق الريفية',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80',
        date: '20 يناير 2025'
      },
      {
        title: 'معرض المنتجات الريفية',
        summary: 'معرض لعرض وتسويق المنتجات الريفية المحلية',
    image: 'https://images.unsplash.com/photo-1612547038846-00e73737552c?auto=format&fit=crop&w=1000&q=80',
        date: '25 يناير 2025'
      }
    ])
    
    const successStories = ref([
      {
        title: 'قصة نجاح فاطمة',
        summary: 'كيف ساعدت برامجنا فاطمة في إنشاء مشروعها الصغير وتحسين دخل أسرتها',
    image: 'https://images.unsplash.com/photo-1612547038846-00e73737552c?auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'مدرسة الأمل',
        summary: 'قصة بناء مدرسة في قرية نائية وكيف غيرت حياة الأطفال والمجتمع',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'مشروع المياه',
        summary: 'كيف وفر مشروع المياه النظيفة الحياة الآمنة لـ 10 قرى في المنطقة',
    image: 'https://images.unsplash.com/photo-1582751515782-c0d92b9d5f32?auto=format&fit=crop&w=1000&q=80'
      }
    ])
    
  const partners = ref([
  {
    name: 'مؤسسة شباب سبأ',
    logo: new URL('@/assets/sheba-logo.png', import.meta.url).href
  },
  {
    name: '  جسور',
    logo: new URL('@/assets/logo3.png', import.meta.url).href
  },
  {
    name: ' التعاون الالماني ',
    logo: new URL('@/assets/logo4.jpg', import.meta.url).href
  },
  {
    name: 'مؤسسة شباب سبأ',
    logo: new URL('@/assets/sheba-logo.png', import.meta.url).href
  },
  {
    name: ' اكسفام',
    logo: new URL('@/assets/logo5.png', import.meta.url).href
  },
  {
    name: 'البنك الدولي',
    logo: new URL('@/assets/logo2.png', import.meta.url).href
  }
])


</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.card-hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(135deg, #66bb6a, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-number {
  transition: all 0.3s ease;
}
</style>
