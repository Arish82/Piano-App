import React from 'react'
import './Key.css'
import {n_k} from './Notes.js'

function Key(props){
    const click_play=(e)=>{
        let audio=new Audio(`./notes/${e}.mp3`);
        audio.currentTime=0;
        audio.play();
    }
    return(
        <>
        <div id={n_k[props.id]} className={`keyStructure ${props.color}`} onClick={()=>{click_play(props.Note)}}>
            {n_k[props.Note].toUpperCase()}
        </div>
        </>
    );
}

export default Key;