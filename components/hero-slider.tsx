"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/m2.webp",
    alt: "Bridal mehendi design",
  },
  {
    id: 2,
    image: "/10144361.jpg",
    alt: "Intricate mehendi pattern",
  },
  {
    id: 3,
    image: "/m2.webp",
    alt: "Arabic mehendi design",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider

