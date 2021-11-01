import React, {useState} from 'react'
import './Piano.css'
import Key from './Key.js'
import {Notes, colors, k_n,Valid_key} from './Notes.js'

function Piano(){
    const [pressed, setpressed] = useState("");
    const [pressedKeys,setPressedKeys]= useState([]);
    const play_key=(e)=>{
        if(e.Handler)
            return;
        if(Valid_key.includes(e.key) && (!pressedKeys.includes(e.key))){
            let audio=new Audio(`./notes/${k_n[e.key.toLowerCase()]}.mp3`);
            audio.currentTime=0;
            audio.play();
            setpressed(e.key);
            let arr=pressedKeys;
            arr.push(e.key);
            setPressedKeys(arr);
            let temp=document.getElementById(e.key);
            temp.className=`keyStructure ${colors[Valid_key.indexOf(e.key)]?"white":"black"} pressed`;
        }
        e.Handler=true;
    }
    const stop_key=(e)=>{
        if(e.Handler)
            return;
        if(Valid_key.includes(e.key)){
            var index = pressedKeys.indexOf(e.key);
            pressedKeys.splice(index, 1);
            let temp=document.getElementById(e.key);
            temp.className=`keyStructure ${colors[Valid_key.indexOf(e.key)]?"white":"black"}`;
            if(pressed===e.key){
                setpressed('');
            }
        }
        e.Handler=true;
    }
    window.addEventListener("keydown", play_key);
    window.addEventListener("keyup", stop_key);

    const allKey= Notes.map((e,i)=>{
        return (
            <Key pressed={pressed} pressedKeys={[...pressedKeys]} color={(colors[i])?"white":"black"} key={e} Note={e} id={e}/>
        );
    });
    return(
        <div className="pianoBody">
            <div className="container">
                {allKey}
            </div>
        </div>
    );
}

export default Piano;