import React, {useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';


const blogPosts = [
  {
    id: 1,
    title: "The Science of Play: Why It's Crucial for Development",
    excerpt: "Discover how different types of play contribute to your child's cognitive, emotional, and social growth.",
    image: "https://images.unsplash.com/photo-1545065912-93d0abaa37ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "May 15, 2023",
    author: "Dr. Emily Parker",
    category: "Playtime"
  },
  {
    id: 2,
    title: "Choosing Age-Appropriate Toys: A Parent's Guide",
    excerpt: "Learn how to select toys that match your child's developmental stage and encourage learning through play.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 2, 2023",
    author: "Toy Safety Board",
    category: "Toys"
  },
  {
    id: 3,
    title: "Balancing Structured vs. Unstructured Play",
    excerpt: "Find the right mix of guided activities and free play to support your child's creativity and discipline.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 18, 2023",
    author: "Parenting Coach Mark",
    category: "Playtime"
  },
  {
    id: 4,
    title: "The 10-Minute Quality Time Challenge",
    excerpt: "How short bursts of fully engaged play can strengthen your bond with your child more than hours of distracted time.",
    image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "July 5, 2023",
    author: "Family Therapist Sarah",
    category: "Parenting Tips"
  },
  {
    id: 5,
    title: "Toy Rotation: Why Less is More",
    excerpt: "How regularly cycling toys can reduce clutter, boost creativity, and increase your child's attention span.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "July 22, 2023",
    author: "Minimalist Parenting",
    category: "Toys"
  },
  {
    id: 6,
    title: "Positive Discipline Through Play",
    excerpt: "Creative ways to teach boundaries and good behavior using play-based techniques.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "August 10, 2023",
    author: "Child Psychologist Dr. Lee",
    category: "Parenting Tips"
  },
  {
    id: 7,
    title: "Outdoor Play: Benefits Beyond Fresh Air",
    excerpt: "Why nature play is essential for physical health, risk assessment skills, and environmental connection.",
    image: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "August 28, 2023",
    author: "Nature Play Association",
    category: "Playtime"
  },
  {
    id: 8,
    title: "Screen Time Alternatives: Engaging Toy Ideas",
    excerpt: "Creative play alternatives that capture children's attention as effectively as digital devices.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "September 15, 2023",
    author: "Digital Wellness Coach",
    category: "Toys"
  },
  {
    id: 9,
    title: "The Power of Pretend Play",
    excerpt: "How dress-up and role-playing build empathy, language skills, and problem-solving abilities.",
    image: "https://images.unsplash.com/photo-1566895733044-6dd41d6dee1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "October 3, 2023",
    author: "Early Childhood Educator",
    category: "Playtime"
  }
];

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

const ParentalInsights = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); // Initially show 6 posts
  const postsPerLoad = 3; // Number of posts to load each time

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + postsPerLoad);
  };

  return (
    <>
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>

      {/* Parental-Blog */}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Parent Insights
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Expert advice and shared experiences for every parenting journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, visiblePosts).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {visiblePosts < blogPosts.length && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMorePosts}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ParentalInsights;