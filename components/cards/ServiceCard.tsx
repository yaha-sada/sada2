import { Service } from '@/data/services'
import {
  Video,
  PlayCircle,
  Users,
  Award,
  ArrowLeft,
} from 'lucide-react'

const iconMap = {
  video: Video,
  'play-circle': PlayCircle,
  users: Users,
  award: Award,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="group relative bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-all duration-300">
      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
          {service.badge}
        </div>
      )}

      {/* Icon */}
      {Icon && (
        <div className="mb-6 inline-block p-4 bg-secondary rounded-lg text-primary">
          <Icon className="w-6 h-6" />
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Features Preview */}
      <div className="mb-6 space-y-2">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
            <span className="text-primary mt-1">•</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
        اعرف المزيد
        <ArrowLeft className="w-4 h-4" />
      </div>
    </div>
  )
}
