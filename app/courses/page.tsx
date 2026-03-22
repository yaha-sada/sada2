'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CourseCard from '@/components/cards/CourseCard'
import { heroContent } from '@/data/hero'
import { courses, courseFilters } from '@/data/courses'
import { Search, Filter, X } from 'lucide-react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('جميع الفئات')
  const [selectedLevel, setSelectedLevel] = useState('جميع المستويات')
  const [selectedMode, setSelectedMode] = useState('جميع الأنماط')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Filter courses based on selections
  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      selectedCategory === 'جميع الفئات' || course.category === selectedCategory
    const matchLevel =
      selectedLevel === 'جميع المستويات' || course.level === selectedLevel
    const matchMode = selectedMode === 'جميع الأنماط' || course.mode === selectedMode
    const matchSearch = searchQuery === '' ||
      course.title.includes(searchQuery) ||
      course.description.includes(searchQuery)

    return matchCategory && matchLevel && matchMode && matchSearch
  })

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection content={heroContent.courses} />

      {/* Filters and Courses */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-container mx-auto px-4 md:px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن دورة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mb-6 px-4 py-2 flex items-center gap-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>الفلاتر</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div
              className={`${
                showFilters ? 'block' : 'hidden'
              } md:block bg-card rounded-lg border border-border p-6`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">الفلاتر</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">
                  الفئة
                </h4>
                <div className="space-y-2">
                  {courseFilters.categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-foreground">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-border my-4" />

              {/* Level Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">
                  المستوى
                </h4>
                <div className="space-y-2">
                  {courseFilters.levels.map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="level"
                        value={level}
                        checked={selectedLevel === level}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-foreground">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-border my-4" />

              {/* Mode Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">
                  نمط التدريب
                </h4>
                <div className="space-y-2">
                  {courseFilters.modes.map((mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="mode"
                        value={mode}
                        checked={selectedMode === mode}
                        onChange={(e) => setSelectedMode(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-foreground">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {(selectedCategory !== 'جميع الفئات' ||
                selectedLevel !== 'جميع المستويات' ||
                selectedMode !== 'جميع الأنماط' ||
                searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('جميع الفئات')
                    setSelectedLevel('جميع المستويات')
                    setSelectedMode('جميع الأنماط')
                    setSearchQuery('')
                  }}
                  className="w-full py-2 text-primary border border-primary rounded-lg text-sm hover:bg-primary/10 transition-all"
                >
                  إعادة تعيين
                </button>
              )}
            </div>

            {/* Courses Grid */}
            <div className="md:col-span-3">
              {filteredCourses.length > 0 ? (
                <div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {filteredCourses.length} دورة
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    لا توجد دورات تطابق فلاتراتك
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('جميع الفئات')
                      setSelectedLevel('جميع المستويات')
                      setSelectedMode('جميع الأنماط')
                      setSearchQuery('')
                    }}
                    className="mt-4 px-4 py-2 text-primary border border-primary rounded-lg text-sm hover:bg-primary/10 transition-all"
                  >
                    إعادة تعيين الفلاتر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            تواصل معنا لمزيد من المعلومات عن دورات أخرى أو برامج مخصصة
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:translate-y-[-2px]"
          >
            تواصل معنا
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
