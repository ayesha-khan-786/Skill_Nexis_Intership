import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddItem(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '15px 0' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter project/card title..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 14px' }}>Add Card</button>
    </form>
  );
}