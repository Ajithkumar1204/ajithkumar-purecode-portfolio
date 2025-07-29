import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Github, Linkedin, BookOpen, Users, TrendingUp, Search, Filter, Heart, MessageCircle, Share2 } from 'lucide-react';

const OnlineBooksReview = () => {
  const [books, setBooks] = useState([
    { 
      id: 1, 
      title: 'The Psychology of Money', 
      author: 'Morgan Housel', 
      rating: 4.7, 
      reviews: 2847,
      genre: 'Finance',
      description: 'Timeless lessons on wealth, greed, and happiness that reveal how psychology affects our financial decisions.',
      cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop',
      price: '$15.99',
      bestseller: true,
      liked: false,
      readingTime: '6 hours'
    },
    { 
      id: 2, 
      title: 'Atomic Habits', 
      author: 'James Clear', 
      rating: 4.8, 
      reviews: 5234,
      genre: 'Self-Help',
      description: 'Tiny changes, remarkable results. Learn how to build good habits and break bad ones.',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      price: '$18.99',
      bestseller: true,
      liked: true,
      readingTime: '5 hours'
    },
    { 
      id: 3, 
      title: 'The Midnight Library', 
      author: 'Matt Haig', 
      rating: 4.6, 
      reviews: 1923,
      genre: 'Fiction',
      description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      price: '$14.99',
      bestseller: false,
      liked: false,
      readingTime: '7 hours'
    },
    { 
      id: 4, 
      title: 'Sapiens', 
      author: 'Yuval Noah Harari', 
      rating: 4.5, 
      reviews: 3765,
      genre: 'History',
      description: 'A brief history of humankind - from the Stone Age to the present.',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      price: '$16.99',
      bestseller: true,
      liked: true,
      readingTime: '15 hours'
    },
    { 
      id: 5, 
      title: 'Think and Grow Rich', 
      author: 'Napoleon Hill', 
      rating: 4.4, 
      reviews: 1456,
      genre: 'Business',
      description: 'The classic guide to success, based on interviews with over 500 of the most successful people.',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      price: '$12.99',
      bestseller: false,
      liked: false,
      readingTime: '10 hours'
    },
    { 
      id: 6, 
      title: 'The Alchemist', 
      author: 'Paulo Coelho', 
      rating: 4.3, 
      reviews: 2156,
      genre: 'Fiction',
      description: 'A mystical story about Santiago, an Andalusian shepherd boy who dreams of traveling.',
      cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop',
      price: '$13.99',
      bestseller: false,
      liked: true,
      readingTime: '4 hours'
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [showReviews, setShowReviews] = useState({});
  const [activeUsers] = useState(1247);

  const genres = ['All', 'Fiction', 'Self-Help', 'Business', 'Finance', 'History'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time user activity
      setBooks(prevBooks => 
        prevBooks.map(book => ({
          ...book,
          reviews: book.reviews + Math.floor(Math.random() * 2)
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : i < rating ? 'fill-yellow-400/50 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const toggleLike = (bookId) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, liked: !book.liked } : book
      )
    );
  };

  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => selectedGenre === 'All' || book.genre === selectedGenre)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-emerald-900/50 to-teal-800/50 backdrop-blur-xl border-b border-emerald-400/20 shadow-2xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          <div className="flex gap-4">
            <a href="https://github.com/Ajithkumar1204" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ajith-kumarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 mb-6">
            <BookOpen className="w-16 h-16 text-emerald-300" />
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent tracking-tight">
            Literary Universe
          </h1>
          <p className="text-2xl text-emerald-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a world of knowledge, reviews, and literary discussions
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full px-6 py-2 border border-emerald-400/30">
              <span className="text-emerald-200 text-sm font-medium">🌟 Featured Book Platform</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{books.length} Books</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{activeUsers} Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Live Reviews</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-gray-800">{genre}</option>
                ))}
              </select>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rating" className="bg-gray-800">Sort by Rating</option>
              <option value="reviews" className="bg-gray-800">Sort by Reviews</option>
              <option value="title" className="bg-gray-800">Sort by Title</option>
            </select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Book Cover */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {book.bestseller && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Bestseller
                  </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(book.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-md ${book.liked ? 'bg-red-500/80 text-white' : 'bg-white/20 text-white/80'} hover:scale-110 transition-all`}
                  >
                    <Heart className={`w-4 h-4 ${book.liked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white/80 backdrop-blur-md hover:scale-110 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2">{book.title}</h3>
                  <span className="text-blue-300 font-semibold text-sm">{book.price}</span>
                </div>
                <p className="text-white/70 mb-3 text-sm">by {book.author}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(book.rating)}</div>
                    <span className="text-white/80 text-sm">({book.rating})</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{book.genre}</span>
                </div>
                
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{book.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60 text-xs">{book.reviews} reviews</span>
                  <span className="text-white/60 text-xs">{book.readingTime}</span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowReviews(prev => ({...prev, [book.id]: !prev[book.id]}));
                    }}
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Reviews */}
                {showReviews[book.id] && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      <div className="text-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">Sarah M.</span>
                          <div className="flex">{renderStars(5)}</div>
                        </div>
                        <p className="text-white/70">"Amazing book! Highly recommend it."</p>
                      </div>
                      <div className="text-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">John D.</span>
                          <div className="flex">{renderStars(4)}</div>
                        </div>
                        <p className="text-white/70">"Great read, very insightful content."</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Book Modal/Details */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">Book Details</h2>
                <button 
                  onClick={() => setSelectedBook(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Book Cover */}
                <div className="md:col-span-1">
                  <img 
                    src={selectedBook.cover} 
                    alt={selectedBook.title}
                    className="w-full rounded-lg shadow-2xl"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Price:</span>
                      <span className="text-blue-300 font-semibold">{selectedBook.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Genre:</span>
                      <span className="text-white">{selectedBook.genre}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Reading Time:</span>
                      <span className="text-white">{selectedBook.readingTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Book Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedBook.title}</h3>
                  <p className="text-xl text-white/80 mb-4">by {selectedBook.author}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(selectedBook.rating)}</div>
                      <span className="text-white/80 text-lg">({selectedBook.rating}/5)</span>
                    </div>
                    <span className="text-white/60">{selectedBook.reviews} reviews</span>
                    {selectedBook.bestseller && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Bestseller
                      </span>
                    )}
                  </div>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">{selectedBook.description}</p>
                  
                  {/* Add Review Section */}
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h4 className="text-lg font-semibold text-white mb-4">Write a Review</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white mb-2">Your Rating:</label>
                        <div className="flex gap-1 mb-2">
                          {[1,2,3,4,5].map(star => (
                            <button
                              key={star}
                              onClick={() => setNewRating(star)}
                              className="focus:outline-none"
                            >
                              <Star className={`w-6 h-6 ${star <= newRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} hover:text-yellow-400 transition-colors`} />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-white mb-2">Your Review:</label>
                        <textarea 
                          value={newReview}
                          onChange={(e) => setNewReview(e.target.value)}
                          className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Share your thoughts about this book..."
                        />
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-medium">
                          Submit Review
                        </button>
                        <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{books.reduce((sum, book) => sum + book.reviews, 0).toLocaleString()}</h3>
            <p className="text-white/70">Total Reviews</p>
          </div>
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{activeUsers.toLocaleString()}</h3>
            <p className="text-white/70">Active Readers</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{(books.reduce((sum, book) => sum + book.rating, 0) / books.length).toFixed(1)}</h3>
            <p className="text-white/70">Average Rating</p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Java', desc: 'Backend Logic' },
              { name: 'MySQL', desc: 'Database' },
              { name: 'HTML5', desc: 'Structure' },
              { name: 'CSS3', desc: 'Styling' },
              { name: 'JavaScript', desc: 'Interactivity' },
              { name: 'JDBC', desc: 'DB Connection' }
            ].map((tech) => (
              <div key={tech.name} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-center p-4 rounded-xl border border-white/20 hover:scale-105 transition-transform">
                <div className="text-blue-300 font-semibold mb-1">{tech.name}</div>
                <div className="text-white/60 text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnlineBooksReview;