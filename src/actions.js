import { dispatch } from 'redux';

export const addItem = name => ({
  type: 'ADD_ITEM', name
});

export const editPayment = data => ({
  type: 'EDIT_PAYMENT', data
});
