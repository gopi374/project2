"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"
import BookingModal from "@/components/booking-modal"

// Sample video items
const videoItems = [
  {
    id: 1,
    thumbnail: "/29.jpg?height=600&width=800",
    title: "Bridal Mehendi Tutorial",
    category: "tutorial",
    description: "Learn how to create a beautiful bridal mehendi design with step-by-step instructions.",
    videoId: "oGouOGszlp8",
  },
  {
    id: 2,
    thumbnail: "/37.jpg?height=600&width=800",
    title: "Behind the Scenes: Celebrity Wedding",
    category: "behind-the-scenes",
    description: "Get a glimpse of our team creating mehendi designs for a high-profile wedding in Hydrabad.",
    videoId: "lu1lyfWwXv4",
  },
  {
    id: 3,
    thumbnail: "/61.jpg?height=600&width=800",
    title: "Arabic Mehendi Basics",
    category: "tutorial",
    description: "Master the fundamentals of Arabic mehendi with this comprehensive tutorial.",
    videoId: "fPzNIfruTUg",
  },
  {
    id: 4,
    thumbnail: "/71.jpeg?height=600&width=800",
    title: "Destination Wedding in Udaipur",
    category: "behind-the-scenes",
    description:
      "Follow us to a royal destination wedding in Udaipur where we created mehendi for the entire bridal party.",
    videoId: "Bmku0w5zbV4",
  },
  {
    id: 5,
    thumbnail: "/63.jpg?height=600&width=800",
    title: "Quick Festive Designs",
    category: "tutorial",
    description: "Learn how to create quick and beautiful mehendi designs perfect for festivals and celebrations.",
    videoId: "SnWw7-gs0pQ",
  },
  {
    id: 6,
    thumbnail: "/64.jpg?height=600&width=800",
    title: "Mehendi Workshop Highlights",
    category: "behind-the-scenes",
    description:
      "Highlights from our recent mehendi workshop where we taught enthusiasts the art of henna application.",
    videoId: "lu1lyfWwXv4",
  },
]

export default function VideosPage() {
  const [filter, setFilter] = useState("all")
  const [activeVideo, setActiveVideo] = useState<null | {
    videoId: string
    title: string
    description: string
  }>(null)

  const filteredVideos = filter === "all" ? videoItems : videoItems.filter((item) => item.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Watch tutorials, behind-the-scenes footage, and more from Karan Mehndi Art.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Videos
            </Button>
            <Button
              variant={filter === "tutorial" ? "default" : "outline"}
              onClick={() => setFilter("tutorial")}
              className={filter === "tutorial" ? "bg-primary text-primary-foreground" : ""}
            >
              Tutorials
            </Button>
            <Button
              variant={filter === "behind-the-scenes" ? "default" : "outline"}
              onClick={() => setFilter("behind-the-scenes")}
              className={filter === "behind-the-scenes" ? "bg-primary text-primary-foreground" : ""}
            >
              Behind the Scenes
            </Button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div
                  className="relative h-48 group cursor-pointer"
                  onClick={() =>
                    setActiveVideo({
                      videoId: video.videoId,
                      title: video.title,
                      description: video.description,
                    })
                  }
                >
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play size={30} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 capitalize">{video.category.replace("-", " ")}</p>
                  <p className="text-sm line-clamp-2">{video.description}</p>
                  <Button
                    variant="link"
                    className="p-0 mt-2 text-primary"
                    onClick={() =>
                      setActiveVideo({
                        videoId: video.videoId,
                        title: video.title,
                        description: video.description,
                      })
                    }
                  >
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg mb-4">No videos found in this category.</p>
              <Button onClick={() => setFilter("all")}>View All Videos</Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-card max-w-4xl w-full rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{activeVideo.title}</h3>
              <p className="text-muted-foreground">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Subscribe Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom text-center">
          <h2 className="section-title inline-block mb-6">Subscribe to Our Channel</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Stay updated with our latest videos, tutorials, and behind-the-scenes content by subscribing to our YouTube
            channel.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Artistry in Person?</h2>
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

