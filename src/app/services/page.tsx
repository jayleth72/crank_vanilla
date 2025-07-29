import { Dumbbell, Users, Target, Heart, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'personal-training',
      title: "1-on-1 Personal Training",
      price: "From $80",
      duration: "60 minutes",
      icon: Dumbbell,
      description: "Personalized one-on-one training sessions tailored to your specific goals and fitness level.",
      features: [
        "Customized workout plans",
        "Form correction and technique coaching",
        "Progress tracking and assessments",
        "Nutrition guidance",
        "Flexible scheduling",
        "Full equipment access"
      ],
      popular: true
    },
    {
      id: 'group-training',
      title: "Small Group Training",
      price: "From $45",
      duration: "60 minutes",
      icon: Users,
      description: "Train with friends or meet new people in our motivating small group sessions (2-4 people).",
      features: [
        "Cost-effective training option",
        "Social motivation and support",
        "Fun and engaging workouts",
        "Scalable exercises for all levels",
        "Team building activities",
        "Shared success celebrations"
      ]
    },
    {
      id: 'fitness-assessment',
      title: "Fitness Assessment",
      price: "$50",
      duration: "90 minutes",
      icon: Target,
      description: "Comprehensive fitness evaluation to establish baseline metrics and create your personalized plan.",
      features: [
        "Body composition analysis",
        "Strength and endurance testing",
        "Flexibility and mobility assessment",
        "Goal setting session",
        "Customized program design",
        "Nutrition consultation"
      ]
    },
    {
      id: 'nutrition-coaching',
      title: "Nutrition Coaching",
      price: "$60",
      duration: "45 minutes",
      icon: Heart,
      description: "Learn how to fuel your body properly with personalized nutrition guidance and meal planning.",
      features: [
        "Personalized meal plans",
        "Macronutrient education",
        "Grocery shopping guides",
        "Recipe suggestions",
        "Supplement recommendations",
        "Ongoing support and adjustments"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$300",
      duration: "4 sessions",
      description: "Perfect for beginners or those looking to try personal training",
      features: [
        "Initial fitness assessment",
        "4 x 1-on-1 training sessions",
        "Basic nutrition guidance",
        "Exercise plan to take home"
      ]
    },
    {
      name: "Transformation Package",
      price: "$720",
      duration: "12 sessions",
      description: "Our most popular package for serious results",
      features: [
        "Comprehensive fitness assessment",
        "12 x 1-on-1 training sessions",
        "Detailed nutrition coaching",
        "Progress tracking and photos",
        "Custom meal plan",
        "24/7 text support"
      ],
      popular: true
    },
    {
      name: "Elite Package",
      price: "$1200",
      duration: "24 sessions",
      description: "Complete transformation program for maximum results",
      features: [
        "Full body composition analysis",
        "24 x 1-on-1 training sessions",
        "Comprehensive nutrition program",
        "Weekly check-ins and adjustments",
        "Supplement recommendations",
        "Lifestyle coaching",
        "Maintenance plan included"
      ]
    }
  ];

  const specialPrograms = [
    {
      title: "Weight Loss Program",
      description: "Comprehensive 12-week program combining strength training, cardio, and nutrition coaching for sustainable weight loss.",
      duration: "12 weeks",
      includes: ["2x weekly PT sessions", "Nutrition coaching", "Weekly weigh-ins", "Body composition tracking"]
    },
    {
      title: "Strength Building Program",
      description: "8-week focused program designed to increase your overall strength and muscle mass through progressive overload.",
      duration: "8 weeks",
      includes: ["3x weekly PT sessions", "Strength assessments", "Progressive programming", "Recovery protocols"]
    },
    {
      title: "Athletic Performance",
      description: "Sport-specific training to enhance your athletic performance, speed, agility, and power.",
      duration: "10 weeks",
      includes: ["Performance testing", "Sport-specific drills", "Injury prevention", "Mental coaching"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Personal Training Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose from our range of professional fitness services designed to help you achieve your goals, 
            whether you're just starting out or looking to take your fitness to the next level.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Training Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional fitness solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-secondary">
                        {service.title}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <span className="font-bold text-primary text-lg mr-2">{service.price}</span>
                        <span>• {service.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                  >
                    Book This Service
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Training Packages
            </h2>
            <p className="text-lg text-gray-600">
              Save money with our comprehensive training packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold rounded-b">
                    Best Value
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">({pkg.duration})</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center block ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-accent text-white' 
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Choose Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Specialized Programs
            </h2>
            <p className="text-lg text-gray-600">
              Targeted programs for specific fitness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="text-primary mr-2" size={16} />
                  <span className="font-medium text-secondary">{program.duration}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-secondary">Includes:</h4>
                  <ul className="space-y-1">
                    {program.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your free consultation today and let's discuss which service or package is right for you.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
