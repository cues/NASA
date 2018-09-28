import React from 'react';
import cls from './SideDrawer.css';
import classes from '../../index.css';
import Rapper from '../../hoc/rapper';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
    let newClass = [cls.sideDrawer, classes.transition_3, cls.Close];
    if(props.show){
         newClass = [cls.sideDrawer, classes.transition_3, cls.Open];
    }

    return(
        <Rapper>
            <Backdrop show={props.show} clicked={props.clicked}/>   
            <div className={newClass.join(' ')}>    
            </div>
        </Rapper>

    )
}
export default sideDrawer;