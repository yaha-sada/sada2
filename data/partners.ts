export interface Partner {
  id: string
  name: string
  category: string
  description: string
  logo: string
  website: string
}

export const partners: Partner[] = [
  {
    id: 'partner-1',
    name: 'شركة التقنية الحديثة',
    category: 'تكنولوجيا المعلومات',
    description: 'شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية',
    logo: '/partners/tech-modern.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-2',
    name: 'الجامعة الإلكترونية العربية',
    category: 'التعليم والتدريب',
    description: 'منصة تعليمية متخصصة في البرامج التدريبية المتقدمة',
    logo: '/partners/arab-uni.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-3',
    name: 'مجموعة الأعمال الدولية',
    category: 'الاستشارات الإدارية',
    description: 'شركة استشارات عالمية في مجال إدارة الأعمال',
    logo: '/partners/business-group.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-4',
    name: 'معهد التسويق الرقمي',
    category: 'التسويق الرقمي',
    description: 'متخصصون في تقديم برامج التسويق الرقمي المعتمدة',
    logo: '/partners/digital-marketing.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-5',
    name: 'مركز التنمية المهنية',
    category: 'تطوير الموارد البشرية',
    description: 'مركز متخصص في تدريب وتطوير الكوادر البشرية',
    logo: '/partners/hr-development.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-6',
    name: 'أكاديمية التصميم والإبداع',
    category: 'التصميم والإبداع',
    description: 'متخصصون في برامج التصميم الجرافيكي والفنون البصرية',
    logo: '/partners/design-academy.svg',
    website: 'https://example.com',
  },
]

export const partnershipTypes = [
  {
    id: 'corporate',
    name: 'الشراكات المؤسسية',
    description: 'برامج تدريبية مخصصة للشركات والمؤسسات',
    benefits: [
      'برامج مخصصة حسب احتياجاتك',
      'أسعار خاصة للمجموعات',
      'مدربون متخصصون',
      'تقارير مفصلة عن الأداء',
    ],
  },
  {
    id: 'institutional',
    name: 'الشراكات الأكاديمية',
    description: 'برامج تعاون مع الجامعات والمعاهد التعليمية',
    benefits: [
      'محتوى أكاديمي معتمد',
      'شهادات معترفة',
      'تبادل الخبرات',
      'برامج تطوير المناهج',
    ],
  },
  {
    id: 'network',
    name: 'الشراكات الشبكية',
    description: 'تعاون مع الجهات المتخصصة لتوسيع نطاق الخدمات',
    benefits: [
      'وصول أوسع للمتدربين',
      'تبادل الموارد والخبرات',
      'تكامل الخدمات',
      'نمو مشترك',
    ],
  },
]
