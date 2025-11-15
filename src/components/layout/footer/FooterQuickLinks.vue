<template>
  <div>
    <h4 class="text-lg font-bold mb-4 border-b-2 border-gold-500 pb-2">روابط سريعة</h4>
    <ul class="space-y-2">
      <li v-for="link in quickLinks" :key="link.path">
        <router-link :to="link.path" class="flex items-center text-sm text-white hover:text-gold-400 transition-colors">
          <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path :d="link.icon" />
          </svg>
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const quickLinks = [
  { path: '/', name: 'الرئيسية', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
  { path: '/about', name: ' عن ريف', icon: 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L.96 16.5H3.5V22h2v-6h2v6h2v-6h2v6h2v-6h2v6h2z' },
  { path: '/foundation-history', name: 'تاريخ المؤسسة', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },

  { path: '/media-gallery', name: 'المعرض الإعلامي', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' },
  { path: '/resources', name: 'التقارير والإصدارات', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { path: '/contact', name: 'تواصل معنا', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }
]

</script>
