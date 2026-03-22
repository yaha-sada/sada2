import StatCard from '@/components/cards/StatCard'

interface Stat {
  number: string
  label: string
  description: string
}

interface StatsSectionProps {
  stats: Stat[]
  title?: string
  subtitle?: string
}

export default function StatsSection({
  stats,
  title,
  subtitle,
}: StatsSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-container mx-auto px-4 md:px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-foreground mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
              <StatCard
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
