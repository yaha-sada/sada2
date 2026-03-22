import Link from 'next/link'
import CourseCard from '@/components/cards/CourseCard'
import { Course } from '@/data/courses'

interface CoursesSectionProps {
  courses: Course[]
  title?: string
  subtitle?: string
  description?: string
  showViewAll?: boolean
}

export default function CoursesSection({
  courses,
  title,
  subtitle,
  description,
  showViewAll = true,
}: CoursesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className="animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="flex justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              عرض جميع الدورات
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
