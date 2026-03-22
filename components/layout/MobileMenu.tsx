'use client'

import Link from 'next/link'
import { navigationLinks } from '@/data/navigation'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden border-t border-border bg-background">
      <div className="px-4 py-6 space-y-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-4 border-t border-border">
          <Link
            href="/courses"
            onClick={onClose}
            className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-all"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>
    </div>
  )
}
