import React, { useState, useRef, useContext, useEffect } from 'react'
import { TextField, Paper, Grid, Typography, Button } from '@material-ui/core';
import { FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';
import { ExpenseContext } from '../context/expenseContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  formField: {
    paddingTop: theme.spacing(2),
  }
}));


const INITIAL_STATE = {
  _id: null,
  title: "",
  amount: "",
  transactionType: "expense",
}
const TransactionForm = () => {
  const classes = useStyles();
  const titleRef = useRef(null)
  const { current, AddTransaction, EditTransaction, } = useContext(ExpenseContext);
  const [transaction, setTransaction] = useState(current ?? INITIAL_STATE);

  useEffect(() => {
    if (current) {
      setTransaction({ ...current, transactionType: current.amount < 0 ? "expense" : "income", amount: Math.abs(current.amount) });
      return;
    };

    setTransaction(INITIAL_STATE);
  }, [current]);

  const getUpdatedTransaction = () => {
    return {
      _id: transaction._id ?? null,
      title: transaction.title,
      amount: transaction.transactionType === 'expense' ? transaction.amount * -1 : transaction.amount,
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getUpdatedTransaction();
    if (data._id) {
      EditTransaction(data);
    } else {
      data._id = Math.random() * 1000000
      AddTransaction(data);
    }

    setTransaction(INITIAL_STATE);
    titleRef.current.focus();
  }

  const handleTypeChange = (e) => {
    setTransaction({
      ...transaction,
      transactionType: e.target.value
    });
  }

  return (
    <Paper square className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Add Transaction</Typography>
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <FormControl component="fieldset" ref={titleRef}>
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup name="transactiontype" value={transaction.transactionType} onChange={handleTypeChange}>
                <FormControlLabel value="expense" control={<Radio size="small" />} label="Expense" size="small" />
                <FormControlLabel value="income" control={<Radio size="small" color="primary" />} label="Income" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <TextField
              required
              label="Transaction Title"
              value={transaction.title}
              fullWidth
              variant="outlined"
              onChange={(e) => setTransaction({
                ...transaction,
                title: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <TextField
              required
              label="Transaction Amount"
              variant="outlined"
              type="number"
              value={transaction.amount}
              onChange={(e) => setTransaction({
                ...transaction,
                amount: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >Save</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default TransactionForm;