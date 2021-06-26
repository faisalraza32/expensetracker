import React, { useContext } from 'react'
import { Paper, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ExpenseContext } from '../context/expenseContext';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 12
  },
  plusBackColor: {
    backgroundColor: 'green',
    marginRight: theme.spacing(1)
  },
  minusBackColor: {
    backgroundColor: 'red',
    marginRight: theme.spacing(1)
  },
  listItem: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(4),
  },
  secondaryAction: {
    right: theme.spacing(1)
  }

}));


const TransactionItem = ({ item }) => {
  const classes = useStyles();
  const { SetCurrentRecord, DeleteTransaction, current } = useContext(ExpenseContext);

  return (
    <>
      <ListItem button className={classes.listItem} onClick={() => SetCurrentRecord(item)} >
        <Paper className={item.amount < 0 ? classes.minusBackColor : classes.plusBackColor}>
          <Typography variant="h6">&nbsp;</Typography>
        </Paper>
        <ListItemText className={classes.title}
          primary={item.title}
        />
        <ListItemText
          primary={Math.abs(item.amount).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
        />
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <IconButton size="small" onClick={() => {
            DeleteTransaction(item._id);
            if (item._id === current._id) {
              SetCurrentRecord(null);
            }
          }}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default TransactionItem;