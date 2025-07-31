'use client';

import { ChevronRight, Play, Award, Users, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const slideData = {
    title: "Transform Your Fitness Journey",
    subtitle: "Personal Training You Can Count On",
    description: "Join Peter Hancock for personalized fitness training that delivers real results. Your transformation starts here.",
    cta: "Start Your Journey"
  };

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Target, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            {/* Logo as slogan */}
            <div className="flex justify-center mb-8">
              <Image
                src="/crank_logo_white.png"
                alt="Crank with Hank Logo"
                width={800}
                height={800}
                className="w-96 sm:w-[32rem] md:w-[40rem] lg:w-[48rem] xl:w-[56rem] h-auto object-contain"
              />
            </div>
            
            {/* Main title */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {slideData.title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-orange-300 mb-6 font-medium">
              {slideData.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {slideData.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group"
            >
              {slideData.cta}
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
