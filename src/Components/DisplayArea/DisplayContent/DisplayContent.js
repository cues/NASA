import React from 'react';
import cls from './DisplayContent.css';
import classes from '../../../index.css';

const displayContent = (props) => (
    <div className={[cls.displayContent, classes.display_flex].join(' ')}>
        {props.displayContent}
    </div>
)
   

export default displayContent;