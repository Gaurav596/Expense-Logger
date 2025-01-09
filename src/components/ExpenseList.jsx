
import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>₹{expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
