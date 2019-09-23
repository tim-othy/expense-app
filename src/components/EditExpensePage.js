import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button
        onClick={
          () => {
            props.dispatch(removeExpense({ id: getPathId(props) }))
            props.history.push('/');
          }
        }
      >
        Remove
      </button>
    </div>
  );
};

const getPathId = (props) => {
  const path = props.location.pathname;
  return path.substr(path.lastIndexOf('/') + 1);
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === getPathId(props)
    )
  }
}

export default connect(mapStateToProps)(EditExpensePage);