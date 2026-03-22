export interface Course {
  id: string
  title: string
  category: string
  description: string
  instructor: string
  level: 'مبتدئ' | 'متوسط' | 'متقدم'
  duration: string
  price: number
  originalPrice?: number
  learners: number
  rating: number
  reviews: number
  image: string
  mode: 'مباشر' | 'مسجل' | 'حضوري'
  startDate?: string
  features: string[]
}

export const courses: Course[] = [
  {
    id: 'web-dev-fundamentals',
    title: 'أساسيات تطوير المواقع',
    category: 'تكنولوجيا المعلومات',
    description: 'تعلم أساسيات HTML, CSS, و JavaScript من الصفر. مناسب للمبتدئين الراغبين في دخول مجال تطوير الويب.',
    instructor: 'محمد أحمد',
    level: 'مبتدئ',
    duration: '40 ساعة',
    price: 199,
    originalPrice: 299,
    learners: 1240,
    rating: 4.8,
    reviews: 187,
    image: '/courses/web-dev.jpg',
    mode: 'مسجل',
    startDate: '2024-04-01',
    features: [
      'شهادة معتمدة',
      'دعم مستمر',
      'مشاريع عملية',
      'وصول مدى الحياة',
    ],
  },
  {
    id: 'digital-marketing-mastery',
    title: 'إتقان التسويق الرقمي',
    category: 'التسويق والمبيعات',
    description: 'دورة شاملة في التسويق الرقمي تغطي SEO, SEM, وسائل التواصل الاجتماعي، وتحليل البيانات.',
    instructor: 'فاطمة محمود',
    level: 'متوسط',
    duration: '50 ساعة',
    price: 249,
    learners: 890,
    rating: 4.7,
    reviews: 143,
    image: '/courses/digital-marketing.jpg',
    mode: 'مباشر',
    startDate: '2024-04-15',
    features: [
      'جلسات مباشرة',
      'استراتيجيات حديثة',
      'أدوات عملية',
      'شهادة معتمدة',
    ],
  },
  {
    id: 'business-leadership',
    title: 'مهارات القيادة في الأعمال',
    category: 'إدارة الأعمال',
    description: 'تطوير مهارات القيادة والإدارة الفعالة مع تطبيقات عملية وحالات دراسية حقيقية.',
    instructor: 'علي عمر',
    level: 'متقدم',
    duration: '35 ساعة',
    price: 349,
    learners: 560,
    rating: 4.9,
    reviews: 92,
    image: '/courses/business-leadership.jpg',
    mode: 'حضوري',
    features: [
      'دورة حضورية مكثفة',
      'شبكة احترافية',
      'استشارات فردية',
      'شهادة معتمدة',
    ],
  },
  {
    id: 'excel-data-analysis',
    title: 'تحليل البيانات باستخدام Excel',
    category: 'المالية والتحليل',
    description: 'اتقن استخدام Excel في تحليل البيانات، من الصيغ الأساسية إلى التحليلات المتقدمة.',
    instructor: 'سارة خالد',
    level: 'مبتدئ',
    duration: '30 ساعة',
    price: 129,
    originalPrice: 179,
    learners: 2100,
    rating: 4.6,
    reviews: 312,
    image: '/courses/excel-analysis.jpg',
    mode: 'مسجل',
    features: [
      'شهادة معتمدة',
      'ملفات تمرينية',
      'أمثلة حقيقية',
      'وصول مدى الحياة',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'تصميم واجهات المستخدم (UI/UX)',
    category: 'التصميم والإبداع',
    description: 'تعلم أساسيات تصميم الواجهات وتجربة المستخدم مع أدوات Figma و Adobe XD.',
    instructor: 'زيد محمد',
    level: 'متوسط',
    duration: '45 ساعة',
    price: 199,
    learners: 780,
    rating: 4.8,
    reviews: 156,
    image: '/courses/ui-ux-design.jpg',
    mode: 'مباشر',
    startDate: '2024-04-20',
    features: [
      'مشاريع حقيقية',
      'أدوات احترافية',
      'شهادة معتمدة',
      'دعم فني',
    ],
  },
  {
    id: 'python-programming',
    title: 'البرمجة بلغة Python',
    category: 'تكنولوجيا المعلومات',
    description: 'دورة شاملة في البرمجة بلغة Python من المستوى الأساسي إلى المتقدم.',
    instructor: 'محمود حسين',
    level: 'مبتدئ',
    duration: '60 ساعة',
    price: 279,
    originalPrice: 399,
    learners: 1560,
    rating: 4.9,
    reviews: 234,
    image: '/courses/python-programming.jpg',
    mode: 'مسجل',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'وصول مدى الحياة',
      'دعم الأقران',
    ],
  },
  {
    id: 'content-marketing',
    title: 'كتابة المحتوى التسويقي',
    category: 'التسويق والمبيعات',
    description: 'فن كتابة المحتوى الذي يجذب ويحول العملاء المحتملين إلى عملاء فعليين.',
    instructor: 'ليلى أحمد',
    level: 'متوسط',
    duration: '25 ساعة',
    price: 149,
    learners: 650,
    rating: 4.7,
    reviews: 108,
    image: '/courses/content-marketing.jpg',
    mode: 'مباشر',
    startDate: '2024-05-01',
    features: [
      'نماذج جاهزة',
      'جلسات مباشرة',
      'شهادة معتمدة',
      'استشارات فردية',
    ],
  },
]

export const courseFilters = {
  categories: [
    'جميع الفئات',
    'تكنولوجيا المعلومات',
    'التسويق والمبيعات',
    'إدارة الأعمال',
    'المالية والتحليل',
    'التصميم والإبداع',
    'الموارد البشرية',
  ],
  levels: ['جميع المستويات', 'مبتدئ', 'متوسط', 'متقدم'],
  modes: ['جميع الأنماط', 'مباشر', 'مسجل', 'حضوري'],
  priceRanges: [
    { label: 'جميع الأسعار', min: 0, max: Infinity },
    { label: 'أقل من 150', min: 0, max: 150 },
    { label: '150 - 300', min: 150, max: 300 },
    { label: 'أكثر من 300', min: 300, max: Infinity },
  ],
}
