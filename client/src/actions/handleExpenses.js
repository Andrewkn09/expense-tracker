import { FETCH_EXPENSES, ADD_EXPENSES } from './types';
import Axios from 'axios';

export const fetchExpenses = (col = 'id', sort = 'desc') => dispatch => {
  Axios.get(`/expenses-list/data/${col}/${sort}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_EXPENSES,
        payload: data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addExpenses = expense => dispatch => {
  return Axios.post('/expenses-list/', expense).then(() => {
    return fetchExpenses();
  });
};
