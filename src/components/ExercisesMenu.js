import React, { Fragment } from 'react'
import { Grid, Paper, makeStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import {Muscles, Exercises} from './store'
import Hidden from '@material-ui/core/Hidden';
import Mkdrightpanel from "./Mkdrightpanel"






const useStyles =  makeStyles({
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 10
    },
    listitemtext: {
        fontSize: "500px",
    }
})




const ExercisesMenu = (props) => {
    const classes = useStyles();
    // const [title, setTitle] = React.useState("Welcome");
    // const [desc, setDesc] = React.useState("Select Exercises from left");
    // const [beg, setBeg] = React.useState("");
    // const [inter, setInter] = React.useState("");
    // const [adv, setAdv] = React.useState("");
   

    // function onClickList(title, desc, beg, inter, adv) {
    //     setTitle(title);
    //     setDesc(desc);
    //     setBeg("Beginner: " + beg);
    //     setInter("Intermediate: " + inter);
    //     setAdv("Advanced: " + adv);
     
    // }
    
        
        return (
            <div style={{overflow: "none"}}>
                <Grid style={{overflow: "none" }} container>
                <Hidden smDown>
                    <Grid  style={{overflowX: "none" ,overflowY: "scroll", maxHeight: '100vh', backgroundColor: '#b0bec5'}} item xs={4} sm={0}>                        
                        
                        <Paper style={{overflowX: "none"}} className={classes.Paper}>
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
                        </Paper>
                       
                    </Grid>
                    </Hidden>
                    <Grid style={{overflowX: "none" ,backgroundColor: '#b0bec5'}} item sm={12} md={8}>
                    <Mkdrightpanel title={props.title} desc={props.desc} beg={props.beg} inter={props.inter} adv={props.adv}/>
                    </Grid>
                    
                </Grid>
            </div>
        )
    
}

export default ExercisesMenu
