import React  from 'react';
import cls from './DisplayArea.css';
import DisplayDate from './DisplayDate/DisplayDate';
import DisplayTitle from './DisplayTitle/DisplayTitle';



const DisplayArea = (props) => {

    let displayDate = 'Today'
    let displayTitle = 'Lorem Apsum';

    return(
            <div className={cls.DisplayArea}>
                <DisplayDate displayDate={displayDate}/>
                <DisplayTitle displayTitle={displayTitle}/>
            </div>
    )
}

        

    

export default DisplayArea;