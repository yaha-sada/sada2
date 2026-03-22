import Image from "next/image";
import Link from "next/link";
import { HeroContent } from "@/data/hero";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeIn">
            <h1 className="text-foreground mb-6 text-pretty">
              {content.title}
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6 font-display">
              {content.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              {content.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={content.primaryCta.href}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-primary/90 transition-all duration-200 transform hover:translate-y-[-2px]"
              >
                {content.primaryCta.text}
              </Link>
              {content.secondaryCta && (
                <Link
                  href={content.secondaryCta.href}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-center hover:bg-primary/10 transition-all duration-200"
                >
                  {content.secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-96 w-96 max-w-full mx-auto animate-slideUp">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-contain"
                sizes="384px"
                priority={content.image === "/logo-sada.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
