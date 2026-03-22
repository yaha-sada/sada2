import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { footerLinks } from '@/data/navigation'
import { contactInfo, socialLinks } from '@/data/contact'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    mail: Mail,
    phone: Phone,
    'map-pin': MapPin,
  }

  const socialIconMap = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  }

  return (
    <footer className="bg-zinc-900 text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-4 text-white/95">صدى</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              منصة متخصصة في تطوير المهارات والكفاءات للأفراد والمؤسسات
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon as keyof typeof socialIconMap]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="p-2.5 bg-white/10 hover:bg-primary/40 rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white/95 text-lg">عن المنصة</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary/80 transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white/95 text-lg">البرامج</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary/80 transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white/95 text-lg">الموارد</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary/80 transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-white/95 text-lg">تواصل معنا</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <a
                    key={info.type}
                    href={
                      info.type === 'email'
                        ? `mailto:${info.value}`
                        : info.type === 'phone'
                          ? `tel:${info.value}`
                          : '#'
                    }
                    className="flex items-start gap-3 text-white/70 hover:text-primary/80 transition-all duration-200 text-sm font-medium group"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary/80 transition-colors" />
                    <span>{info.display}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            جميع الحقوق محفوظة © {currentYear} منصة صدى للخبرات والاستشارات
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-primary/80 transition-all duration-200">
              سياسة الخصوصية
            </Link>
            <Link href="#terms" className="hover:text-primary/80 transition-all duration-200">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
