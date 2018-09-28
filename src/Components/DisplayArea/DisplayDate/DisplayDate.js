import React from 'react';
import classes from '../../../index.css';
import styled from 'styled-components';

const DisplayDate = styled.div`
    height:auto;
    width:100%;
    font-size: 28px; 
    color:rgba(15,101,141,.9);
    text-shadow: 0 0 2px rgba(102,102,102,.6);
    letter-spacing: 1.2px;
    padding: 10px 20px;
    margin: 10px 0 5px;
    box-sizing: border-box;
    cursor: default;
    position: relative;
    float: left;
    @media(max-width:768px){
        font-size:26px
    }
`

const displayDate = (props) => (
    <DisplayDate className={classes.display_flex}>
        {props.displayDate}
    </DisplayDate>
)
   

export default displayDate;