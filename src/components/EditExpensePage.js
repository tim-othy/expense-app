import React from 'react';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = () => (
  <div>
    <h1>Edit Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense)
      }}
    />
  </div>
);

export default EditExpensePage;