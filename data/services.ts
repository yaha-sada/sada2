export interface Service {
  id: string
  name: string
  description: string
  icon: string
  details: string
  features: string[]
  badge?: string
}

export const services: Service[] = [
  {
    id: 'live-training',
    name: 'التدريب الإلكتروني المباشر',
    description: 'برامج تدريبية مباشرة عبر الإنترنت مع مدربين متخصصين',
    icon: 'video',
    details: 'نقدم جلسات تدريبية مباشرة تفاعلية مع إمكانية التفاعل المباشر مع المدرب والمتدربين الآخرين.',
    features: [
      'جلسات مباشرة يومية',
      'تفاعل مباشر مع المدرب',
      'شهادات معتمدة',
      'دعم فني مستمر',
      'مرونة في الجدول الزمني',
      'تسجيلات الجلسات',
    ],
    badge: 'الأكثر شيوعاً',
  },
  {
    id: 'recorded-training',
    name: 'التدريب الإلكتروني المسجل',
    description: 'محتوى تدريبي مسجل بجودة عالية تتعلم به بسرعتك الخاصة',
    icon: 'play-circle',
    details: 'محاضرات تدريبية مسجلة بجودة احترافية مع إمكانية المراجعة والتعلم بالسرعة التي تناسبك.',
    features: [
      'محتوى عالي الجودة',
      'متاح 24/7',
      'تعلم بسرعتك الخاصة',
      'المزيد من الفيديوهات الإضافية',
      'موارد قابلة للتحميل',
      'وصول مدى الحياة',
    ],
  },
  {
    id: 'in-person-training',
    name: 'التدريب الحضوري',
    description: 'برامج تدريبية حضورية مكثفة للتعلم المباشر',
    icon: 'users',
    details: 'جلسات تدريبية حضورية مكثفة توفر تجربة تعليمية شاملة مع التفاعل المباشر والعملي.',
    features: [
      'تدريب مباشر وعملي',
      'تفاعل وجهاً لوجه',
      'تمارين عملية فورية',
      'شبكة احترافية',
      'مواد تدريبية مطبوعة',
      'غداء ومشروبات',
    ],
  },
  {
    id: 'certificates',
    name: 'الشهادات الرقمية',
    description: 'شهادات معتمدة وموثقة رقمياً',
    icon: 'award',
    details: 'شهادات رقمية معتمدة موثقة برقم فريد يمكن التحقق منه والمشاركة مباشرة على منصات التواصل.',
    features: [
      'شهادات رقمية',
      'توثيق آمن',
      'يمكن التحقق منها',
      'مشاركة سهلة',
      'قابلة للطباعة',
      'معترفة دولياً',
    ],
  },
]

export const serviceCategories = [
  {
    id: 'it-digital',
    name: 'تكنولوجيا المعلومات والرقمنة',
    courses: 12,
    icon: 'code',
  },
  {
    id: 'business',
    name: 'إدارة الأعمال والقيادة',
    courses: 8,
    icon: 'briefcase',
  },
  {
    id: 'marketing',
    name: 'التسويق والمبيعات',
    courses: 10,
    icon: 'megaphone',
  },
  {
    id: 'finance',
    name: 'المالية والمحاسبة',
    courses: 7,
    icon: 'trending-up',
  },
  {
    id: 'hr',
    name: 'الموارد البشرية',
    courses: 6,
    icon: 'users',
  },
  {
    id: 'design',
    name: 'التصميم والإبداع',
    courses: 9,
    icon: 'palette',
  },
]
