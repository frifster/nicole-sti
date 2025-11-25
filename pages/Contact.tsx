import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500">
            Have questions about the BMMA program? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-sti-blue mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sti-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Uno Uno Bldg., National Highway, Calamba City, Laguna</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sti-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(049) 545-0000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sti-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">admissions@calamba.sti.edu.ph</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
               <img src="https://picsum.photos/600/400?grayscale&blur=2" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
               <span className="relative z-10 font-bold text-gray-600 bg-white/80 px-4 py-2 rounded">Google Map Integration Here</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sti-blue focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sti-blue focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sti-blue focus:border-transparent outline-none transition"
                  placeholder="Inquiry about BMMA"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sti-blue focus:border-transparent outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-sti-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;