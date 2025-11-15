<template>
    <section class="py-16 bg-gradient-to-r from-light-beige to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">إحصائيات المكتبة</h2>
          <p class="text-lg text-gray-600">أرقام تعكس حجم العمل والجهد المبذول</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatItem 
            v-for="(stat, idx) in statistics"
            :key="stat.id"
            :stat="stat"
            :delay-ms="idx * 100"
            :duration-ms="2000"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import StatItem from './StatItem.vue'
  
  export default {
    name: 'StatisticsSection',
    components: {
      StatItem
    },
    data() {
      return {
        statistics: [
          {
            id: 1,
            target: 150,
            suffix: '+',
            label: 'مورد متاح',
            icon: 'DocumentIcon'
          },
          {
            id: 2,
            target: 25,
            label: 'تقرير سنوي',
            icon: 'BookIcon'
          },
          {
            id: 3,
            target: 500,
            suffix: '+',
            label: 'مستخدم نشط',
            icon: 'UsersIcon'
          },
          {
            id: 4,
            target: 2500,
            label: 'تحميل شهري',
            icon: 'HeartIcon'
          }
        ]
      }
    }
  }
  </script>