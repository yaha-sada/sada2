import { Course } from '@/data/courses'
import { Star, Users, Clock, Tag } from 'lucide-react'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <Tag className="w-8 h-8 text-primary/50 mx-auto mb-2" />
          <p className="text-sm text-primary/70">{course.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-3 w-fit">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
            {course.level}
          </span>
          <span className="bg-secondary text-primary px-2 py-1 rounded text-xs font-medium">
            {course.mode}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>

        {/* Description */}
        <p className="text-sm text-foreground/70 mb-6 line-clamp-2 flex-grow">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.learners.toLocaleString()} متدرب</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>
              {course.rating} ({course.reviews})
            </span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-bold text-foreground">{course.price} ريال</p>
            {course.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {course.originalPrice} ريال
              </p>
            )}
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  )
}
