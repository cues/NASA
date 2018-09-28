import React from 'react';
import cls from './DisplayDate.css';

const displayDate = (props) => (
    <div className={cls.displayDate}>
        {props.displayDate}
    </div>
)
   

export default displayDate;