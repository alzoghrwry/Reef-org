<template>
  <section class="relative bg-gradient-to-br from-primary-green via-reef-green-600 to-reef-green-700 text-white py-32 overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: 
        linear-gradient(30deg, transparent 12%, rgba(255,255,255,.08) 12%, rgba(255,255,255,.08) 13%, transparent 13%),
        linear-gradient(150deg, transparent 12%, rgba(255,255,255,.08) 12%, rgba(255,255,255,.08) 13%, transparent 13%);
        background-size: 50px 50px;">
      </div>
    </div>
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl floating-animation"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl floating-animation" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-yellow/10 rounded-full blur-2xl floating-animation" style="animation-delay: -6s;"></div>
      <div class="absolute top-32 left-20 w-20 h-20 border-2 border-accent-yellow/20 rounded-full floating-animation" style="animation-delay: -1s;"></div>
      <div class="absolute bottom-32 right-32 w-16 h-16 border-2 border-white/20 rotate-45 floating-animation" style="animation-delay: -4s;"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-6xl mx-auto">
        <div class="inline-flex items-center bg-white/15 backdrop-blur-xl rounded-full px-10 py-5 mb-12 border border-white/30 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
          <div class="relative">
            <div class="absolute inset-0 bg-accent-yellow/50 rounded-full blur-md animate-pulse"></div>
            <svg class="w-10 h-10 text-accent-yellow relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span class="text-2xl font-bold mr-4">المعرض الإعلامي التفاعلي</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black mb-10 leading-tight">
          <div class="inline-block">
            <span class="inline-block hover:scale-105 transition-transform duration-500" style="text-shadow: 0 4px 30px rgba(0,0,0,0.3);">المعرض</span>
          </div>
          <br>
          <div class="inline-block mt-4">
            <span class="inline-block text-accent-yellow hover:scale-105 transition-transform duration-500 relative" style="text-shadow: 0 0 40px rgba(242, 201, 76, 0.6), 0 4px 30px rgba(0,0,0,0.3);">
              <span class="relative z-10">الإعلامي</span>
              <div class="absolute inset-0 blur-xl bg-accent-yellow/30 -z-10"></div>
            </span>
          </div>
        </h1>
        <div class="flex items-center justify-center gap-6 mb-16 px-4">
          <div class="hidden md:block h-px w-20 bg-gradient-to-r from-transparent to-accent-yellow"></div>
          <p class="text-xl md:text-3xl font-light opacity-95 leading-relaxed max-w-4xl" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">اكتشف قصص النجاح والمبادرات الإنسانية في المجتمعات الريفية</p>
          <div class="hidden md:block h-px w-20 bg-gradient-to-l from-transparent to-accent-yellow"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="group relative">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
            <div class="relative p-10">
              <div class="relative w-20 h-20 mx-auto mb-6">
                <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">500+</div>
              <h3 class="text-2xl font-bold mb-2">صورة عالية الجودة</h3>
              <p class="text-white/70 text-lg">توثيق احترافي لمشاريعنا</p>
              <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
          <div class="group relative">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
            <div class="relative p-10">
              <div class="relative w-20 h-20 mx-auto mb-6">
                <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">50+</div>
              <h3 class="text-2xl font-bold mb-2">فيديو توثيقي</h3>
              <p class="text-white/70 text-lg">قصص حقيقية ملهمة</p>
              <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
          <div class="group relative">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-accent-yellow/50 transition-colors duration-500"></div>
            <div class="relative p-10">
              <div class="relative w-20 h-20 mx-auto mb-6">
                <div class="absolute inset-0 bg-accent-yellow/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div class="absolute inset-0 bg-accent-yellow/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-10 h-10 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="text-6xl font-black text-accent-yellow mb-3 group-hover:scale-110 transition-transform duration-500" style="text-shadow: 0 0 30px rgba(242, 201, 76, 0.5);">100+</div>
              <h3 class="text-2xl font-bold mb-2">قصة نجاح</h3>
              <p class="text-white/70 text-lg">إنجازات تُلهم المجتمع</p>
              <div class="w-16 h-1 bg-accent-yellow/50 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 z-20">
      <svg class="w-full h-32 md:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
        <path d="M0,0 L0,40 Q360,100 720,40 T1440,40 L1440,0 Z" fill="rgba(0,0,0,0.1)"/>
        <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" class="fill-light-beige"/>
        <path d="M0,0 L0,30 Q360,80 720,30 T1440,30 L1440,0 Z" fill="rgba(242,201,76,0.1)"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaHero'
}
</script>


