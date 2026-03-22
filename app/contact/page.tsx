import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ContactForm from '@/components/forms/ContactForm'
import { heroContent } from '@/data/hero'
import { contactInfo, businessHours, supportChannels, socialLinks } from '@/data/contact'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function ContactPage() {
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
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.contact} />

      {/* Contact Information Cards */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const Icon = iconMap[info.icon as keyof typeof iconMap]
              const link =
                info.type === 'email'
                  ? `mailto:${info.value}`
                  : info.type === 'phone'
                    ? `tel:${info.value}`
                    : '#'

              return (
                <a
                  key={info.type}
                  href={link}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/50 transition-all text-center"
                >
                  <div className="inline-block p-4 bg-secondary rounded-lg text-primary mb-4">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {info.type === 'email' && 'البريد الإلكتروني'}
                    {info.type === 'phone' && 'الهاتف'}
                    {info.type === 'location' && 'العنوان'}
                  </h3>
                  <p className="text-muted-foreground">{info.display}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Hours */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card rounded-lg border border-border p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">أرسل لنا رسالة</h2>
              <ContactForm />
            </div>

            {/* Business Hours and Info */}
            <div>
              {/* Business Hours */}
              <div className="bg-card rounded-lg border border-border p-6 mb-6">
                <h3 className="text-xl font-bold text-foreground mb-6">ساعات العمل</h3>
                <div className="space-y-3">
                  {businessHours.map((hour) => (
                    <div
                      key={hour.day}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-foreground font-medium">{hour.day}</span>
                      <span
                        className={
                          hour.isOpen
                            ? 'text-primary'
                            : 'text-muted-foreground line-through'
                        }
                      >
                        {hour.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">تابعنا</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.icon as keyof typeof socialIconMap]
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        className="flex items-center justify-center gap-2 p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-colors"
                        title={link.name}
                      >
                        {Icon && <Icon className="w-5 h-5 text-primary" />}
                        <span className="text-xs font-medium text-foreground">
                          {link.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">قنوات الدعم</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الطريقة التي تفضلها للتواصل معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, idx) => {
              const Icon =
                channel.icon === 'mail'
                  ? Mail
                  : channel.icon === 'phone'
                    ? Phone
                    : channel.icon === 'message-square'
                      ? (props: any) => (
                          <svg
                            {...props}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        )
                      : Mail

              return (
                <div
                  key={channel.name}
                  className="bg-card rounded-lg border border-border p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="inline-block p-4 bg-secondary rounded-lg text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
                  >
                    {channel.action}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                question: 'ما هي طرق الدفع المقبولة؟',
                answer: 'نقبل جميع طرق الدفع الرئيسية بما فيها البطاقات الائتمانية والتحويلات البنكية وعبر المحافظ الرقمية.',
              },
              {
                question: 'هل يمكنني إلغاء التسجيل؟',
                answer: 'نعم، يمكنك إلغاء التسجيل في أي وقت بدون مشاكل. تتاح لك خيارات استرجاع الأموال حسب شروط معينة.',
              },
              {
                question: 'كم يستغرق الحصول على الشهادة؟',
                answer: 'بعد اكمالك للدورة بنجاح، ستحصل على الشهادة رقمياً خلال 24 ساعة.',
              },
              {
                question: 'هل هناك دعم تقني؟',
                answer: 'نعم، فريق الدعم التقني متاح 24/7 للإجابة على استفساراتك وحل أي مشاكل تواجهك.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-card rounded-lg border border-border p-6 cursor-pointer hover:border-primary/50 transition-colors"
              >
                <summary className="font-bold text-foreground flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-primary">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
