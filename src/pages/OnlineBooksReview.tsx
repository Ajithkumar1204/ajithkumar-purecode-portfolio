import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Github, Linkedin } from 'lucide-react';

const OnlineBooksReview = () => {
  const [books] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5, reviews: 23 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.8, reviews: 35 },
    { id: 3, title: '1984', author: 'George Orwell', rating: 4.6, reviews: 42 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.3, reviews: 28 }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
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
      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Online Books Review System</h1>
          <p className="text-xl text-white/80">Discover, Review, and Rate Your Favorite Books</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                 onClick={() => setSelectedBook(book)}>
              <h3 className="text-xl font-semibold text-white mb-2">{book.title}</h3>
              <p className="text-white/80 mb-3">by {book.author}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">{renderStars(book.rating)}</div>
                <span className="text-white/80 text-sm">({book.rating})</span>
              </div>
              <p className="text-white/60 text-sm">{book.reviews} reviews</p>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Review: {selectedBook.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Book Details</h3>
                <p className="text-white/80 mb-2">Author: {selectedBook.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">{renderStars(selectedBook.rating)}</div>
                  <span className="text-white/80">({selectedBook.rating}/5)</span>
                </div>
                <p className="text-white/60">{selectedBook.reviews} total reviews</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Add Your Review</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Rating:</label>
                    <select 
                      value={newRating} 
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full p-2 rounded bg-white/20 text-white border border-white/30"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num} className="bg-gray-800">{num} Star{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Review:</label>
                    <textarea 
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      className="w-full p-2 rounded bg-white/20 text-white border border-white/30 h-24"
                      placeholder="Write your review here..."
                    />
                  </div>
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Java', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'JDBC'].map((tech) => (
              <div key={tech} className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-center">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnlineBooksReview;