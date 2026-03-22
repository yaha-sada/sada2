import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CoursesSection from '@/components/sections/CoursesSection'
import PartnersSection from '@/components/sections/PartnersSection'
import { heroContent } from '@/data/hero'
import { stats } from '@/data/site'
import { services } from '@/data/services'
import { courses } from '@/data/courses'
import { partners } from '@/data/partners'

export default function Home() {
  // Get first 6 courses for featured section
  const featuredCourses = courses.slice(0, 6)

  // Get first 6 partners
  const featuredPartners = partners.slice(0, 6)

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.home} />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Services Section */}
      <ServicesSection
        services={services}
        title="خدماتنا المتخصصة"
        subtitle="حلول تدريبية متكاملة"
        description="نقدم برامج تدريبية متنوعة تناسب احتياجات الأفراد والمؤسسات"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-foreground mb-6">لماذا اختر منصة صدى؟</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'مدربون متخصصون',
                    description: 'فريق من المدربين ذوي الخبرة العملية والأكاديمية',
                  },
                  {
                    title: 'برامج معتمدة',
                    description: 'جميع برامجنا معتمدة وموثقة من جهات متخصصة',
                  },
                  {
                    title: 'مرونة في التعلم',
                    description: 'تعلم بسرعتك الخاصة مع خيارات متعددة للتدريب',
                  },
                  {
                    title: 'دعم مستمر',
                    description: 'فريق دعم جاهز للإجابة على استفساراتك دائماً',
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
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <CoursesSection
        courses={featuredCourses}
        title="دوراتنا المميزة"
        subtitle="تعلم من الخبراء"
        description="استكشف أشهر دوراتنا التي اختارها آلاف المتدربين"
      />

      {/* Partners Section */}
      <PartnersSection
        partners={featuredPartners}
        title="شركاؤنا الموثوقون"
        subtitle="تعاون مع أفضل المؤسسات"
      />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            هل أنت مستعد لتطوير مهاراتك؟
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المتدربين الذين غيروا حياتهم المهنية معنا
          </p>
          <a
            href="/courses"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:translate-y-[-2px]"
          >
            ابدأ التعلم الآن
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
