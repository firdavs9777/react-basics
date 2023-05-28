import React from 'react';
import Test from '../src/components/firstTest';
import './App.css';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.37, date: new Date(2021, 2, 28) },
    { title: 'Phone Fee', amount: 290.37, date: new Date(2022, 4, 20) },
    { title: 'Airplane Fee', amount: 494.37, date: new Date(2023, 5, 1) }
  ];
  return (
    <div className="App">
      <Test
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Test>
      <Test
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></Test>
      <Test
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></Test>
    </div>
  );
}

export default App;
