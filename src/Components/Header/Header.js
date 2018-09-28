import React from 'react';
import cls from './Header.css';
import classes from '../../index.css';
import logo from '../../Assets/Images/nasa_logo.png';
import DateBuilder from '../../Containers/DateBuilder/DateBuilder';

const header = (props) => (
        
        <div className={[cls.header , classes.display_flex].join(' ')}>
            <div className={cls.logo}><img src={logo} alt='logo'/></div>
            <div className={[cls.search, classes.display_flex, classes.cursor_pointer, 'material-icons'].join(' ')}>
              <DateBuilder/>
            </div>
            <i className={[cls.menu, classes.display_flex, 'material-icons'].join(' ')}
                onClick={props.clicked}>menu</i>
        </div>

)

export default header;