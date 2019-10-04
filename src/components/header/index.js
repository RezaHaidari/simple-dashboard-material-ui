import React from 'react';
import {Grid} from '@material-ui/core';
import Button from '../button';
import './styles.css'
function actionHeader(){
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} > 
        <Button color="transparent" > New filter </Button>
      </Grid>
      <Grid item xs={6} className="right" > 
        <Button color="orange" > Export AS CSV </Button>
        <Button color="blue" > Generate Report </Button>
      </Grid>
    </Grid>
  )
}

export default actionHeader;