import ExpenseDate from './expenseDate';
import './firstTest.css';

const Test = (props: any) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};
export default Test;
// Must have one root element in reactjs
// Add Basic Styling with separate css file which is better option
