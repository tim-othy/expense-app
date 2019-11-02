import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly for 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={250} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly for multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={10} expensesTotal={250000} />);
  expect(wrapper).toMatchSnapshot();
  
});
