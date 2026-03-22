import { Partner } from '@/data/partners'

interface PartnerCardProps {
  partner: Partner
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="group bg-card rounded-lg border border-border p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center">
      {/* Logo Placeholder */}
      <div className="w-24 h-24 bg-secondary rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">{partner.name.substring(0, 2)}</p>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
        {partner.name}
      </h3>

      {/* Category */}
      <p className="text-xs text-primary font-medium mb-4">
        {partner.category}
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-grow">
        {partner.description}
      </p>

      {/* Visit Button */}
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-all"
      >
        زيارة الموقع
      </a>
    </div>
  )
}
