import React from 'react';
import classes from '../../../index.css';
import styled from 'styled-components';

const DisplayTitle = styled.div`
    height:auto;
    padding: 10px 20px;
    font-size: 26px;
    line-height: 38px;
    color:rgba(23,23,23,1);
    text-shadow: 0 0 2px rgba(23,23,23,.5);
    letter-spacing: 1px;
    box-sizing: border-box;
    width:100%;
    margin: 10px 0;
    text-align: center;
    cursor: default;
    position: relative;
    float: left;
    @media(max-width:768px){
        font-size: 23px;
        line-height: 35px;
    }
`


const displayTitle = (props) => (
    <DisplayTitle className={classes.display_flex}>
        {props.displayTitle}
    </DisplayTitle>
)
   

export default displayTitle;