import React from 'react';
import Expense from './firstTest';
import Card from '../UI/Card';

const Expenses = (props: any) => {
  return (
    <Card className="expenses">
      <Expense
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></Expense>
      <Expense
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></Expense>
      <Expense
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></Expense>
    </Card>
  );
};
export default Expenses;
