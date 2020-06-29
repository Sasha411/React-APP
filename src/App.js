import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import ExercisesMenu from './components/ExercisesMenu'


export class App extends Component {
    
    render() {
        return (
            <div>
                
               <Header />
               <ExercisesMenu/>
               <Content />
               
            </div>
        )
    }
}

export default App



