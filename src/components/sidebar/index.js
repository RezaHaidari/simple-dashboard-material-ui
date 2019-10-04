import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
// import { Link } from 'react-router-dom'
import menuItems from './menuItems'

function MenuBar() {


  const [menus, setMenu] = useState({});

  const useStyles = makeStyles(theme => ({
    body: {
      background: '#16315c'
    },
    list: {
      width: 250,
    },
    links: {
      textDecoration: 'none',
      color: '#fff',
    },
    active: {
      background: '#fff',
      color: '#16315c',
      '&:hover': {
        background: '#fff',
        color: '#16315c',
      }
    },
    menuHeader: {
      paddingLeft: '30px'
    }
  }))


  const classes = useStyles();

  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  function handleClick(item) {
    setMenu({
      [item]: !menus[item]
    })
  }

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  function handler(children) {
    
    return children.map((subOption) => {

      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem
              button
              key={subOption.name}>
              <a href="#" className={classes.links}  >
                <ListItemText
                  inset
                  primary={subOption.name}
                />
              </a>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={subOption.name}>
          <ListItem
            className={classes.links + ' ' + (menus[subOption.name] ? classes.active : '')}
            button
            onClick={() => handleClick(subOption.name)}>
            <ListItemText
              inset
              primary={subOption.name} />
            {menus[subOption.name] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse
            in={menus[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      )
    })
  }

  //const { drawerOpen, menuOptions } = this.props
  return (
    <div className={classes.list}>
      <Drawer
        variant="persistent"
        anchor="left"
        open
        classes={{ paper: classes.list + ' ' + classes.body }}>
        <div>
          <List>
            <ListItem
              key="menuHeading"
              divider
              disableGutters
            >
              <ListItemText
                className={classes.menuHeader}
                inset
              />
            </ListItem>
            {handler(menuItems.data)}
          </List>
        </div>
      </Drawer>
    </div>
  )

}
export default MenuBar;