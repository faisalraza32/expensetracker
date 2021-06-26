import React, { useContext } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpenseContext } from '../context/expenseContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  minus: {
    color: 'red'
  },
  plus: {
    color: 'green'
  },
  border: {
    borderRight: '1px solid #c0c0c0'
  }
}));

const IncomeExpense = () => {
  const classes = useStyles();
  const { transactions } = useContext(ExpenseContext);
  const income = transactions.map(trans => trans.amount < 0 ? 0 : trans.amount).reduce((prevValue, curValue) => prevValue += curValue, 0);
  const expense = transactions.map(trans => trans.amount < 0 ? Math.abs(trans.amount) : 0).reduce((prevValue, curValue) => prevValue += curValue, 0);
  return (
    <Paper square className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.border}>
          <Typography variant="subtitle1" align="center">INCOME</Typography>
          <Typography
            className={classes.plus}
            variant="h6"
            align="center">$ {income.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" align="center">EXPENSE</Typography>
          <Typography
            className={classes.minus}
            variant="h6"
            align="center">$ {expense.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IncomeExpense;