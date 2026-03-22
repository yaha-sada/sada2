import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PartnersSection from '@/components/sections/PartnersSection'
import { heroContent, visionMission } from '@/data/hero'
import { partners, partnershipTypes } from '@/data/partners'

export default function PartnersPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.partners} />

      {/* Partnership Types */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">أنواع الشراكات</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم خيارات متعددة للشراكة تناسب احتياجات مختلف الجهات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, idx) => (
              <div
                key={type.id}
                className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {type.name}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div className="space-y-3">
                  {type.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary rounded-lg" />
            </div>
            <div>
              <h2 className="text-foreground mb-6">لماذا تشارك معنا؟</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'شبكة قوية',
                    description: 'الوصول إلى شبكة واسعة من المتدربين والشركاء',
                  },
                  {
                    title: 'دعم متكامل',
                    description: 'فريق متخصص يدعمك في كل خطوة من الشراكة',
                  },
                  {
                    title: 'محتوى معاصر',
                    description: 'برامج محدثة تتماشى مع احتياجات السوق',
                  },
                  {
                    title: 'نمو مشترك',
                    description: 'فرص متبادلة للنمو والتطور المهني',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <PartnersSection
        partners={partners}
        title="شركاؤنا الحاليون"
        subtitle="تعاون مثمر"
      />

      {/* Partnership Process */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">خطوات الشراكة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              عملية بسيطة وسهلة للبدء في الشراكة معنا
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'التواصل الأولي',
                  description: 'تواصل معنا لمناقشة احتياجاتك ونوع الشراكة المناسبة',
                },
                {
                  step: '2',
                  title: 'المناقشة والتخطيط',
                  description: 'نناقش الشروط والمتطلبات والأهداف المشتركة',
                },
                {
                  step: '3',
                  title: 'توقيع الاتفاقية',
                  description: 'توقيع اتفاقية الشراكة الرسمية',
                },
                {
                  step: '4',
                  title: 'البدء والتنفيذ',
                  description: 'بدء تنفيذ برامج الشراكة والعمل المشترك',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                      {item.step}
                    </div>
                    {idx < 3 && (
                      <div className="h-12 w-1 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            هل أنت مهتم بالشراكة معنا؟
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            دعنا نعمل معاً لتحقيق نمو متبادل وتطور مستمر
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:translate-y-[-2px]"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
