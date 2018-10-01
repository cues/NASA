import React  from 'react';
import DisplayDate from './DisplayDate/DisplayDate';
import DisplayTitle from './DisplayTitle/DisplayTitle';
import DisplayContent from './DisplayContent/DisplayContent';
import DisplayImage from './DisplayImage/DisplayImage';
import styled from 'styled-components';

const DisplayArea = styled.div`
    height: auto;
    width: 100%;
    max-width: 800px;
    margin: 70px 0 40px;
    margin-left: calc(50vw - 400px);
    background:rgba(102,102,102,.2);
    box-shadow: 0 0 4px 0 rgba(23,23,23,.4);
    box-sizing: border-box;
    padding: 10px 0;
    position: relative;
    float: left;
    @media(max-width:800px){
            margin-left: 0
    }
    @media(max-width:768px){
            margin: 50px 0 30px;
    }
`


 const displayArea = (props) =>{
    // props.response ? alert('ok') : alert('not')

     let display = ( 
                     <DisplayArea>
                         <DisplayDate displayDate='Nothing to show'/>
                      </DisplayArea>
                );
     if(props.response){
         display = (
            <DisplayArea>
                <DisplayDate displayDate={props.date}/>
                <DisplayTitle displayTitle={props.title}/>
                <DisplayImage displayImage={props.image} show={props.show}/>
                <DisplayContent displayContent={props.content}/>
            </DisplayArea>
         )
     }
     return display;
 }


  


    
    

export default displayArea;