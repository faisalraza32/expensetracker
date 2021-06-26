import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import ExpenseTracker from './expensetracker';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ExpenseTracker />
  </React.StrictMode>,
  document.getElementById('root')
);
