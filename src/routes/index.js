import { createRouter, createWebHistory } from 'vue-router'

// استيراد كل الصفحات
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import NewsPage from '../views/NewsPage.vue'
import MediaGallery from '../views/MediaGallery.vue'
import ResourcesLibrary from '../views/ResourcesLibrary.vue'
import ClimateMap from '../views/ClimateMap.vue'
import Jobs from '../views/Jobs.vue'
import ContactUs from '../views/ContactUs.vue'
import Newsletter from '../views/Newsletter.vue'
import SuccessStories from '../views/SuccessStories.vue'
import Events from '../views/Events.vue'

// تعريف جميع المسارات في مصفوفة واحدة
const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'الرئيسية', description: 'الصفحة الرئيسية لمؤسسة ريف للتنمية البشرية' } },
  { path: '/about', name: 'about', component: AboutPage, meta: { title: 'من نحن', description: 'تعرف على مؤسسة ريف' } },
  { path: '/foundation-history', name: 'foundation-history', component: HistoryPage, meta: { title: 'تاريخ المؤسسة', description: 'اكتشف رحلة وإنجازات المؤسسة عبر السنين' } },
  { path: '/projects', name: 'projects', component: ProjectsPage, meta: { title: 'المشاريع', description: 'مشاريع مؤسسة ريف' } },
  { path: '/news', name: 'news', component: NewsPage, meta: { title: 'أخبارنا', description: 'آخر الأخبار والأنشطة' } },
  { path: '/media-gallery', name: 'media-gallery', component: MediaGallery, meta: { title: 'المعرض الإعلامي', description: 'معرض الوسائط والإعلام' } },
  { path: '/resources', name: 'resources', component: ResourcesLibrary, meta: { title: 'التقارير والإصدارات', description: 'مكتبة الموارد والتقارير' } },
  { path: '/success-stories', name: 'success-stories', component: SuccessStories, meta: { title: 'قصص النجاح', description: 'قصص نجاح المستفيدين' } },
  { path: '/events', name: 'events', component: Events, meta: { title: 'الفعاليات', description: 'فعاليات وأنشطة المؤسسة' } },
  { path: '/climate-map', name: 'climate-map', component: ClimateMap, meta: { title: 'الخريطة التفاعلية', description: 'خريطة المشاريع والأنشطة' } },
  { path: '/jobs', name: 'jobs', component: Jobs, meta: { title: 'الوظائف', description: 'الوظائف المتاحة' } },
  { path: '/contact', name: 'contact', component: ContactUs, meta: { title: 'تواصل معنا', description: 'بيانات التواصل والاتصال' } },
  { path: '/newsletter', name: 'newsletter', component: Newsletter, meta: { title: 'النشرة الإخبارية', description: 'اشترك في نشرتنا الإخبارية' } },

]

// إنشاء الراوتر مرة واحدة
export function createAppRouter() {
  const router = createRouter({
    history: createWebHistory('/Reef-org/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { top: 0, behavior: 'smooth' }
    }
  })

  // تحديث عنوان الصفحة تلقائيًا
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = `${to.meta.title} - مؤسسة ريف للتنمية البشرية`
    }
    next()
  })

  return router
}

export default createAppRouter()
