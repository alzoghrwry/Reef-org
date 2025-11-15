<template>
  <div class="min-h-screen bg-primary">
    <MediaHero />
    <FeaturedImages
      :featuredImages="featuredImages"
      :getCategoryName="getCategoryName"
      @open="openModal"
    />
    <ImagesGallery
      :categories="categories"
      :selectedCategory="selectedCategory"
      @update:selectedCategory="(v) => selectedCategory = v"
      :filteredImages="filteredImages"
      :getCategoryName="getCategoryName"
      @open="openModal"
    />
    <VideosGallery
      :paginatedVideos="paginatedVideos"
      :getCategoryName="getCategoryName"
      :formatDate="formatDate"
      :currentVideoPage="currentVideoPage"
      :totalVideoPages="totalVideoPages"
      :visibleVideoPages="visibleVideoPages"
      :allVideosCount="allVideos.length"
      @prev="goToPreviousPage"
      @next="goToNextPage"
      @goToPage="goToVideoPage"
      @open="openModal"
    />
    <MediaModal
      :selectedItem="selectedItem"
      :getCategoryName="getCategoryName"
      :formatDate="formatDate"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import MediaHero from '@components/media-gallery/MediaHero.vue'
import FeaturedImages from '@components/media-gallery/FeaturedImages.vue'
import ImagesGallery from '@components/media-gallery/ImagesGallery.vue'
import VideosGallery from '@components/media-gallery/VideosGallery.vue'
import MediaModal from '@components/media-gallery/MediaModal.vue'

