"use client"

import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from "lucide-react"
import BookingModal from "@/components/booking-modal"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("myzedgpj")

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Get in touch with us for bookings, inquiries, or any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">Send Us a Message</h2>

              {state.succeeded ? (
                <div className="mb-6 p-4 rounded-lg flex items-start bg-green-100 text-green-800">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Thank you for your message! We will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                  <Input id="eventDate" name="eventDate" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required className="min-h-[150px]" placeholder="Tell us about your requirements..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button type="submit" className="w-full" disabled={state.submitting}>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p>+91 81716 28118</p>
                    <p className="text-sm text-muted-foreground">Available Mon-Sat, 09:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p>karanmehandi22@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <address className="not-italic">
                    123 Kisan Fashion Mall,
                    Secunderabad,<br></br>
                    Hydrabad, Telangana 500067
                    </address>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://instagram.com"
                      aria-label="Instagram"
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      aria-label="LinkedIn"
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://twitter.com"
                      aria-label="Twitter"
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-3">Book an Appointment</h3>
                  <p className="mb-4">Ready to experience our mehendi artistry? Book your appointment now.</p>
                  <BookingModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-16 bg-muted">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="section-title inline-block">Find Us</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        Visit our studio in Kisan Fashion Mall, Secunderabad, Hyderabad for consultations and appointments.
      </p>
    </div>

    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1473608324384!2d78.4753207763134!3d17.503813683047554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b76993784fd%3A0x47617c88119e4439!2sKisan%20Fashion%20Mall!5e0!3m2!1sen!2sin!4v1710741234567!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Karan Mehndi Art Location"
      ></iframe>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto">Find quick answers to common questions about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How far in advance should I book?</h3>
              <p>
                For bridal mehendi, we recommend booking 2-3 months in advance. For other services, 1-2 weeks notice is
                usually sufficient.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you travel for appointments?</h3>
              <p>
                Yes, we offer on-location services within Mumbai and can travel to other cities for destination weddings
                with additional travel charges.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What are your payment terms?</h3>
              <p>
                We require a 50% deposit to secure your booking, with the balance due on the day of service. We accept
                cash, bank transfers, and all major credit cards.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I bring my own design ideas?</h3>
              <p>
                We encourage clients to share their preferences and inspirations. We can adapt and customize designs to
                suit your style.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services#faqs">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

