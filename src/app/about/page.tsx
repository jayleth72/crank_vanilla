import { Award, Users, Clock, Target, CheckCircle, Heart } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const qualifications = [
    "Certified Personal Trainer",
    "Strength & Conditioning Specialist",
    "Nutrition Guidance Certification",
    "First Aid & CPR Certified"
  ];

  const achievements = [
    { icon: Users, number: "100+", label: "Clients Transformed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Target, number: "95%", label: "Goal Achievement Rate" },
    { icon: Award, number: "50+", label: "Success Stories" }
  ];

  const philosophy = [
    {
      title: "Personalized Approach",
      description: "Every individual is unique, and so should be their fitness journey. I create customized workout plans that align with your specific goals, fitness level, and lifestyle."
    },
    {
      title: "Sustainable Results",
      description: "Quick fixes don't last. I focus on building healthy habits and sustainable practices that will serve you for life, not just for a few weeks."
    },
    {
      title: "Holistic Wellness",
      description: "True fitness goes beyond just physical exercise. I incorporate nutrition guidance, mental wellness, and lifestyle coaching to ensure complete transformation."
    },
    {
      title: "Continuous Support",
      description: "Your journey doesn't end after our session. I provide ongoing motivation, accountability, and adjustments to keep you progressing towards your goals."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Meet Peter Hancock
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-300 mb-6">
                Your Personal Fitness Transformation Partner
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Based in Seaford Heights, South Australia, I'm passionate about helping people 
                discover their strength, build confidence, and achieve lasting fitness results. 
                With over 5 years of experience in personal training, I've helped hundreds of 
                clients transform their lives through fitness.
              </p>
              <Link
                href="/contact"
                className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                Book Your Consultation
              </Link>
            </div>
            <div className="relative">
              {/* Placeholder for Peter's photo */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-center">
                <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart size={64} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Peter Hancock</h3>
                <p className="text-lg text-orange-200">Certified Personal Trainer</p>
                <p className="text-orange-200">Seaford Heights, SA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-primary" size={32} />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              My Fitness Journey
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              My passion for fitness began during my own transformation journey. Like many of my clients, 
              I struggled with consistency, motivation, and knowing the right approach to achieve my goals. 
              Through trial, error, and dedication, I discovered that fitness is not just about physical 
              exercise—it's about building mental resilience, creating healthy habits, and developing a 
              sustainable lifestyle.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              After experiencing my own transformation, I knew I wanted to help others achieve the same 
              success. I pursued professional certification and have since dedicated my career to helping 
              people in Seaford Heights and surrounding areas reach their fitness goals.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              What sets me apart is my understanding that every person's journey is unique. Whether you're 
              a complete beginner or an experienced athlete looking to break through plateaus, I'm here to 
              provide the guidance, support, and accountability you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              My Training Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the principles that guide every training session and client relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Qualifications & Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-primary mr-4 flex-shrink-0" size={24} />
                <span className="text-lg font-medium text-secondary">{qualification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create a personalized fitness plan that fits your lifestyle and helps you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
