"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import BookingModal from "@/components/booking-modal"

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    image: "/m1.webp?height=600&width=800",
    title: "Bridal Full Hand",
    category: "bridal",
    description: "Intricate bridal design covering the full hand with traditional motifs and personalized elements.",
  },
  {
    id: 2,
    image: "/m7.jpeg?height=800&width=600",
    title: "Arabic Floral Pattern",
    category: "arabic",
    description: "Bold Arabic design with floral patterns and negative space creating an elegant look.",
  },
  {
    id: 3,
    image: "/m8.jpg?height=600&width=800",
    title: "Traditional Rajasthani",
    category: "traditional",
    description: "Classic Rajasthani design with peacock motifs and intricate detailing.",
  },
  {
    id: 4,
    image: "/m9.jpg?height=800&width=600",
    title: "Modern Minimalist",
    category: "modern",
    description: "Contemporary design with clean lines and minimalist approach for the modern client.",
  },
  {
    id: 5,
    image: "/m3.webp?height=600&width=800",
    title: "Bridal Feet Design",
    category: "bridal",
    description: "Elaborate feet design for brides with traditional patterns and symbolic elements.",
  },
  {
    id: 6,
    image: "/m10.jpg?height=800&width=600",
    title: "Indo-Arabic Fusion",
    category: "arabic",
    description: "Fusion design combining elements of Indian and Arabic styles for a unique look.",
  },
  {
    id: 7,
    image: "/m12.jpg?height=600&width=800",
    title: "Festival Special",
    category: "traditional",
    description: "Festive design perfect for celebrations like Karva Chauth, Teej, or Diwali.",
  },
  {
    id: 8,
    image: "/m11.jpg?height=800&width=600",
    title: "Contemporary Geometric",
    category: "modern",
    description: "Modern geometric patterns with a contemporary twist on traditional mehendi.",
  },
  {
    id: 9,
    image: "/m13.jpg?height=600&width=800",
    title: "Bridal Back Hand",
    category: "bridal",
    description: "Detailed back hand design for brides with intricate patterns and fine detailing.",
  },
  {
    id: 10,
    image: "/m14.jpg?height=800&width=600",
    title: "Arabic Bracelet",
    category: "arabic",
    description: "Elegant bracelet-style Arabic design with bold patterns and clean lines.",
  },
  {
    id: 11,
    image: "/m15.jpg?height=600&width=800",
    title: "Traditional Dulhan",
    category: "traditional",
    description: "Classic bridal design with traditional motifs and intricate detailing.",
  },
  {
    id: 12,
    image: "/38.jpg?height=800&width=600",
    title: "Modern Asymmetric",
    category: "modern",
    description: "Contemporary asymmetric design with a mix of traditional and modern elements.",
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<null | {
    image: string
    title: string
    description: string
  }>(null)

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our collection of mehendi designs showcasing the artistry and creativity of Karan Mehndi Art.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Designs
            </Button>
            <Button
              variant={filter === "bridal" ? "default" : "outline"}
              onClick={() => setFilter("bridal")}
              className={filter === "bridal" ? "bg-primary text-primary-foreground" : ""}
            >
              Bridal
            </Button>
            <Button
              variant={filter === "arabic" ? "default" : "outline"}
              onClick={() => setFilter("arabic")}
              className={filter === "arabic" ? "bg-primary text-primary-foreground" : ""}
            >
              Arabic
            </Button>
            <Button
              variant={filter === "traditional" ? "default" : "outline"}
              onClick={() => setFilter("traditional")}
              className={filter === "traditional" ? "bg-primary text-primary-foreground" : ""}
            >
              Traditional
            </Button>
            <Button
              variant={filter === "modern" ? "default" : "outline"}
              onClick={() => setFilter("modern")}
              className={filter === "modern" ? "bg-primary text-primary-foreground" : ""}
            >
              Modern
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="image-hover-zoom cursor-pointer"
                onClick={() =>
                  setLightboxImage({
                    image: item.image,
                    title: item.title,
                    description: item.description,
                  })
                }
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg mb-4">No designs found in this category.</p>
              <Button onClick={() => setFilter("all")}>View All Designs</Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-card max-w-4xl w-full rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <div className="relative h-[50vh] md:h-[70vh]">
              <Image
                src={lightboxImage.image || "/placeholder.svg"}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-muted-foreground">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your appointment today and let us create a beautiful design tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BookingModal
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Book Now
                </Button>
              }
            />
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

