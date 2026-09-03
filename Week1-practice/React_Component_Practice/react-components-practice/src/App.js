import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';

export default function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Component 1', content: 'Rendered dynamically using props.' },
    { id: 2, title: 'Component 2', content: 'State handles live additions.' }
  ]);

  const handleAddCard = (newTitle) => {
    setCards([...cards, { id: Date.now(), title: newTitle, content: 'Newly generated dynamic item.' }]);
  };

  const handleClear = () => setCards([]);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial' }}>
      <Header title="React Reusable Components" />
      
      <Form onAddItem={handleAddCard} />
      <Button label="Clear All Cards" onClick={handleClear} />

      <div style={{ marginTop: '20px' }}>
        {cards.map((item) => (
          <Card key={item.id} title={item.title} content={item.content} />
        ))}
      </div>

      <Footer year={2026} />
    </div>
  );
}