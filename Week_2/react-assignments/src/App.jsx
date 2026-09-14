import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import TodoApp from './TodoApp';
import styles from './Card.module.css';

function Home() {
  return (
    <div style={{ padding: '15px' }}>
      <h2>Home / Product Page</h2>
      <ProductCard title="Wireless Headphones" price={49.99} category="Electronics" />
      
      <div className={styles.cardBox}>
        <h3 className={styles.heading}>Styled with CSS Module</h3>
        <p>This box demonstrates scoped CSS module styling.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '20px', padding: '12px', background: '#e2e2e2' }}>
        <Link to="/">Products & Styling</Link>
        <Link to="/todo">To-Do List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}