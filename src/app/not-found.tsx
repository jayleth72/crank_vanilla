import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="font-heading text-6xl font-bold text-secondary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Home className="mr-2" size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
