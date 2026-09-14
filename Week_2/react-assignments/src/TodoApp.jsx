import React, { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '15px' }}>
      <h2>To-Do App</h2>
      <form onSubmit={addTask}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..." 
        />
        <button type="submit" style={{ marginLeft: '5px' }}>Add</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '8px 0' }}>
            {task.text}{' '}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}