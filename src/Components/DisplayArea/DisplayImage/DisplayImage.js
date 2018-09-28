import React from 'react';
import cls from './DisplayImage.css';
import classes from '../../../index.css';
// import Image from 'react-graceful-image';
// import logo from '../../../Assets/Images/nasa_logo.png';

const displayImage = (props) => {
    // const image = props.displayImage;
    
    let imageClass = [cls.displayImage, cls.displayImage_alt, classes.display_flex];
    let inner_image = [cls.displayImage_inner, classes.none]
    if(props.show){
      imageClass = [cls.displayImagex, classes.display_flex]
      inner_image = [cls.displayImage_inner]
    }

    return(
            <div className={imageClass.join(' ')}>
                    <img src={props.displayImage}
                            className={inner_image.join(' ')} 
                            alt="Display_Image"/>
            </div>
        )
}
   
   

export default displayImage;