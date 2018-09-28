import React , { Component } from 'react';
import cls from './DisplayArea.css';
import DisplayDate from './DisplayDate/DisplayDate'



const DisplayArea = (props) => (

        <div className={cls.DisplayArea}>
            <DisplayDate displayDate={props.displayDate}/>
        </div>
)

    

export default DisplayArea;