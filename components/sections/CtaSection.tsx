import Link from 'next/link'

interface CtaSectionProps {
  title: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'primary' | 'secondary'
}

export default function CtaSection({
  title,
  description,
  buttonText = 'ابدأ الآن',
  buttonHref = '/courses',
  variant = 'primary',
}: CtaSectionProps) {
  const isPrimary = variant === 'primary'

  return (
    <section
      className={`py-20 md:py-32 ${
        isPrimary
          ? 'bg-gradient-to-r from-primary to-primary/80'
          : 'bg-secondary/20'
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-6 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isPrimary
              ? 'text-primary-foreground'
              : 'text-foreground'
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isPrimary
                ? 'text-primary-foreground/90'
                : 'text-muted-foreground'
            }`}
          >
            {description}
          </p>
        )}

        <Link
          href={buttonHref}
          className={`inline-block px-8 py-4 rounded-lg font-semibold transition-all transform hover:translate-y-[-2px] ${
            isPrimary
              ? 'bg-white text-primary hover:bg-gray-100'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
