import ServiceCard from '@/components/cards/ServiceCard'
import { Service } from '@/data/services'

interface ServicesSectionProps {
  services: Service[]
  title?: string
  subtitle?: string
  description?: string
}

export default function ServicesSection({
  services,
  title,
  subtitle,
  description,
}: ServicesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-container mx-auto px-4 md:px-6">
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-foreground mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-2xl text-primary font-semibold font-display mb-4">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
