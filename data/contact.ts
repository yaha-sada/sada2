export interface ContactInfo {
  type: string
  value: string
  display: string
  icon: string
}

export const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    value: 'yahyamuhammad1235@gmail.com',
    display: 'yahyamuhammad1235@gmail.com',
    icon: 'mail',
  },
  {
    type: 'phone',
    value: '+967775297958',
    display: '+967 77 529 7958',
    icon: 'phone',
  },
  {
    type: 'location',
    value: 'اليمن',
    display: 'صنعاء - اليمن',
    icon: 'map-pin',
  },
]

export const businessHours = [
  {
    day: 'السبت',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الأحد',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الاثنين',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الثلاثاء',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الأربعاء',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الخميس',
    hours: '09:00 - 18:00',
    isOpen: true,
  },
  {
    day: 'الجمعة',
    hours: 'مغلق',
    isOpen: false,
  },
]

export const supportChannels = [
  {
    name: 'الدعم عبر البريد الإلكتروني',
    description: 'أرسل لنا بريداً إلكترونياً وسنرد عليك خلال 24 ساعة',
    icon: 'mail',
    action: 'البريد الإلكتروني',
    href: 'mailto:yahyamuhammad1235@gmail.com',
  },
  {
    name: 'الدعم عبر الهاتف',
    description: 'اتصل بنا مباشرة في ساعات العمل للحصول على دعم فوري',
    icon: 'phone',
    action: 'اتصل بنا',
    href: 'tel:+967775297958',
  },
  {
    name: 'نموذج التواصل',
    description: 'ملء النموذج أدناه وسنتصل بك في أقرب وقت',
    icon: 'message-square',
    action: 'أرسل رسالة',
    href: '#form',
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    icon: 'facebook',
    url: '#',
    color: '#1877F2',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: '#',
    color: '#1DA1F2',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: '#',
    color: '#0A66C2',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: '#',
    color: '#E4405F',
  },
]
