import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'

export class Displaycard extends Component {
    render() {
        return (
                    <div>
                        <Card style={{minWidth: "150px"}}>
                            <CardActionArea>
                                <CardMedia>
                                <iframe src={this.props.vidlink} width="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </CardMedia>
                                <CardContent>
                                <Typography color="primary" gutterBottom variant="h5" component="h2">
                                   {this.props.excercise}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sets: {this.props.sets}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Reps: {this.props.reps}   
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            }
}
// style={{width: '560', height: '315'}}
export default Displaycard
