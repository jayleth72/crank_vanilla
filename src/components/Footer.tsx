import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full mr-2"></div>
              <span className="font-heading text-xl font-bold">
                Crank with Hank
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional personal fitness training in Seaford Heights, South Australia. 
              Transform your fitness journey with Peter Hancock&apos;s expert guidance and personalized approach.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063771754476"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About Peter
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Seaford Heights, SA
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-primary mr-2 flex-shrink-0" />
                <a
                  href="tel:+61402805270"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  0402 805 270
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-primary mr-2 flex-shrink-0" />
                <a
                  href="mailto:hancockpeter@y7mail.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  hancockpeter@y7mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-gray-400 text-sm">
              © {currentYear} Crank with Hank. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Website by{' '}
              <a
                href="https://sconesit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-200"
              >
                Scones & I.T
              </a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
