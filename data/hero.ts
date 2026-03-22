export interface HeroContent {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  /** Hero visual (homepage uses brand logo; other pages use placeholders until final assets exist). */
  image: string
  imageAlt: string
}

export const heroContent: Record<string, HeroContent> = {
  home: {
    title: 'منصة صدى للخبرات والاستشارات',
    subtitle: 'تطوير المهارات والكفاءات',
    description: 'انضم إلى آلاف المتدربين الذين طوروا مهاراتهم وحقارو أحلامهم المهنية مع برامجنا التدريبية المتخصصة',
    primaryCta: {
      text: 'ابدأ التعلم الآن',
      href: '/courses',
    },
    secondaryCta: {
      text: 'اكتشف البرامج',
      href: '/programs',
    },
    image: '/logo-sada.png',
    imageAlt: 'Sada Platform for Expertise and Consultations Logo',
  },
  about: {
    title: 'عن منصة صدى',
    subtitle: 'رحلتنا نحو التميز',
    description: 'تعرف على رؤيتنا ورسالتنا والقيم التي توجهنا في تقديم أفضل خدمات التدريب والاستشارات',
    primaryCta: {
      text: 'تواصل معنا',
      href: '/contact',
    },
    image: '/hero/placeholder-about.svg',
    imageAlt: 'Temporary placeholder image for the about page hero',
  },
  programs: {
    title: 'برامجنا التدريبية',
    subtitle: 'حلول تدريبية متكاملة',
    description: 'نقدم برامج تدريبية متنوعة تغطي جميع جوانب التطوير المهني والشخصي',
    primaryCta: {
      text: 'استكشف البرامج',
      href: '#programs',
    },
    image: '/hero/placeholder-programs.svg',
    imageAlt: 'Temporary placeholder image for the programs page hero',
  },
  courses: {
    title: 'الدورات التدريبية',
    subtitle: 'اختر من بين مئات الدورات',
    description: 'ادرس ما تريد بالسرعة التي تناسبك من خلال دوراتنا المتنوعة والمرنة',
    primaryCta: {
      text: 'ابدأ التعلم',
      href: '#courses',
    },
    image: '/hero/placeholder-courses.svg',
    imageAlt: 'Temporary placeholder image for the courses page hero',
  },
  partners: {
    title: 'شركاؤنا',
    subtitle: 'شراكات استراتيجية قوية',
    description: 'نتعاون مع أفضل المؤسسات والشركات لتقديم خدمات تدريبية متميزة وموثوقة',
    primaryCta: {
      text: 'كن شريكاً معنا',
      href: '/contact',
    },
    image: '/hero/placeholder-partners.svg',
    imageAlt: 'Temporary placeholder image for the partners page hero',
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا لمساعدتك',
    description: 'لا تتردد في التواصل معنا لأي استفسار أو طلب معلومات إضافية عن خدماتنا',
    primaryCta: {
      text: 'أرسل رسالة',
      href: '#form',
    },
    image: '/hero/placeholder-contact.svg',
    imageAlt: 'Temporary placeholder image for the contact page hero',
  },
}

export const visionMission = {
  vision: {
    title: 'رؤيتنا',
    description: 'أن نكون منصة التدريب الأولى في الوطن العربي في تطوير المهارات والكفاءات المهنية.',
  },
  mission: {
    title: 'رسالتنا',
    description: 'تقديم برامج تدريبية عالية الجودة وخدمات استشارية احترافية تساهم في تطوير الأفراد والمؤسسات وتعزيز كفاءاتهم المهنية.',
  },
  values: [
    {
      title: 'الجودة',
      description: 'التزامنا بتقديم محتوى تدريبي عالي الجودة ومدربين متخصصين',
    },
    {
      title: 'الابتكار',
      description: 'استخدام أحدث التقنيات والأساليب في التدريب والتعليم',
    },
    {
      title: 'الاحترافية',
      description: 'معاملة احترافية شاملة من التسجيل إلى الشهادة',
    },
    {
      title: 'التطور المستمر',
      description: 'تحديث البرامج والمحتوى بناءً على احتياجات السوق',
    },
  ],
}
