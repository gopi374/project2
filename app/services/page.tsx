import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BookingModal from "@/components/booking-modal"

const services = [
  {
    id: "bridal",
    title: "Bridal Mehndi",
    description:
      "Elaborate, traditional designs for the bride's special day, covering hands and feet with intricate patterns that symbolize love, prosperity, and happiness.",
    image: "/m1.webp?height=600&width=800",
    pricing: "Starting from ₹15,000",
    features: [
      "Full hands and feet coverage",
      "Personalized designs",
      "Premium natural henna",
      "Complimentary touch-up",
      "Duration: 4-6 hours",
    ],
  },
  {
    id: "festive",
    title: "Festive Mehndi",
    description:
      "Beautiful designs for festivals and celebrations, adding joy and tradition to your special occasions with patterns that reflect the festive spirit.",
    image: "/m5.webp?height=600&width=800",
    pricing: "Starting from ₹2,000",
    features: [
      "Customizable coverage",
      "Traditional or modern designs",
      "High-quality natural henna",
      "Duration: 30-60 minutes",
    ],
  },
  {
    id: "arabic",
    title: "Arabic Designs",
    description:
      "Bold, floral patterns characterized by larger motifs and more negative space, creating a striking and elegant look that's perfect for any occasion.",
    image: "/m18.jpg?height=600&width=800",
    pricing: "Starting from ₹3,000",
    features: [
      "Bold, spacious patterns",
      "Floral and vine motifs",
      "Premium black henna option",
      "Duration: 1-2 hours",
    ],
  },
  {
    id: "indo-arabic",
    title: "Indo-Arabic Fusion",
    description:
      "A beautiful blend of traditional Indian intricacy with Arabic boldness, creating unique designs that offer the best of both worlds.",
    image: "/m19.jpg?height=600&width=800",
    pricing: "Starting from ₹4,000",
    features: ["Hybrid design elements", "Customizable density", "Premium henna paste", "Duration: 2-3 hours"],
  },
  {
    id: "custom",
    title: "Custom Designs",
    description:
      "Personalized mehendi art tailored to your preferences, incorporating elements that tell your unique story and reflect your personality.",
    image: "/m4.jpg?height=600&width=800",
    pricing: "Starting from ₹5,000",
    features: [
      "Consultation session",
      "Personalized motifs",
      "Story-telling elements",
      "Premium natural ingredients",
      "Duration: Varies",
    ],
  },
  {
    id: "group",
    title: "Group Bookings",
    description:
      "Special packages for events like weddings, parties, and corporate functions, bringing the joy of mehendi to all your guests.",
    image: "/m20.jpg?height=600&width=800",
    pricing: "Starting from ₹10,000",
    features: [
      "Multiple artists available",
      "Bulk discounts",
      "Variety of design options",
      "Flexible scheduling",
      "Duration: Based on group size",
    ],
  },
]

const faqs = [
  {
    question: "How long does mehendi last on the skin?",
    answer:
      "Typically, mehendi lasts between 1-3 weeks depending on the quality of henna used, your skin type, and how well you care for it after application. The color is usually darkest in the first 48-72 hours and gradually fades over time.",
  },
  {
    question: "How can I make my mehendi darker and last longer?",
    answer:
      "To enhance the color and longevity: Keep the paste on for at least 6-8 hours, apply lemon juice with sugar after the paste dries, avoid water contact for 24 hours after removal, apply a mixture of clove oil and lemon juice, and moisturize regularly with natural oils.",
  },
  {
    question: "Is natural henna safe for everyone?",
    answer:
      "Natural henna is generally safe for most people. However, some individuals may have allergic reactions. We recommend a patch test if you've never used henna before. Pregnant women should consult their doctor before getting mehendi applied.",
  },
  {
    question: "How far in advance should I book for bridal mehendi?",
    answer:
      "For bridal mehendi, we recommend booking at least 2-3 months in advance, especially during peak wedding season (October-February and April-June) to ensure availability.",
  },
  {
    question: "Do you use black henna?",
    answer:
      'We do not use "black henna" which contains PPD (para-phenylenediamine), a chemical that can cause severe allergic reactions. We only use 100% natural henna which produces a reddish-brown color. For darker shades, we use natural techniques to enhance the color.',
  },
  {
    question: "How should I prepare before my mehendi appointment?",
    answer:
      "For the best results: exfoliate your hands and feet a day before, avoid moisturizing on the day of application, wear loose clothing for easy access to areas being adorned, and plan your outfit to avoid disturbing the wet paste after application.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our range of mehendi services, each crafted with passion and precision to make your special
              moments even more beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-primary">{service.title}</h2>
                    <p className="mb-4">{service.description}</p>

                    <h3 className="font-bold text-lg mb-2">Features:</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center mt-6">
                      <div className="text-lg font-bold text-primary">{service.pricing}</div>
                      <BookingModal trigger={<Button className="btn-primary">Book Now</Button>} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Find answers to common questions about mehendi application and care.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Art of Mehendi?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your appointment today and let us create beautiful designs that complement your style and occasion.
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

