import React from 'react';
import { Input, InputAdornment, makeStyles, FormControl, InputLabel, FormGroup } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyle = makeStyles(theme => ({
  dateIcon: {
    color: '#2e7aac'
  },
  form: {
    margin: '10px 0'
  }
}));

export default function DateFilter() {

  const classes = useStyle();

  return (
    <FormGroup noValidate>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="start_date">Start Date</InputLabel>
        <Input
          id="start_date"
          label="Start Date"
          type="date"
          defaultValue="2019-05-24"
          startAdornment={<InputAdornment className={classes.dateIcon} position="start"> <DateRangeIcon /> </InputAdornment >}
        />
      </FormControl>
      <FormControl className={classes.form} >
        <InputLabel htmlFor="end_date">End Date</InputLabel>
        <Input
          id="end_date"
          label="End Date"
          type="date"
          defaultValue="2019-05-24"
          startAdornment={<InputAdornment className={classes.dateIcon} position="start"> <DateRangeIcon /> </InputAdornment >}
        />
      </FormControl>

    </FormGroup>
  )
}