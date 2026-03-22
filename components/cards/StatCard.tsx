interface StatCardProps {
  number: string
  label: string
  description: string
}

export default function StatCard({
  number,
  label,
  description,
}: StatCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 inline-block">
        <p className="text-5xl md:text-6xl font-bold text-primary font-display">
          {number}
        </p>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        {label}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base">
        {description}
      </p>
    </div>
  )
}
