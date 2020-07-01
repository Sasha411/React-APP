import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import ExercisesMenu from './components/ExercisesMenu'


function App() {
    const [title, setTitle] = React.useState("Welcome");
    const [desc, setDesc] = React.useState("To start select any Exercises from left ");
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
                
               <Header title={title} desc={desc} beg={beg} inter={inter} adv={adv} onClickList={onClickList}/>
               <ExercisesMenu title={title} desc={desc} beg={beg} inter={inter} adv={adv} onClickList={onClickList}/>
               <Content />
               
            </div>
        )
    }


export default App



