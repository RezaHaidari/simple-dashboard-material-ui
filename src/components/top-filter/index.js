
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Button from '../button';
import Select from '../select';
import Tags from '../tags';
import DateFilter from '../date-filter';
import './styles.css'
function TopFilter() {
  const options = ['Netword', 'Publisher', 'Device ID', 'User Agent'];
  return (
    <Grid container spacing={3}>
      <Grid item xs={9} >
        <Select />
        <Box mt={2}>
          <Tags onTags={tags => console.log(tags)} tags={options} />
        </Box >
      </Grid>
      <Grid item xs={3} className="right" >
        <Grid container >
          <Grid item xs={12}>
            <Select />
          </Grid>
          <Grid item xs={12}>
            <DateFilter />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TopFilter;