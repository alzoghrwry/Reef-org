<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        <div class="lg:col-span-2 text-center lg:text-right order-2 lg:order-1">
          <h2 class="text-3xl font-extrabold text-brown-800 mb-6 border-b pb-3 border-gold-300">
            رسالة القائد المؤسس
          </h2>
          
          <blockquote 
            class="text-xl italic text-gray-700 leading-relaxed bg-gray-100 p-8 rounded-xl shadow-lg border-r-8 border-gold-500 transition-all duration-500 
                   hover:shadow-2xl hover:bg-gold-50 transform hover:scale-[1.01]"
          >
            <p class="font-serif text-brown-800 relative">
              <span class="text-5xl font-extrabold text-gold-500 absolute top-[-20px] right-[-5px]">“</span>
              نؤمن بأن كل إنجاز بدأ بفكرة جريئة. تاريخنا هو شهادة على تفاني فريق عملنا وعمق إيماننا بأن التنمية المستدامة هي مفتاح بناء مستقبل مزدهر لأهلنا. رحلتنا مستمرة...
              <span class="text-5xl font-extrabold text-gold-500 absolute bottom-[-40px] left-[-5px]">”</span>
            </p>
          </blockquote>
          
          <div class="mt-10 text-right">
            <p class="text-2xl font-bold text-brown-800">{{ leader.name }}</p>
            <p class="text-lg text-gold-600 font-semibold">{{ leader.title }}</p>
          </div>
        </div>
        
        <div class="lg:col-span-1 flex justify-center order-1 lg:order-2">
          <div class="relative group">
            <img 
              :src="leader.image" 
              :alt="leader.name"
              
              @error="leader.image = 'https://via.placeholder.com/600x600/6A4500/FFFFFF?text=CEO+Photo'"
              
              class="w-64 h-64 object-cover object-top rounded-full shadow-2xl border-8 border-white ring-4 ring-gold-500 transition-all duration-500 group-hover:scale-105 group-hover:ring-8"
            >
            <div class="absolute bottom-4 right-4 bg-brown-800 text-white px-3 py-1 text-sm rounded-full shadow-lg transform rotate-[-5deg] transition-all duration-300 group-hover:rotate-0 group-hover:shadow-2xl">
                 المؤسس
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const leader = ref({
    name: 'د. عبد الرحمن الريفي',
    title: 'رئيس مجلس الإدارة والمؤسس',
  
    image: 'https://picsum.photos/id/177/600/600', 
});
</script>

<style scoped>

</style>