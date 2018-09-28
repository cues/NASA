import React from 'react';
import cls from './DisplayDate.css';
import classes from '../../../index.css';

const displayDate = (props) => (
    <div className={[cls.displayDate, classes.display_flex].join(' ')}>
        {props.displayDate}
    </div>
)
   

export default displayDate;