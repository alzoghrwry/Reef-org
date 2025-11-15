import { ref } from 'vue'

const stories = ref([
  {
    id: 1,
    title: 'إيصال المياه النقية لأهالي قرية ريفية',
    description: 'تم حفر بئر عميق وإنشاء شبكة مياه تغذي 200 أسرة، مما غير حياة المجتمع تماماً.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200',
      'https://images.unsplash.com/photo-1601758124510-52a6b3fceae2?w=1200',
      'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=1200'
    ],
    category: 'مشاريع المياه',
    date: 'يناير 2024',
    impact: '200 أسرة',
    fullContent: `
      <p class="text-lg mb-6">في قرية صغيرة في الريف اليمني، كانت النساء والأطفال يمشون لساعات طويلة لجلب الماء من مصادر ملوثة.</p>
      <p class="mb-6">تم حفر بئر عميق وبناء شبكة مياه تصل إلى المنازل، فانخفضت الأمراض وتحسنت جودة الحياة.</p>
    `
  },
  {
    id: 2,
    title: 'بناء مدرسة للأطفال النازحين',
    description: 'تم بناء مدرسة تستوعب 300 طفل وطالبة، مع فصول دراسية مجهزة وملاعب.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200'
    ],
    category: 'التعليم',
    date: 'ديسمبر 2023',
    impact: '300 طفل',
    fullContent: `
      <p class="text-lg mb-6">بنينا مدرسة كاملة بفصول مجهزة ومكتبة وملعب للأطفال.</p>
      <p class="mb-6">عاد مئات الأطفال إلى مقاعد الدراسة في بيئة آمنة ومحفزة.</p>
    `
  },
  {
    id: 3,
    title: 'إيصال المياه النقية لأهالي قرية ريفية',
    description: 'تم حفر بئر عميق وإنشاء شبكة مياه تغذي 200 أسرة، مما غير حياة المجتمع تماماً.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200',
      'https://images.unsplash.com/photo-1601758124510-52a6b3fceae2?w=1200',
      'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=1200'
    ],
    category: 'مشاريع المياه',
    date: 'يناير 2024',
    impact: '200 أسرة',
    fullContent: `
      <p class="text-lg mb-6">في قرية صغيرة في الريف اليمني، كانت النساء والأطفال يمشون لساعات طويلة لجلب الماء من مصادر ملوثة.</p>
      <p class="mb-6">تم حفر بئر عميق وبناء شبكة مياه تصل إلى المنازل، فانخفضت الأمراض وتحسنت جودة الحياة.</p>
    `
  },
  
  {
    id: 4,
    title: 'بناء مدرسة للأطفال النازحين',
    description: 'تم بناء مدرسة تستوعب 300 طفل وطالبة، مع فصول دراسية مجهزة وملاعب.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200'
    ],
    category: 'التعليم',
    date: 'ديسمبر 2023',
    impact: '300 طفل',
    fullContent: `
      <p class="text-lg mb-6">بنينا مدرسة كاملة بفصول مجهزة ومكتبة وملعب للأطفال.</p>
      <p class="mb-6">عاد مئات الأطفال إلى مقاعد الدراسة في بيئة آمنة ومحفزة.</p>
    `
  },
  {
    id: 5,
    title: 'بناء مدرسة للأطفال النازحين',
    description: 'تم بناء مدرسة تستوعب 300 طفل وطالبة، مع فصول دراسية مجهزة وملاعب.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200'
    ],
    category: 'التعليم',
    date: 'ديسمبر 2023',
    impact: '300 طفل',
    fullContent: `
      <p class="text-lg mb-6">بنينا مدرسة كاملة بفصول مجهزة ومكتبة وملعب للأطفال.</p>
      <p class="mb-6">عاد مئات الأطفال إلى مقاعد الدراسة في بيئة آمنة ومحفزة.</p>
    `
  },
  {
    id: 6,
    title: 'بناء مدرسة للأطفال النازحين',
    description: 'تم بناء مدرسة تستوعب 300 طفل وطالبة، مع فصول دراسية مجهزة وملاعب.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200'
    ],
    category: 'التعليم',
    date: 'ديسمبر 2023',
    impact: '300 طفل',
    fullContent: `
      <p class="text-lg mb-6">بنينا مدرسة كاملة بفصول مجهزة ومكتبة وملعب للأطفال.</p>
      <p class="mb-6">عاد مئات الأطفال إلى مقاعد الدراسة في بيئة آمنة ومحفزة.</p>
    `
  }
])

export function useSuccessStories() {
  const allStories = stories
  const getStoryById = (id) => allStories.value.find(s => String(s.id) === String(id))
  return { allStories, getStoryById }
}


