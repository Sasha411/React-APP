import React, { Component } from 'react'
import { Tabs, Tab, Paper, Grid } from '@material-ui/core'
import {Muscles, Exercises} from './store'
import Displaycard from './Displaycard'



export class Content extends Component {
    state = {
        tabvalue: 0,
        tabmuscle: "Chest"
    }

    onTabClick = (index, group)=> {
        this.setState({tabvalue: index, tabmuscle: group})
        

    }
    render() {
        return (
            <div>
                <Paper style={{backgroundColor: '#f44336'}}>
                    <Tabs
                    value={this.state.tabvalue}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable force tabs example"
                    
                    >
                        
                        {Muscles.map((group, index) => <Tab style={{fontSize: "1em", color: "#fafafa"}} onClick={() => this.onTabClick(index, group)} label={group}/>)}
                        
                    </Tabs>
                    
                </Paper><br></br>
                 <Grid container direction="row">
                    <Grid item xs={0} sm={1}></Grid>  
                    <Grid container xs={12} sm={10}spacing={4}>
                        {Exercises.map(tuscle => {
                        if (this.state.tabmuscle === tuscle.muscle)
                        {
                            
                            
                             return <Grid item xs={12} sm={4} ><Displaycard vidlink={tuscle.videolink} excercise={tuscle.title} sets={tuscle.sets} reps={tuscle.reps}/></Grid>
                                
                            
                         
                        }
                        })}
                    </Grid>
                     <Grid item xs={0} sm={1}></Grid>   
                 </Grid> 
            </div>
        )
    }
}

export default Content
