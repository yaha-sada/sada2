import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import { heroContent } from '@/data/hero'
import { services, serviceCategories } from '@/data/services'

export default function ProgramsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.programs} />

      {/* Main Services */}
      <ServicesSection
        services={services}
        title="برامجنا التدريبية"
        subtitle="حلول متكاملة لتطويرك"
      />

      {/* Service Categories */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">مجالات التدريب</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم برامج متخصصة في عدة مجالات حسب احتياجات السوق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, idx) => (
              <div
                key={category.id}
                className="bg-card rounded-lg border border-border p-8 hover:shadow-lg hover:border-primary/50 transition-all animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-block p-4 bg-secondary rounded-lg text-primary mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.courses} دورات تدريبية
                </p>
                <a
                  href="/courses"
                  className="text-primary font-medium text-sm hover:translate-x-1 transition-transform inline-block"
                >
                  استكشف الدورات ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">أنماط التدريب</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر النمط الذي يناسب احتياجاتك وجدولك الزمني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'التدريب المباشر',
                description: 'جلسات مباشرة عبر الإنترنت مع مدربين متخصصين',
                icon: '🎥',
                features: [
                  'تفاعل مباشر',
                  'جدول منتظم',
                  'شهادة معتمدة',
                  'دعم فوري',
                ],
              },
              {
                title: 'التدريب المسجل',
                description: 'محتوى مسجل بجودة عالية تتعلم به بسرعتك',
                icon: '⏯️',
                features: [
                  'تعلم بحرية',
                  'وصول مدى الحياة',
                  'إعادة المشاهدة',
                  'محتوى شامل',
                ],
              },
              {
                title: 'التدريب الحضوري',
                description: 'برامج مكثفة حضورية للتعلم المباشر',
                icon: '👥',
                features: [
                  'تدريب عملي',
                  'شبكة احترافية',
                  'وجهاً لوجه',
                  'غداء ومشروبات',
                ],
              },
            ].map((mode, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{mode.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground mb-6">{mode.description}</p>
                <ul className="space-y-2">
                  {mode.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Programs Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary rounded-lg" />
            </div>
            <div>
              <h2 className="text-foreground mb-6">لماذا اختر برامجنا؟</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'محتوى معاصر',
                    description: 'برامج محدثة تتماشى مع احتياجات السوق الحالية',
                  },
                  {
                    title: 'مرونة عالية',
                    description: 'خيارات متعددة للتدريب تناسب جميع الأنماط',
                  },
                  {
                    title: 'شهادات موثوقة',
                    description: 'شهادات معتمدة ومعترفة من جهات متخصصة',
                  },
                  {
                    title: 'دعم متكامل',
                    description: 'فريق دعم مخصص لمساعدتك طوال رحلتك',
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-foreground mb-6">ابدأ رحلتك التدريبية معنا</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            اختر البرنامج المناسب لك وابدأ التطور المهني الآن
          </p>
          <a
            href="/courses"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:translate-y-[-2px]"
          >
            اكتشف البرامج
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
