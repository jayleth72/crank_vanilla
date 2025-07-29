'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Seaford Heights", "South Australia"],
      link: null
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0402 805 270"],
      link: "tel:+61402805270"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hancockpeter@y7mail.com"],
      link: "mailto:hancockpeter@y7mail.com"
    },
    {
      icon: Clock,
      title: "Training Hours",
      details: ["Mon-Fri: 6AM - 8PM", "Sat-Sun: 7AM - 6PM"],
      link: null
    }
  ];

  const services = [
    "1-on-1 Personal Training",
    "Small Group Training",
    "Fitness Assessment",
    "Nutrition Coaching",
    "Weight Loss Program",
    "Strength Building Program",
    "Athletic Performance"
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. Peter will get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            }}
            className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact Peter today for a free consultation 
            and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="0402 805 270"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors duration-200"
                    placeholder="Tell us about your fitness goals and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                              {detail}
                            </a>
                          ) : (
                            <span className="text-gray-600">{detail}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063771754476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-accent transition-colors duration-200"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Follow us on Facebook for fitness tips, client success stories, and updates.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-500 mx-auto mb-2" size={32} />
                  <p className="text-gray-600 font-medium">Seaford Heights, SA</p>
                  <p className="text-gray-500 text-sm">Exact location provided upon booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-secondary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-secondary mb-2">Do you offer free consultations?</h3>
              <p className="text-gray-600">
                Yes! I offer a complimentary 30-minute consultation where we&apos;ll discuss your goals, 
                assess your current fitness level, and create a plan that works for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-secondary mb-2">Where do training sessions take place?</h3>
              <p className="text-gray-600">
                Sessions can take place at a fully equipped private gym in Seaford Heights, 
                outdoor locations, or at your home if you have suitable space and equipment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-secondary mb-2">What should I bring to my first session?</h3>
              <p className="text-gray-600">
                Just bring comfortable workout clothes, athletic shoes, a water bottle, and a positive attitude! 
                All other equipment will be provided.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-secondary mb-2">How quickly will I see results?</h3>
              <p className="text-gray-600">
                Results vary by individual, but most clients notice improvements in energy and strength within 
                2-3 weeks, with visible changes typically appearing after 4-6 weeks of consistent training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
