import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking-modal"
import { Leaf, Paintbrush, Clock, Award, Heart, Users, Sparkles, Palette } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Natural Ingredients",
    description:
      "We use only 100% natural henna powder mixed with essential oils and natural ingredients for safe application and rich color.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Intricate Designs",
    description:
      "Our artists specialize in creating detailed, intricate patterns that showcase the beauty and complexity of traditional and modern mehendi art.",
    icon: Paintbrush,
  },
  {
    id: 3,
    title: "Punctuality",
    description:
      "We value your time and ensure that our services are delivered promptly, especially for important events like weddings.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Award-Winning Artist",
    description:
      "Karan has been recognized for his exceptional talent, winning multiple awards in mehendi competitions across India.",
    icon: Award,
  },
  {
    id: 5,
    title: "Personalized Experience",
    description:
      "We take the time to understand your preferences and create designs that reflect your personality and the occasion.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Group Bookings",
    description: "We offer special packages for weddings and events, with multiple artists available for large groups.",
    icon: Users,
  },
  {
    id: 7,
    title: "Premium Service",
    description:
      "From consultation to aftercare advice, we provide a premium experience that goes beyond just applying mehendi.",
    icon: Sparkles,
  },
  {
    id: 8,
    title: "Diverse Styles",
    description:
      "We are proficient in various mehendi styles including Indian, Arabic, Indo-Arabic fusion, and contemporary designs.",
    icon: Palette,
  },
]

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover what sets Karan Mehndi Art apart and why we're the preferred choice for mehendi services in
              Hydrabad.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-card rounded-lg p-6 shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">How We Compare</h2>
            <p className="mt-4 max-w-2xl mx-auto">See how Karan Mehndi Art stands out from other mehendi services.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-primary text-primary-foreground rounded-tl-lg">Features</th>
                  <th className="p-4 text-center bg-primary text-primary-foreground">Karan Mehndi Art</th>
                  <th className="p-4 text-center bg-primary text-primary-foreground rounded-tr-lg">Other Services</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 bg-card">100% Natural Ingredients</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">Yes</td>
                  <td className="p-4 text-center bg-card">Varies</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 bg-card">Customized Designs</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">Yes</td>
                  <td className="p-4 text-center bg-card">Limited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 bg-card">Consultation Session</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">Yes</td>
                  <td className="p-4 text-center bg-card">Rarely</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 bg-card">Aftercare Advice</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">Detailed</td>
                  <td className="p-4 text-center bg-card">Basic</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 bg-card">Experience Level</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">10+ Years</td>
                  <td className="p-4 text-center bg-card">Varies</td>
                </tr>
                <tr>
                  <td className="p-4 bg-card rounded-bl-lg">Satisfaction Guarantee</td>
                  <td className="p-4 text-center bg-card text-green-600 font-bold">100%</td>
                  <td className="p-4 text-center bg-card rounded-br-lg">Rarely</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto">Read about some of our most memorable client experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/Deepika-mehendi-featured.webp?height=600&width=800"
                  alt="Celebrity Wedding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Celebrity Wedding in Mumbai</h3>
                <p className="mb-4">
                  When Bollywood actress Mira Kapoor was getting married, she chose Karan for her bridal mehendi. The
                  intricate designs, which took over 8 hours to complete, became the talk of the town and were featured
                  in several fashion magazines.
                </p>
                <div className="italic text-muted-foreground">
                  "Karan's artistry added magic to my special day. The designs were breathtaking and lasted throughout
                  my wedding festivities."
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/ud.webp?height=600&width=800"
                  alt="Destination Wedding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Destination Wedding in Udaipur</h3>
                <p className="mb-4">
                  For a high-profile destination wedding at the Lake Palace in Udaipur, Karan and his team traveled to
                  create mehendi art for the bride and over 50 guests. The fusion of Rajasthani and Arabic designs was a
                  huge hit among the international guests.
                </p>
                <div className="italic text-muted-foreground">
                  "Having Karan at our destination wedding was the best decision. His team managed to create unique
                  designs for all our guests, making it a memorable experience."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Our Process</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Understanding how we work helps you know what to expect when you choose Karan Mehndi Art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-primary">Consultation</h3>
              <p>
                We begin with a detailed consultation to understand your preferences, the occasion, and any specific
                elements you'd like to incorporate in your design.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-primary">Design & Application</h3>
              <p>
                Based on your input, we create and apply a custom design using our premium natural henna paste, ensuring
                comfort and precision throughout the process.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-primary">Aftercare</h3>
              <p>
                We provide detailed aftercare instructions to ensure your mehendi develops a rich color and lasts as
                long as possible, along with follow-up support if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Ready to experience the exceptional mehendi artistry that has made Karan Mehndi Art the preferred choice in
            Mumbai?
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

