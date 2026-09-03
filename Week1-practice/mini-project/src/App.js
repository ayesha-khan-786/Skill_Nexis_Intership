import { useState } from 'react';
import postsData from './posts.json';
import BlogCard from './BlogCard';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(postsData.map((post) => post.category))];

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Tech Blog</h1>
        <p style={{ color: '#64748b' }}>Search articles and filter by category</p>
      </header>

      {/* Search Bar & Category Filter Controls */}
      <div style={controlsStyle}>
        <input
          type="text"
          placeholder="Search articles by title or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={selectStyle}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div style={gridStyle}>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
          No articles found matching your criteria.
        </p>
      )}
    </div>
  );
}

const containerStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '2rem 1rem',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const controlsStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  flexWrap: 'wrap',
};

const inputStyle = {
  flex: '1 1 240px',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  fontSize: '0.95rem',
  outline: 'none',
};

const selectStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  fontSize: '0.95rem',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '1.5rem',
};