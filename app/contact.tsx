import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", eventDate: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Full Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" onChange={handleChange} placeholder="Phone Number" required />
      <input type="date" name="eventDate" onChange={handleChange} />
      <textarea name="message" onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
}
