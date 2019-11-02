import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = selectExpensesTotal(expenses);
  const expectedResult = 0;
  expect(result).toBe(expectedResult);
});

test('should return expense amount for single expense', () => {
  const expense = [expenses[0]];
  const result = selectExpensesTotal(expense);
  const expectedResult = expense[0].amount
  expect(result).toBe(expectedResult);
});

test('should return total for multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  const expectedResult = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(result).toBe(expectedResult);
});