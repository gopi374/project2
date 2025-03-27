import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking-modal"
import TestimonialsCarousel from "@/components/testimonials-carousel"

const milestones = [
  {
    year: 2015,
    title: "Beginning the Journey",
    description: "Karan started his mehendi art journey, learning traditional techniques from master artists.",
  },
  {
    year: 2017,
    title: "First Studio",
    description: "Opened the first Karan Mehndi Art studio in Hydrabad, offering services to local clients.",
  },
  {
    year: 2019,
    title: "Celebrity Clientele",
    description: "Expanded to serving celebrity clients and high-profile weddings across India.",
  },
  {
    year: 2021,
    title: "1000+ Happy Brides",
    description: "Reached the milestone of serving over 1000 brides with unique, personalized designs.",
  },
  {
    year: 2023,
    title: "International Recognition",
    description: "Gained international recognition and started offering workshops and masterclasses.",
  },
  {
    year: 2025,
    title: "Digital Expansion",
    description: "Launched online booking and virtual consultations to serve clients worldwide.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Learn about Karan Mehndi Art's journey, passion, and commitment to preserving and innovating the ancient
              art of mehendi.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Profile */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/hari.png?height=800&width=600"
                  alt="Karan - Mehendi Artist"
                  width={600}
                  height={800}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>

            <div>
              <h2 className="section-title">Meet Karan</h2>
              <p className="mb-6 text-lg">
                Karan is a passionate mehendi artist with over a decade of experience in creating intricate and
                beautiful designs that tell stories and capture emotions.
              </p>
              <p className="mb-6">
                His journey began in 2015 when he started learning the art from his grandmother, who was a renowned
                mehendi artist in her time. Combining traditional techniques with modern innovations, Karan has
                developed a unique style that blends cultural heritage with contemporary aesthetics.
              </p>
              <p className="mb-6">
                With a background in fine arts and a deep understanding of cultural symbolism, Karan creates designs
                that are not just visually stunning but also meaningful and personalized for each client.
              </p>
              <p className="mb-8">
                Today, Karan is recognized as one of Hydrabad's premier mehendi artists, serving clients from all walks of
                life, from brides-to-be to celebrities, and everyone who appreciates the beauty of this ancient art
                form.
              </p>
              <BookingModal />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Our Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Explore the milestones that have shaped Karan Mehndi Art into what it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Year Bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 hidden md:flex">
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-6">
                      <div className={`bg-card rounded-lg shadow-md p-6 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                        <div className="flex items-center mb-4 md:hidden">
                          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <h3 className="text-xl font-bold mb-2 hidden md:block">{milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                    </div>

                    {/* Empty Space for Alignment */}
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Client Testimonials</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with Karan Mehndi Art.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Values and Mission */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At Karan Mehndi Art, our mission is to preserve and promote the ancient art of mehendi while innovating
                and adapting it to contemporary aesthetics and preferences.
              </p>
              <p>
                We strive to create designs that not only adorn the body but also tell stories, celebrate traditions,
                and create lasting memories for our clients. Through our art, we aim to bridge cultures, generations,
                and communities, sharing the beauty and significance of mehendi with the world.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-3 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Artistry</h3>
                    <p>
                      We approach each design as a unique work of art, putting creativity and craftsmanship at the heart
                      of everything we do.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-3 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Authenticity</h3>
                    <p>
                      We honor traditional techniques and natural ingredients while embracing innovation and personal
                      expression.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-3 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Client-Centered</h3>
                    <p>
                      We listen to our clients' visions and preferences, creating personalized experiences and designs
                      that reflect their unique stories.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Artistry?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your appointment with Karan and become a part of our continuing journey in the world of mehendi art.
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

