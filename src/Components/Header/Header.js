import React from 'react';
import cls from './Header.css';
import classes from '../../index.css';
import logo from '../../Assets/Images/nasa_logo.png';
import DateBuilder from '../../Containers/DatePicker/DatePicker';

const header = (props) => (
        
        <div className={[cls.header , classes.display_flex].join(' ')}>
            <div className={cls.logo}><img src={logo} alt='logo'/></div>
            <div className={[cls.search, classes.display_flex, classes.cursor_pointer, 'material-icons'].join(' ')}>
              <DateBuilder/>
            </div>
        </div>

)

export default header;