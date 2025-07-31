import Hero from '@/components/Hero';
import { Dumbbell, Heart, Trophy, Users, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle, increase strength, and transform your physique with personalized strength training programs."
    },
    {
      icon: Heart,
      title: "Cardio Fitness",
      description: "Improve cardiovascular health and endurance with tailored cardio workouts that keep you motivated."
    },
    {
      icon: Trophy,
      title: "Goal Achievement",
      description: "Whether it&apos;s weight loss, muscle gain, or athletic performance, I&apos;ll help you reach your goals."
    },
    {
      icon: Users,
      title: "Group Training",
      description: "Train with friends or family in small group sessions for motivation and shared success."
    }
  ];

  const benefits = [
    "Personalized workout plans tailored to your goals",
    "Flexible scheduling to fit your lifestyle",
    "Nutritional guidance and meal planning support",
    "Progress tracking and regular assessments",
    "Motivational support and accountability",
    "Safe and effective training techniques"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Peter transformed my fitness journey completely. I&apos;ve never felt stronger or more confident!",
      rating: 5
    },
    {
      name: "Mike T.",
      text: "The personalized approach and constant motivation helped me achieve goals I never thought possible.",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "Professional, knowledgeable, and genuinely cares about your success. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Fitness with Expert Training
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the difference professional personal training can make in your fitness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:bg-opacity-100 transition-colors duration-300">
                  <service.icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Peter Hancock
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With over 5 years of experience in personal fitness training, Peter brings passion, 
                expertise, and dedication to every session. Based in Seaford Heights, South Australia, 
                he specializes in helping clients achieve their fitness goals through personalized training programs.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-200 inline-block font-medium"
              >
                Learn More About Peter
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Why Choose Crank with Hank?</h3>
                <ul className="space-y-3">
                  {benefits.slice(3).map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-white mr-3 flex-shrink-0" size={16} />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Real transformations from real people
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-bold text-white">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards a healthier, stronger you. Contact Peter today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