export default {
  name: 'MediaGallery',
  components: { MediaHero, FeaturedImages, ImagesGallery, VideosGallery, MediaModal },
  setup() {
    const selectedCategory = ref('all')
    const selectedItem = ref(null)
    const currentVideoPage = ref(1)
    const videosPerPage = 6
    
    const categories = [
      { id: 'all', name: 'الكل' },
      { id: 'projects', name: 'المشاريع التنموية' },
      { id: 'women-empowerment', name: 'تمكين المرأة' },
      { id: 'environment', name: 'حماية البيئة' },
      { id: 'education', name: 'التعليم' },
 
      { id: 'success-stories', name: 'قصص النجاح' },
      { id: 'events', name: 'الفعاليات' }
    ]
    
    const mediaItems = [
      {
        id: 1,
        title: 'إعادة فتح المدارس في المعافر',
        description: 'إزالة الثكنات العسكرية من المدارس وتمكين الأطفال من العودة للتعليم في بيئة آمنة',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video',
        categoryId: 'education',
        date: '2024-01-15',
        duration: '3:45',
        likes: 156,
        content: '<p>تم إعادة فتح 5 مدارس في مديرية المعافر بعد إزالة الثكنات العسكرية منها، مما مكن أكثر من 800 طفل من العودة للتعليم في بيئة آمنة.</p>'
      },
      {
        id: 2,
        title: 'تكريم رائدات الأعمال',
        description: 'تكريم 30 امرأة من رائدات الأعمال وتقديم الدعم لهن في مشاريعهن الصغيرة',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'women-empowerment',
        date: '2024-01-12',
        likes: 89,
        content: '<p>تم تكريم 30 امرأة من رائدات الأعمال في المناطق الريفية وتقديم الدعم المالي والفني لهن لتطوير مشاريعهن الصغيرة.</p>'
      },
      {
        id: 3,
        title: 'مشروع الطباخ الشمسي',
        description: 'تنفيذ مشروع الطباخ الشمسي لتقليل الاعتماد على الحطب وحماية البيئة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'video',
        categoryId: 'environment',
        date: '2024-01-10',
        duration: '5:20',
        likes: 203,
        content: '<p>تم توزيع 200 طباخ شمسي على الأسر في المناطق الريفية، مما قلل من الاعتماد على الحطب وساهم في حماية البيئة.</p>'
      },
      {
        id: 4,
        title: 'حملة التوعية الصحية',
        description: 'حملة توعية شاملة حول الوقاية من الأمراض المعدية مثل الكوليرا وفيروس كورونا',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'health',
        date: '2024-01-08',
        likes: 134,
        content: '<p>حملة توعية شاملة شملت 15 قرية في مديرية المعافر حول الوقاية من الأمراض المعدية والنظافة الشخصية.</p>'
      },
      {
        id: 5,
        title: 'مركز الدعم النفسي',
        description: 'افتتاح مركز الدعم النفسي والاجتماعي لخدمة المتأثرين بالنزاعات والكوارث',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video',
        categoryId: 'psychosocial',
        date: '2024-01-05',
        duration: '4:15',
        likes: 178,
        content: '<p>افتتاح أول مركز للدعم النفسي والاجتماعي في المنطقة لخدمة الأطفال والنساء المتأثرين بالنزاعات.</p>'
      },
      {
        id: 6,
        title: 'قصة نجاح: أم أحمد',
        description: 'كيف حولت أم أحمد مشروعها الصغير إلى مصدر دخل مستدام لعائلتها',
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        type: 'video',
        categoryId: 'success-stories',
        date: '2024-01-03',
        duration: '6:30',
        likes: 267,
        content: '<p>قصة نجاح أم أحمد التي بدأت بمشروع صغير لتربية الدواجن وأصبحت الآن تدير مزرعة متكاملة توفر الدخل لـ 10 عائلات.</p>'
      },
      {
        id: 7,
        title: 'مشروع المياه النظيفة',
        description: 'توصيل المياه النظيفة لـ 500 عائلة في المنطقة الريفية',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'projects',
        date: '2024-01-01',
        likes: 145,
        content: '<p>تم إنجاز مشروع توصيل المياه النظيفة لـ 500 عائلة في المنطقة الريفية، مما يحسن من جودة الحياة والصحة العامة.</p>'
      },
      {
        id: 8,
        title: 'ورشة بناء السلام',
        description: 'ورشة تدريبية حول بناء السلام والتعايش المجتمعي',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        type: 'video',
        categoryId: 'events',
        date: '2023-12-28',
        duration: '7:45',
        likes: 198,
        content: '<p>ورشة تدريبية شاملة حول بناء السلام والتعايش المجتمعي شارك فيها 50 شاب وشابة من مختلف القرى.</p>'
      },
      {
        id: 9,
        title: 'مشروع الطاقة الشمسية',
        description: 'تركيب ألواح الطاقة الشمسية في المدارس والمستشفيات',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'environment',
        date: '2023-12-25',
        likes: 189,
        content: '<p>تم تركيب ألواح الطاقة الشمسية في 10 مدارس و3 مستشفيات، مما وفر الطاقة النظيفة والمستدامة.</p>'
      },
      {
        id: 10,
        title: 'برنامج التدريب المهني',
        description: 'تدريب الشباب على المهارات المهنية المختلفة',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'education',
        date: '2023-12-20',
        likes: 167,
        content: '<p>برنامج تدريبي شامل لـ 200 شاب وشابة على مهارات مختلفة مثل النجارة والكهرباء والحاسوب.</p>'
      },
      {
        id: 11,
        title: 'مشروع الزراعة المستدامة',
        description: 'تعليم المزارعين تقنيات الزراعة المستدامة',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'projects',
        date: '2023-12-15',
        likes: 203,
        content: '<p>مشروع شامل لتعليم 150 مزارع على تقنيات الزراعة المستدامة والري الحديث.</p>'
      },
      {
        id: 13,
        title: 'برنامج التوعية الرقمية',
        description: 'ورشة تدريبية حول الاستخدام الآمن للإنترنت والتقنيات الرقمية',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        type: 'image',
        categoryId: 'education',
        date: '2023-12-05',
        likes: 156,
        content: '<p>ورشة تدريبية شاملة حول الاستخدام الآمن للإنترنت والتقنيات الرقمية شارك فيها 50 شاب وشابة من مختلف القرى.</p>'
      }
    ]
    
    const featuredImages = computed(() => {
      return mediaItems.filter(item => item.type === 'image').slice(0, 4)
    })
    
    const allVideos = computed(() => {
      return mediaItems.filter(item => item.type === 'video')
    })
    
    const featuredVideos = computed(() => {
      return allVideos.value.slice(0, 3)
    })
    
    const totalVideoPages = computed(() => {
      return Math.ceil(allVideos.value.length / videosPerPage)
    })
    
    const paginatedVideos = computed(() => {
      const start = (currentVideoPage.value - 1) * videosPerPage
      const end = start + videosPerPage
      return allVideos.value.slice(start, end)
    })
    
    const visibleVideoPages = computed(() => {
      const pages = []
      const total = totalVideoPages.value
      const current = currentVideoPage.value
      
      // Show first page
      pages.push(1)
      
      // Show pages around current
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }
      
      // Show last page if exists
      if (total > 1 && !pages.includes(total)) {
        pages.push(total)
      }
      
      return pages
    })
    
    const goToVideoPage = (page) => {
      currentVideoPage.value = page
      // Scroll to videos section
      window.scrollTo({
        top: document.querySelector('.grid').offsetTop - 100,
        behavior: 'smooth'
      })
    }
    
    const goToPreviousPage = () => {
      if (currentVideoPage.value > 1) {
        currentVideoPage.value--
        window.scrollTo({
          top: document.querySelector('.grid').offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
    
    const goToNextPage = () => {
      if (currentVideoPage.value < totalVideoPages.value) {
        currentVideoPage.value++
        window.scrollTo({
          top: document.querySelector('.grid').offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
    
    const filteredImages = computed(() => {
      let filtered = mediaItems.filter(item => item.type === 'image')
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(item => item.categoryId === selectedCategory.value)
      }
      
      return filtered
    })
    
    const getCategoryName = (categoryId) => {
      const category = categories.find(cat => cat.id === categoryId)
      return category ? category.name : ''
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    const openModal = (item) => {
      selectedItem.value = item
    }
    
    const closeModal = () => {
      selectedItem.value = null
    }
    
    return {
      selectedCategory,
      selectedItem,
      currentVideoPage,
      categories,
      mediaItems,
      featuredImages,
      featuredVideos,
      allVideos,
      paginatedVideos,
      totalVideoPages,
      visibleVideoPages,
      filteredImages,
      getCategoryName,
      formatDate,
      openModal,
      closeModal,
      goToVideoPage,
      goToPreviousPage,
      goToNextPage
    }
  }
}
</script>