"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, XCircle, Phone, Mail, MessageSquare } from "lucide-react"
import BookingModal from "@/components/booking-modal"

// Sample booking data
const bookings = [
  {
    id: "BK001",
    service: "Bridal Mehndi",
    date: "2025-05-15",
    time: "10:00 AM",
    status: "confirmed",
    location: "Studio",
    price: "₹15,000",
  },
  {
    id: "BK002",
    service: "Festive Mehndi",
    date: "2025-06-10",
    time: "2:00 PM",
    status: "pending",
    location: "Client Location",
    price: "₹3,000",
  },
  {
    id: "BK003",
    service: "Arabic Design",
    date: "2025-04-20",
    time: "11:30 AM",
    status: "completed",
    location: "Studio",
    price: "₹4,500",
  },
]

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState<null | (typeof bookings)[0]>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs font-medium">Confirmed</span>
          </div>
        )
      case "pending":
        return (
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
          </div>
        )
      case "completed":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-blue-700 bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
          </div>
        )
      case "cancelled":
        return (
          <div className="flex items-center">
            <XCircle className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-700 bg-red-100 px-2 py-1 rounded-full text-xs font-medium">Cancelled</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Bookings</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Manage your appointments and view your booking history with Karan Mehndi Art.
            </p>
          </div>
        </div>
      </section>

      {/* Bookings Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Your Appointments</h2>
            <BookingModal trigger={<Button className="btn-primary">New Booking</Button>} />
          </div>

          {bookings.length > 0 ? (
            <div className="rounded-lg border shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{new Date(booking.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>{booking.price}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            {selectedBooking && (
                              <>
                                <DialogHeader>
                                  <DialogTitle className="text-2xl">Booking Details</DialogTitle>
                                  <DialogDescription>Booking ID: {selectedBooking.id}</DialogDescription>
                                </DialogHeader>

                                <div className="space-y-4 mt-4">
                                  <div>
                                    <h3 className="font-bold text-lg">Service</h3>
                                    <p>{selectedBooking.service}</p>
                                  </div>

                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h3 className="font-bold">Date</h3>
                                      <div className="flex items-center mt-1">
                                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                        <span>{new Date(selectedBooking.date).toLocaleDateString()}</span>
                                      </div>
                                    </div>

                                    <div>
                                      <h3 className="font-bold">Time</h3>
                                      <div className="flex items-center mt-1">
                                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                        <span>{selectedBooking.time}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="font-bold">Location</h3>
                                    <div className="flex items-center mt-1">
                                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                      <span>{selectedBooking.location}</span>
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="font-bold">Status</h3>
                                    <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                                  </div>

                                  <div>
                                    <h3 className="font-bold">Price</h3>
                                    <p>{selectedBooking.price}</p>
                                  </div>
                                </div>

                                <div className="flex justify-end space-x-4 mt-6">
                                  {selectedBooking.status === "pending" || selectedBooking.status === "confirmed" ? (
                                    <Button variant="destructive" size="sm">
                                      Cancel Booking
                                    </Button>
                                  ) : null}

                                  {selectedBooking.status === "completed" ? (
                                    <Button variant="outline" size="sm">
                                      Book Again
                                    </Button>
                                  ) : null}
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-2">No Bookings Found</h3>
              <p className="mb-6">You don't have any bookings yet. Book your first appointment now!</p>
              <BookingModal />
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">Need Help?</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              If you have any questions about your bookings or need to make changes, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="mb-4">Speak directly with our booking team</p>
              <p className="font-bold">+91 81716 28118</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="mb-4">Send us your queries anytime</p>
              <p className="font-bold">karanmehandi22@gmail.com</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Chat With Us</h3>
              <p className="mb-4">Live chat available during business hours</p>
              <Button variant="outline">Start Chat</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

