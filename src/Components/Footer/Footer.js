import React from 'react';
import cls from './Footer.css';
import classes from '../../index.css';

const footer = () => (
    <div className={[cls.footer, classes.display_flex].join(' ')}>
        Erroll Antao &copy; 2018
    </div>
)

export default footer;