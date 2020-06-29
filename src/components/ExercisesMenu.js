import React, { Fragment } from 'react'
import { Grid, Paper, makeStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import {Muscles, Exercises} from './store'
const useStyles =  makeStyles({
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 10
    }
})




const ExercisesMenu = () => {
    const classes = useStyles();
    const [title, setTitle] = React.useState("Welcome");
    const [desc, setDesc] = React.useState("Select Exercises from left");
    const [beg, setBeg] = React.useState("");
    const [inter, setInter] = React.useState("");
    const [adv, setAdv] = React.useState("");

    function onClickList(title, desc, beg, inter, adv) {
        setTitle(title);
        setDesc(desc);
        setBeg("Beginner: " + beg);
        setInter("Intermediate: " + inter);
        setAdv("Advanced: " + adv);
     
    }
    
        
        return (
            <div>
                <Grid container>
                    <Grid  style={{overflowY: "scroll", maxHeight: '100vh', backgroundColor: '#b0bec5'}} item xs={4}>
                        <Paper className={classes.Paper}>
                            {Muscles.map((obj) => 
                                <Fragment>
                            <Typography color="primary" variant="headline">
                                {obj}
                            </Typography>
                            <List component="nav">
                                
                                {Exercises.map(exercise => {
                                    console.log(exercise.muscle)
                                    console.log(obj)
                                    if (obj === exercise.muscle)
                                        {   return (
                                            
                                            
                                            <ListItem button>
                                            <ListItemText onClick={() => onClickList(exercise.title, exercise.desc, exercise.beginner, exercise.intermediate, exercise.advanced)} primary={exercise.title}/>
                                            </ListItem>
                                            
                                            );
                                        }
                                     } )}
                                
                            </List>
                                
                            
                                </Fragment>
                            )}
                        </Paper>
                    </Grid>
                    <Grid style={{backgroundColor: '#b0bec5'}} item xs={8}>
                        <Paper style={{overflowY: "scroll",minHeight: '100vh'}} className={classes.Paper}>
                            <Typography color="primary" gutterBottom variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="body2">
                                {desc}
                            </Typography>
                            <List component="ul">
                                <ListItem>
                                    <ListItemText>
                                       {beg}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>    
                                    <ListItemText>
                                       {inter}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>    
                                    <ListItemText>
                                       {adv}
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default ExercisesMenu
