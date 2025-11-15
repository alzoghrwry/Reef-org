<template>
  <div class="min-h-screen bg-primary-green">
    <!-- Hero Section - Professional Luxury Design -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Premium Gradient Background -->
      <div class="absolute inset-0 gold-darkest-to-br from-primary-green via-reef-green-600 to-reef-green-700"></div>
      
      <!-- Sophisticated Pattern Overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: 
          linear-gradient(30deg, transparent 12%, rgba(255,255,255,.05) 12%, rgba(255,255,255,.05) 13%, transparent 13%),
          linear-gradient(150deg, transparent 12%, rgba(255,255,255,.05) 12%, rgba(255,255,255,.05) 13%, transparent 13%);
          background-size: 50px 50px;">
        </div>
      </div>
      
      <!-- Elegant Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Large Accent Circles -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl floating-animation"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-yellow/15 rounded-full blur-3xl floating-animation" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl floating-animation" style="animation-delay: -6s;"></div>
        
        <!-- Decorative Geometric Elements -->
        <div class="absolute top-20 right-20 w-32 h-32 border-2 border-accent-yellow/30 rounded-full floating-animation" style="animation-delay: -1s;"></div>
        <div class="absolute bottom-32 right-40 w-20 h-20 border-2 border-accent-yellow/20 rotate-45 floating-animation" style="animation-delay: -4s;"></div>
        <div class="absolute top-40 left-32 w-16 h-16 bg-accent-yellow/10 rounded-lg rotate-12 floating-animation" style="animation-delay: -2s;"></div>
        <div class="absolute bottom-48 left-48 w-24 h-24 border border-white/20 rounded-full floating-animation" style="animation-delay: -5s;"></div>
        
        <!-- Subtle Light Rays -->
        <div class="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-white/20 via-accent-yellow/30 to-transparent line-animation"></div>
        <div class="absolute bottom-0 left-1/3 w-px h-80 bg-gradient-to-t from-white/20 via-accent-yellow/20 to-transparent line-animation" style="animation-delay: -3s;"></div>
      </div>
      
      <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <!-- Premium Badge -->
            <div class="inline-flex items-center gap-3 bg-warm-brown backdrop-blur-2xl rounded-full px-10 py-5 mb-16 border border-white/30 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 group">
              <div class="relative">
                <div class="absolute inset-0 bg-accent-yellow/50 rounded-full blur-md animate-pulse"></div>
                <svg class="w-10 h-10 text-accent-yellow relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-2xl font-bold text-white tracking-wide">تواصل معنا</span>
            </div>
            
            <!-- Majestic Title -->
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-tight text-white">
              <div class="inline-block">
                <span class="inline-block hover:scale-105 transition-transform duration-500" style="text-shadow: 0 4px 30px rgba(0,0,0,0.3);">
                  نحن هنا
                </span>
              </div>
              <br>
              <div class="inline-block mt-4">
                <span class="inline-block text-accent-yellow hover:scale-105 transition-transform duration-500 relative" style="text-shadow: 0 0 40px rgba(242, 201, 76, 0.6), 0 4px 30px rgba(0,0,0,0.3);">
                  <span class="relative z-10">لمساعدتك</span>
                  <div class="absolute inset-0 blur-xl bg-accent-yellow/30 -z-10"></div>
                </span>
              </div>
            </h1>
            
            <!-- Elegant Subtitle -->
            <div class="flex items-center justify-center gap-6 px-4">
              <div class="hidden md:block h-px w-20 bg-gradient-to-r from-transparent to-accent-yellow"></div>
              <p class="text-xl md:text-3xl font-light text-white/95 leading-relaxed max-w-3xl" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                انضم إلى رحلة التنمية الإنسانية وكن جزءاً من التغيير الإيجابي
              </p>
              <div class="hidden md:block h-px w-20 bg-gradient-to-l from-transparent to-accent-yellow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elegant Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 z-20">
        <svg class="w-full h-32 md:h-40" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <!-- Shadow Layer -->
          <path d="M0,0 L0,40 Q360,100 720,40 T1440,40 L1440,0 Z" fill="rgba(0,0,0,0.1)"/>
          
          <!-- Main Wave -->
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" class="fill-light-beige"/>
          
          <!-- Top Accent -->
          <path d="M0,0 L0,30 Q360,80 720,30 T1440,30 L1440,0 Z" fill="rgba(242,201,76,0.1)"/>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
