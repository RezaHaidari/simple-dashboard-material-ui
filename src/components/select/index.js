import React from 'react';
import { NativeSelect, makeStyles, FormControl } from '@material-ui/core';

const useStyle = makeStyles(them => ({
  select: {
    border: '1px solid black',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
  }
}));
export default function SelectComponent() {

  const classes = useStyle();

  function handleChange(event) {
    console.log(event.target.value)
  }
  return (
    <NativeSelect
      className={classes.select}
      value={10}
      onChange={handleChange}
    // input={<BootstrapInput name="age" id="age-customized-native-simple" />}
    >
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </NativeSelect>

  )
}