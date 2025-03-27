import { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/signup", formData);
      alert("Signup successful! Please log in.");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Full Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" onChange={handleChange} placeholder="Phone Number" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
