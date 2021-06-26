import React, { useContext } from 'react';
import { Paper, Grid, List, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TransactionItem from './TransactionItem';
import { ExpenseContext } from '../context/expenseContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

const TransactionList = () => {
  const classes = useStyles();
  const { transactions } = useContext(ExpenseContext);
  return (
    <Paper square className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Transaction List</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <List dense>
            {transactions.map(item => {
              return <TransactionItem key={item._id} item={item} />;
            })}
          </List>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TransactionList;