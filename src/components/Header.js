import React, { Fragment } from 'react'
import { AppBar,Toolbar,Typography, IconButton, Icon } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Exercises, Muscles } from './store'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';

const useStyles =  makeStyles({
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 10
    },
    listitemtext: {
        fontSize: "500px",
    }
})





const drawerWidth = 5;

function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(null);
    const [title, setTitle] = React.useState("Welcome");
    const [desc, setDesc] = React.useState("Select Exercises from left");

    function onClickList(title, desc, beg, inter, adv) {
        setTitle(title);
        setDesc(desc);
    
    }
    

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <div>
           <AppBar position="static">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton color="inherit" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>    
                    <Typography variant="h4" color="inherit" gutterBottom>FITNESS CULT</Typography>
                </Toolbar>
                
            </AppBar > 
            <SwipeableDrawer
                        anchor='left'
                        open={open}
                        onClose={handleDrawerClose}
                        onOpen={handleDrawerOpen}
            >
                        {Muscles.map((obj) => 
                                <Fragment>
                            <Typography color="primary" variant="h4">
                                {obj} 
                            </Typography>
                            <List component="nav">
                                
                                {Exercises.map(exercise => {
                                    if (obj === exercise.muscle)
                                        {   return (
                                            
                                            
                                            <ListItem button>
                                            <ListItemText className={classes.listitemtext} onClick={() => props.onClickList(exercise.title, exercise.desc, exercise.beginner, exercise.intermediate, exercise.advanced)} primary={exercise.title}/>
                                            </ListItem>
                                            
                                            );
                                        }
                                     } )}
                                
                            </List>
                                
                            
                                </Fragment>
                            )}
            </SwipeableDrawer>
        </div>
    )
}

export default Header
