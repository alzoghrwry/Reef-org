<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
    <HeroSection
      title="مكتبة الموارد والتقارير"
      subtitle="مجموعة شاملة من الموارد والتقارير والأدلة لدعم التنمية الريفية"
    />

    <SearchFilterSection
      v-model:searchQuery="searchQuery"
      v-model:selectedCategory="selectedCategory"
      :categories="categories"
    />

    <ResourcesGrid
      :resources="filteredResources"
      :get-category-name="getCategoryName"
      :format-date="formatDate"
    />

    <StatisticsSection />
          </div>
          
</template>

<script>
import { ref, computed } from 'vue'
import HeroSection from '../components/resourcesLibrary/HeroSection.vue'
import SearchFilterSection from '../components/resources/SearchFilterSection.vue'
import ResourcesGrid from '../components/resourcesLibrary/ResourcesGrid.vue'
import StatisticsSection from '../components/resources/StatisticsSection.vue'
import reef1 from '@/assets/img/reef1.jpg'
import reef2 from '@/assets/img/reef2.jpg'
import reef3 from '@/assets/img/reef3.jpg'
import reef4 from '@/assets/img/reef4.jpg'

export default {
  name: 'ResourcesLibrary',
  components: {
    HeroSection,
    SearchFilterSection,
    ResourcesGrid,
    StatisticsSection
  },
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('all')
    
    const categories = [
      { id: 'all', name: 'الكل' },
      { id: 'reports', name: 'التقارير' },
      { id: 'guides', name: 'الأدلة' },
      { id: 'research', name: 'الاصدارات' },
     
    ]
    
    const resources = [
      {
        id: 1,
        title: 'التقرير السنوي 2023',
        description: 'تقرير شامل عن أنشطة المؤسسة وإنجازاتها خلال عام 2023',
        categoryId: 'reports',
        date: '2024-01-15',
        fileSize: '2.5 MB',
        downloads: 150,
        image: reef1
      },
      {
        id: 2,
        title: 'دليل الزراعة المستدامة',
        description: 'دليل شامل للمزارعين حول تقنيات الزراعة المستدامة والري الذكي',
        categoryId: 'guides',
        date: '2024-01-10',
        fileSize: '5.2 MB',
        downloads: 89,
        image: reef2
      },
      {
        id: 3,
        title: 'بحث: تأثير التكنولوجيا على التنمية الريفية',
        description: 'دراسة علمية حول تأثير التكنولوجيا الحديثة على التنمية في المناطق الريفية',
        categoryId: 'research',
        date: '2024-01-08',
        fileSize: '3.8 MB',
        downloads: 67,
        image: reef3
      },
      {
        id: 4,
        title: 'كتيب الصحة المجتمعية',
        description: 'كتيب تعليمي حول الصحة المجتمعية والوقاية من الأمراض',
        categoryId: 'manuals',
        date: '2024-01-05',
        fileSize: '1.9 MB',
        downloads: 134,
        image: reef4
      },
      {
        id: 5,
        title: 'نموذج طلب دعم مشروع',
        description: 'نموذج رسمي لطلب الدعم المالي للمشاريع التنموية',
        categoryId: 'forms',
        date: '2024-01-03',
        fileSize: '0.5 MB',
        downloads: 203,
        image: reef1
      },
      {
        id: 6,
        title: 'تقرير تقييم الأثر الاجتماعي',
        description: 'تقرير تقييم الأثر الاجتماعي لمشاريع المؤسسة في المناطق الريفية',
        categoryId: 'reports',
        date: '2024-01-01',
        fileSize: '4.1 MB',
        downloads: 78,
        image: reef2
      },
      {
        id: 7,
        title: 'دليل إدارة المشاريع المجتمعية',
        description: 'دليل شامل لإدارة وتنفيذ المشاريع المجتمعية في المناطق الريفية',
        categoryId: 'guides',
        date: '2023-12-28',
        fileSize: '6.3 MB',
        downloads: 95,
        image: reef3
      },
      {
        id: 8,
        title: 'بحث: التعليم في المناطق الريفية',
        description: 'دراسة حول تحديات وفرص التعليم في المناطق الريفية',
        categoryId: 'research',
        date: '2023-12-25',
        fileSize: '2.7 MB',
        downloads: 112,
        image: reef4
      }
    ]
    
    const filteredResources = computed(() => {
      let filtered = resources
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(resource => resource.categoryId === selectedCategory.value)
      }
      
      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(resource => 
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
        )
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
    
    return {
      searchQuery,
      selectedCategory,
      categories,
      resources,
      filteredResources,
      getCategoryName,
      formatDate
    }
  }
}
</script>
