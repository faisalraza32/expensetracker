import types from './expenseTypes';

const expenseReducer = (state, action) => {
  switch (action.type) {
    case types.TRANSACTION_ADD:
      return {
        ...state,
        transactions: [action.payLoad, ...state.transactions]
      };
    case types.TRANSACTION_EDIT:
      return {
        ...state,
        transactions: state.transactions.map(trans => (trans._id === action.payLoad._id ? action.payLoad : trans))
      }
    case types.TRANSACTION_DELETE:
      return {
        ...state,
        transactions: state.transactions.filter(trans => trans._id !== action.payLoad)
      }
    case types.SET_CURRENT_RECORD:
      return {
        ...state,
        current: action.payLoad
      }
    default:
      return state;
  };
};

export default expenseReducer;