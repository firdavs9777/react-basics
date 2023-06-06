import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.37, date: new Date(2021, 2, 28) },
    { title: 'Phone Fee', amount: 290.37, date: new Date(2022, 4, 20) },
    { title: 'Airplane Fee', amount: 494.37, date: new Date(2023, 5, 1) }
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
