import React from 'react';
import ButtonUI from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
  orange: {
    background: '#f9a310'
  },
  blue: {
    background: '#016fd1'
  },
  transparent: {
    background: 'transparent',
    border: '1px solid #517686',
  },
  transparentText: {
    color: '#517686'
  },
  text: {
    color: '#517686'
  },
  button: {
    borderRadius: '20px',
    color: '#fff',
    padding: '10px',
    margin: '0 10px'
  }
})
);

export default function Button(props) {

  const classes = useStyle();

  return (
    <ButtonUI color="red" className={classes[props.color] + ' ' + classes.button} > <span className={(props.color === 'transparent' ? classes.transparentText : '')} > {props.children} </span> </ButtonUI>
  )

}