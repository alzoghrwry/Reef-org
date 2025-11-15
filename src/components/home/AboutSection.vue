<template>
  <section class="py-20 bg-gradient-to-br from-light-beige to-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-6">نبذة عن مؤسسة ريف</h2>
          <div class="w-24 h-1 bg-primary-green mb-8"></div>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            مؤسسة ريف للتنمية المستدامة هي منظمة مجتمعية غير ربحية تأسست عام 2016، تهدف إلى تحسين أوضاع النساء والشباب في المناطق الريفية المتضررة من الحرب والكوارث الطبيعية في اليمن.
          </p>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            نؤمن بأن التنمية المستدامة تبدأ من المجتمع المحلي، ونسعى لتمكين المجتمعات الريفية من خلال برامج شاملة تركز على التعليم، الصحة، الزراعة المستدامة، وتمكين المرأة.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="goAbout" class="btn-primary">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              اقرأ المزيد
            </button>
            <button @click="playVideo" class="btn-secondary">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              شاهد الفيديو
            </button>
          </div>
        </div>
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="مؤسسة ريف" 
               class="rounded-xl shadow-2xl">
          <!-- <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-green to-reef-green-600 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goAbout = () => router.push({ name: 'about' })
const playVideo = () => {
  const section = document.querySelector('#about-video')
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>

