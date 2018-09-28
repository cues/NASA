import React from 'react';
import classes from '../../../index.css';
import styled from 'styled-components';

const DisplayContent = styled.div`
    height:auto;
    padding: 10px 20px;
    font-size: 19px;
    color:rgba(23,23,23,.7);
    letter-spacing: 1px;
    box-sizing: border-box;
    width:100%;
    margin: 10px 0;
    /* text-align: center; */
    line-height: 33px;
    cursor: default;
    position: relative;
    float: left;
    @media(max-width:768px){
            font-size: 17px;
            line-height: 30px;
        }
`


const displayContent = (props) => (
        <DisplayContent className={classes.display_flex}>
            {props.displayContent}
        </DisplayContent>
)
 

export default displayContent;