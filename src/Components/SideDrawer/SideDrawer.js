import React from 'react';
import cls from './SideDrawer.css';
import classes from '../../index.css';
import Rapper from '../../hoc/rapper';
import Backdrop from '../Backdrop/Backdrop';
import DateBuilder from '../../Containers/DateBuilder/DateBuilder';

const sideDrawer = (props) => {
    let newClass = [cls.sideDrawer, classes.transition_3, cls.Close];
    if(props.show){
         newClass = [cls.sideDrawer, classes.transition_3, cls.Open];
    }

    return(
        <Rapper>
            <Backdrop show={props.show} clicked={props.clicked}/>   
            <div className={newClass.join(' ')}>    
                <div className={[cls.search, classes.display_flex, classes.cursor_pointer, 'material-icons'].join(' ')}>
                <DateBuilder date={props.date} clicked={props.clicked} show={props.show}/> 
                </div>
            </div>
        </Rapper>

    )
}
export default sideDrawer;