import moment from 'moment';

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      const { text } = action;
      return {
        ...state,
        text,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SET_START_DATE':
      const { startDate } = action;
      return {
        ...state,
        startDate,
      }
    case 'SET_END_DATE':
      const { endDate } = action;
      return {
        ...state,
        endDate,
      }
    default:
      return state;
  }
}
