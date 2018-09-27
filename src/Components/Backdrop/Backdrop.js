import React from 'react';
import cls from './Backdrop.css';

const Backdrop = (props) =>(

   props.show ? <div className={cls.Backdrop} onClick={props.clicked}></div> : null

)

export default Backdrop;