<template>
  <div>
    <div class="flex items-center space-x-3 space-x-reverse mb-4">
      <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-none">
        <img :src="circleUrl" alt="الدائرة - شعار مؤسسة ريف" class="w-20 h-20 object-contain rotate-slow" />
      </div>
      <div class="leading-none">
        <h3 class="font-extrabold" style="color:#A3A63C; font-size: 32px; line-height: 1;">Reef</h3>
      </div>
    </div>
    <p class="text-sm text-brown-200 leading-relaxed mb-4">
      مؤسسة إنسانية غير ربحية تهدف إلى تقديم المساعدات والدعم للمجتمعات المحتاجة في اليمن من خلال مشاريع متنوعة في مجالات الصحة والتعليم والإسكان.
    </p>
    <SocialMediaLinks />
  </div>
</template>

<script setup>
import SocialMediaLinks from './SocialMediaLinks.vue'
import circleUrl from '@assets/img/circul.png'
</script>

<style scoped>
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotate-slow { animation: rotate-slow 6s linear infinite; }
</style>
