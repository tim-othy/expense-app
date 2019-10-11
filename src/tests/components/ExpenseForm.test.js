import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate(
    'submit',
    { preventDefault: () => {} }
  );

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New description';
  wrapper.find('input').at(0).simulate(
    'change',
    { target: { value }}
  );

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New note';
  wrapper.find('textarea').at(0).simulate(
    'change',
    { target: { value }}
  );

  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if input is valid', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '100.00';
  wrapper.find('input').at(1).simulate(
    'change',
    { target: { value }}
  );

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if input is invalid', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '100.0000';
  wrapper.find('input').at(1).simulate(
    'change',
    { target: { value }}
  );

  expect(wrapper.state('amount')).toBe('');
})
