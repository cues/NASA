import React from 'react';
import classes from '../../index.css';
import styled from 'styled-components';


const Footer = styled.div`
    height:40px;
    width:100vw;
    background: rgba(0,0,0,.9);
    box-shadow: 0 0 4px 0 rgba(23,23,23,.8);
    padding:0 20px;
    box-sizing: border-box;
    position: fixed;
    bottom:0;
    left:0;
    color:rgba(255,255,255,.8);
    font-size: 15px;
    letter-spacing: 1px;

        @media(max-width:768px){
            height:30px;
            font-size: 13px;
            letter-spacing: .8px;
        }
`






const footer = () => (
    <Footer className={classes.display_flex}>
        Erroll Antao &copy; 2018
    </Footer>
)

export default footer;