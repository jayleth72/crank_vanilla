import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "5 Essential Exercises Every Beginner Should Master",
    excerpt: "Starting your fitness journey can be overwhelming. These five fundamental exercises will build a strong foundation for all your future workouts.",
    author: "Peter Hancock",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Beginner Tips",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Science Behind Progressive Overload",
      excerpt: "Understanding progressive overload is key to continuous improvement in your fitness journey. Learn how to apply this principle effectively.",
      author: "Peter Hancock",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Training Science",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Nutrition Myths Debunked: What Really Works",
      excerpt: "Separate fact from fiction in the world of fitness nutrition. Discover evidence-based approaches to fueling your workouts.",
      author: "Peter Hancock",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Building Mental Resilience Through Fitness",
      excerpt: "Discover how physical training can strengthen your mental fortitude and help you overcome life&apos;s challenges.",
      author: "Peter Hancock",
      date: "December 28, 2024",
      readTime: "4 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Recovery: The Missing Piece in Your Fitness Puzzle",
      excerpt: "Learn why rest and recovery are just as important as your workouts, and how to optimize your recovery for better results.",
      author: "Peter Hancock",
      date: "December 20, 2024",
      readTime: "8 min read",
      category: "Recovery",
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Home Workout Essentials: No Gym, No Problem",
      excerpt: "Create an effective workout routine from the comfort of your home with minimal equipment. Perfect for busy schedules.",
      author: "Peter Hancock",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Home Workouts",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Setting SMART Fitness Goals That Actually Work",
      excerpt: "Learn how to set realistic, achievable fitness goals using the SMART framework and maintain motivation throughout your journey.",
      author: "Peter Hancock",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Goal Setting",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "All Posts",
    "Beginner Tips",
    "Training Science",
    "Nutrition",
    "Mental Health",
    "Recovery",
    "Home Workouts",
    "Goal Setting"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Fitness Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert insights, training tips, and motivation to help you on your fitness journey. 
            Learn from Peter&apos;s experience and discover what it takes to achieve lasting results.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-8">Featured Article</h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">Featured</span>
                </div>
                
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-secondary mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span className="mr-3">{post.date}</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary hover:text-accent font-medium inline-flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Tips
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and get the latest fitness insights, workout tips, 
            and success stories delivered straight to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam, just valuable fitness content. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
