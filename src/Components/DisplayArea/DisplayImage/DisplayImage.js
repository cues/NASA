import React from 'react';
import cls from './DisplayImage.css';
import classes from '../../../index.css';
// import Image from 'react-graceful-image';
// import logo from '../../../Assets/Images/nasa_logo.png';

const displayImage = (props) => {
    // const image = props.displayImage;
    
    let image = "";

    if(props.displayImage){
        let imageClass = [classes.none];
        let inner_image = [classes.none]
        
        if(props.show){
          imageClass = [cls.displayImage, classes.display_flex]
          inner_image = [cls.displayImage_inner]
        }
    
         image =  (<div className={imageClass.join(' ')}>
                        <img src={props.displayImage}
                                className={inner_image.join(' ')} 
                                alt="Display_Image"/>
                        </div>);
    }


    return image
  
}
   
   

export default displayImage;