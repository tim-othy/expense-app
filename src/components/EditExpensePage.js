import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    const id = getPathId(this.props);
    this.props.startRemoveExpense(id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    );  
  }
}

const getPathId = (props) => {
  const path = props.location.pathname;
  return path.substr(path.lastIndexOf('/') + 1);
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(
      (expense) => expense.id === getPathId(props)
    )
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);