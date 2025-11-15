<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">مشاريعنا المميزة</h2>
        <div class="w-24 h-1 bg-primary-green mx-auto mb-8"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          نقدم مشاريع متنوعة تهدف إلى تحسين حياة المجتمعات الريفية وتمكينها من تحقيق التنمية المستدامة
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index"
          :project="project"
        />
      </div>

      <div class="flex justify-end mt-12">
        <button @click="goToProjects" class="btn-secondary">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
          عرض جميع المشاريع
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const router = useRouter()

const goToProjects = () => {
  router.push({ name: 'projects' })
}
</script>

