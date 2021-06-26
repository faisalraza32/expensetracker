import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpenseProvider from './context/expenseContext';


const ExpenseTracker = () => {
  return (
    <ExpenseProvider>
      <Grid container>
        <Grid item xs={12}>
          <Header title="Expense Manager" />
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} lg={4}>
            <TransactionForm />
          </Grid>
          <Grid item xs={12} sm={6} lg={8}>
            <Summary />
            <IncomeExpense />
            <TransactionList />
          </Grid>
        </Grid>
      </Grid>
    </ExpenseProvider>
  );
}

export default ExpenseTracker;
