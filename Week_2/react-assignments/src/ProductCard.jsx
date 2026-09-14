import React, { useState } from 'react';

export default function ProductCard({ title, price, category }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '220px' }}>
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
    </div>
  );
}