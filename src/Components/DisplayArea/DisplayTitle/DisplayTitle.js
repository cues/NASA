import React from 'react';
import cls from './DisplayTitle.css';
import classes from '../../../index.css';

const displayTitle = (props) => (
    <div className={[cls.displayTitle, classes.display_flex].join(' ')}>
        {props.displayTitle}
    </div>
)
   

export default displayTitle;