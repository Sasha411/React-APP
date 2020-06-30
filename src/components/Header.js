import React from 'react'
import { AppBar,Toolbar,Typography } from '@material-ui/core'

function Header() {
    return (
        <div>
           <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit" gutterBottom>FITNESS CULT</Typography>
                </Toolbar>
            </AppBar > 
        </div>
    )
}

export default Header
