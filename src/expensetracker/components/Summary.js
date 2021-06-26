import React, { useContext } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpenseContext } from '../context/expenseContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  minus: {
    color: "red"
  },
  plus: {
    color: "green"
  }
}))

const Summary = () => {
  const classes = useStyles();
  const { transactions } = useContext(ExpenseContext);
  const ammount = transactions.map(trans => trans.amount).reduce((currentValue, prevValue) => currentValue += prevValue, 0);
  return (
    <Paper square className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle1" component="h1">Balance</Typography>
          <Typography className={ammount < 0 ? classes.minus : classes.plus} align="center" variant="h6" component="h1">${ammount}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Summary;