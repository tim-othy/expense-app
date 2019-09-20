export default (props) => (
  <div>
    {
      props.expenses.map(
        (expense) => (
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
          <p>{expense.note}</p>
        )
      )
    }
  </div>
);
