<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-green via-reef-green-600 to-brown-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
            <svg class="w-6 h-6 ml-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            <span class="text-lg font-bold">قصص النجاح</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            إلهام في كل قصة نجاح
          </h1>
          <p class="text-xl md:text-2xl text-white opacity-90 mb-8">
            قصص ملهمة من الميدان تروي عطاءنا وتأثيرنا الإيجابي
          </p>
        </div>
      </div>
    </section>

    <!-- Stories Grid -->
    <section class="py-20 bg-light-beige">
      <div class="container mx-auto px-4">
        <StoriesGrid :stories="successStories" @open="openStory" />
        <div class="text-center mt-12">
          <button class="btn-primary px-8 py-4 text-lg font-bold">
            <span class="flex items-center justify-center">
              <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              المزيد من القصص
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="py-20 bg-gradient-to-br from-primary-green to-reef-green-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            تأثيرنا بالأرقام
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">5,000+</div>
              <div class="text-green-100">أسرة مستفيدة</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">120+</div>
              <div class="text-green-100">مشروع ناجح</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">15</div>
              <div class="text-green-100">محافظة مستفيدة</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">50+</div>
              <div class="text-green-100">قصة نجاح</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Modal -->
    <StoryModal :story="selectedStory" @close="closeStory" />
  </div>
</template>

<script>
import { ref } from 'vue'
import StoriesGrid from '@components/success-stories/StoriesGrid.vue'
import StoryModal from '@components/success-stories/StoryModal.vue'
import { useRouter } from 'vue-router'
import { useSuccessStories } from '@composables/useSuccessStories'

export default {
  name: 'SuccessStories',
  components: { StoriesGrid, StoryModal },
  setup() {
    const router = useRouter()
    const { allStories } = useSuccessStories()
    const selectedStory = ref(null)

    const openStory = (story) => {
      router.push({ name: 'story-detail', params: { id: story.id } })
    }

    const closeStory = () => { selectedStory.value = null }

    return { successStories: allStories, selectedStory, openStory, closeStory }
  }
}
</script>

<style scoped>
/* .btn-primary {
  @apply bg-gradient-to-r from-primary-green to-reef-green-600 text-white hover:from-accent-yellow hover:to-yellow-500 hover:text-dark-text transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105;
} */
</style>

