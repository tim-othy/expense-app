import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => (
  <div>
    <h1>Edit Expense</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        console.log(expense)
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  const getPathId = (path) => {
    return path.substr(path.lastIndexOf('/') + 1);
  }

  return {
    expense: state.expenses.find(
      (expense) => expense.id === getPathId(props.location.pathname)
    )
  }
}

export default connect(mapStateToProps)(EditExpensePage);