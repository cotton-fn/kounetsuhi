import { combineReducers } from 'redux';

const initialItemsState = {
  lastId: 1,
  data: [{
    id: 0,
    name: '電気'
  }]
};

const items = (state = initialItemsState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let { lastId, data } = state;
      let id = lastId + 1;
      return {
        lastId: id,
        data: [
          ...state.data,
          {
            id,
            name: action.name 
          }
        ]
      };

    default:
      return state;
  }
};

const initialPaymentState = [];

const payments = (state = initialPaymentState, action) => {
  switch (action.type) {
    case 'EDIT_PAYMENT':
      let { year, month, values } = action.data;
      return [
        ...state,
        {
          year, month, values
        }
      ];

    default:
      return state;   
  }
};

const initialDateState = { current: new Date() };

const date = (state = initialDateState, action) => {
  return state;
};

export default combineReducers({
  items, payments, date
});
