"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    image: "/ap.jpeg?height=200&width=200",
    quote:
      "Karan's artistry made my wedding day even more special. The intricate designs were beyond my expectations, and the color lasted beautifully throughout my celebrations. I received countless compliments from my guests!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "Festival Celebration",
    image: "/ps.jpeg?height=200&width=200",
    quote:
      "I've been going to Karan for all my mehendi needs for years now. His creativity and attention to detail are unmatched. Always a pleasant experience! He takes the time to understand what I want and delivers beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera Kapoor",
    role: "Custom Design",
    image: "/ap2.jpeg?height=200&width=200",
    quote:
      "The custom design Karan created for me was exactly what I wanted. He listened to my ideas and transformed them into a beautiful piece of art on my hands. His patience and precision are remarkable.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ritu Desai",
    role: "Bride's Mother",
    image: "/rd.jpeg?height=200&width=200",
    quote:
      "As the mother of the bride, I wanted something elegant yet not too elaborate. Karan understood my requirements perfectly and created a design that was age-appropriate and beautiful. Highly recommend!",
    rating: 4,
  },
  {
    id: 5,
    name: "Neha Singh",
    role: "Engagement Ceremony",
    image: "/ns.jpeg?height=200&width=200",
    quote:
      "Karan did my mehendi for my engagement ceremony, and I was blown away by his talent. He incorporated elements that were meaningful to me and my fiancé, making the design truly special. Will definitely book him for my wedding!",
    rating: 5,
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "Regular Client",
    image: "/ak.jpeg?height=200&width=200",
    quote:
      "I've tried many mehendi artists in Mumbai, but Karan stands out for his consistent quality and friendly service. His designs are always fresh and innovative, even though I visit him for every festival.",
    rating: 5,
  },
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = testimonials.length - visibleItems + 1

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 p-4"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="bg-card rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                <p className="italic flex-grow">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default TestimonialsCarousel

