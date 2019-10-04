import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  tag:{
    color: '#d0d0d0',
    background: '#fff',
    border: '1px solid #d0d0d0',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '18px',
    margin: '5px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#dcf2ff',
      color: '#5080a6',
      border: '1px solid #5080a6'
    }
  }
}));

function Tag(props){
  const [active, setActive] = useState(false);
  const classes = useStyle();
  function toggleActive(){
    props.onActive(!active);
    setActive(!active);
  }
  return (
    <button onClick={toggleActive}  className={classes.tag+' '+(active ? 'active' : '')} > {props.title} </button>
  )
}

export default function Tags(props){
  let tags = props.tags;
  let activeTags = [];
  function setActive(isActive, name){
    activeTags = isActive ? activeTags.concat([name]) : activeTags.filter(item => item !== name);
    // custom event listener for tags to return active tags
    if(props.onTags){
      props.onTags(activeTags);
    }
  }
  return (
    tags.map(tag => <Tag onActive={ active => setActive(active, tag)} title={tag} /> )
  )
}