'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Play, Award, Users, Target } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Transform Your Fitness Journey",
      subtitle: "Professional Personal Training in Seaford Heights",
      description: "Join Peter Hancock for personalized fitness training that delivers real results. Your transformation starts here.",
      cta: "Start Your Journey",
      bgClass: "bg-gradient-to-r from-primary to-accent"
    },
    {
      title: "Crank with Hank",
      subtitle: "Experienced Personal Trainer",
      description: "Located in Seaford Heights, South Australia. Specializing in strength training, weight loss, and fitness coaching.",
      cta: "View Services",
      bgClass: "bg-gradient-to-r from-secondary to-primary"
    }
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Target, number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Placeholder for background image */}
        <div className="w-full h-full bg-cover bg-center" 
             style={{
               backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="bg" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23ff6b35;stop-opacity:0.1"/%3E%3Cstop offset="100%25" style="stop-color:%23f7931e;stop-opacity:0.1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23bg)"/%3E%3C/svg%3E')`
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-orange-300 mb-6 font-medium">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group"
            >
              {slides[currentSlide].cta}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center group">
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-heading font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
