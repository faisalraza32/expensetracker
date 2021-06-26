import { createContext, useReducer } from 'react';
import expenseReducer from './expenseReducer';
import types from './expenseTypes';

const INITIAL_STATE = {
  transactions: [
    { _id: 3, title: "Food", amount: -85 },
    { _id: 2, title: "Gas Expense", amount: -60 },
    { _id: 1, title: "Salary Income", amount: 2200 },
  ],
  current: null
}

export const ExpenseContext = createContext(INITIAL_STATE);

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, INITIAL_STATE);

  const AddTransaction = (transaction) => {
    dispatch({
      type: types.TRANSACTION_ADD,
      payLoad: transaction
    });
  };

  const EditTransaction = (transaction) => {
    dispatch({
      type: types.TRANSACTION_EDIT,
      payLoad: transaction
    });
  };

  const DeleteTransaction = (id) => {
    dispatch({
      type: types.TRANSACTION_DELETE,
      payLoad: id
    });
  };

  const SetCurrentRecord = (transaction) => {
    dispatch({
      type: types.SET_CURRENT_RECORD,
      payLoad: transaction
    });
  };

  return (
    <ExpenseContext.Provider value={{
      transactions: state.transactions,
      current: state.current,
      AddTransaction,
      EditTransaction,
      DeleteTransaction,
      SetCurrentRecord,
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;

