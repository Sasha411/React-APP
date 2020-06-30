import React from 'react'
import { Grid, Paper, makeStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core'


const useStyles =  makeStyles({
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 10
    },
    listitemtext: {
        fontSize: "500px",
    }
})


function Mkdrightpanel(props) {
    const classes = useStyles();
    return (
        <div>
            
                        <Paper style={{overflowX: "none" ,overflowY: "scroll",minHeight: '100vh'}} className={classes.Paper}>
                            <Typography color="primary" gutterBottom variant="h2">
                                {props.title}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                {props.desc}
                            </Typography>
                            <br/>
                            <Typography gutterBottom variant="h5">
                                {props.beg}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                {props.inter}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                {props.adv}
                            </Typography>
                        </Paper>
                    
        </div>
    )
}

export default Mkdrightpanel
