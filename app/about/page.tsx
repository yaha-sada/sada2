import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import { heroContent, visionMission } from '@/data/hero'
import { stats } from '@/data/site'

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.about} />

      {/* About Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground text-justify leading-relaxed mb-12">
              تأسست منصة صدى للخبرات والاستشارات برؤية واضحة لتطوير المهارات والكفاءات المهنية للأفراد والمؤسسات. نحن نؤمن بأن التعليم والتدريب المستمر هو المفتاح إلى النجاح والتطور في عالم متغير بسرعة.
            </p>
            <p className="text-xl text-muted-foreground text-justify leading-relaxed">
              على مدار السنوات، قدمنا برامج تدريبية متخصصة ودعمنا آلاف المتدربين في تحقيق أهدافهم المهنية. نحن ملتزمون بتقديم محتوى عالي الجودة، مدربين متخصصين، ودعم شامل لكل متدرب.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <div className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {visionMission.vision.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {visionMission.vision.description}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {visionMission.mission.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {visionMission.mission.description}
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              قيمنا الأساسية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionMission.values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection
        stats={stats}
        title="إنجازاتنا"
        subtitle="أرقام تتحدث عن نجاحنا"
      />

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">فريقنا المتخصص</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              فريق من المحترفين المتخصصين الملتزمين بتقديم أفضل خدمة تدريبية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'المدربون المتخصصون',
                description: 'مدربون ذوو خبرة عملية وأكاديمية عالية',
              },
              {
                name: 'فريق الدعم',
                description: 'فريق مخصص لدعم المتدربين والإجابة على الاستفسارات',
              },
              {
                name: 'فريق التطوير',
                description: 'متخصصون في تطوير المحتوى والبرامج التدريبية',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-secondary/50 rounded-lg border border-border p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary">👥</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
