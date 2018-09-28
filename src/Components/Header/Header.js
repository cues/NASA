import React from 'react';
import cls from './Header.css';
import classes from '../../index.css';
import logo from '../../Assets/Images/nasa_logo.png';
import DateBuilder from '../../Containers/DateBuilder/DateBuilder';
import styled from 'styled-components';


const Header = styled.div`
        height:70px;
        width:100vw;
        background: rgba(0,0,0,.9);
        box-shadow: 0 0 4px 0 rgba(23,23,23,.8);
        justify-content: space-between;
        padding:0 20px;
        box-sizing: border-box;
        position: fixed;npm 
        top:0;
        left:0;
        z-index: 400;

        @media(max-width:768px){
                height:50px;
                padding: 0 10px;
        }
`

const Logo = styled.div`
    height: 100%;
    width: 70px;
    color:rgba(255,255,255,.8);
    cursor: default
    @media(max-width:768px){
        width: 50px;
        font-size: 30px;
    }
   
`



const header = (props) => (      
        <Header className={[classes.display_flex].join(' ')}>
            <Logo className={cls.logo}><img src={logo} alt='logo'/></Logo>
            <div className={[cls.search, classes.display_flex, classes.cursor_pointer, 'material-icons'].join(' ')}>
              <DateBuilder date={props.date}/>
            </div>
            <i className={[cls.menu, classes.display_flex, 'material-icons'].join(' ')}
                onClick={props.clicked}>menu</i>
        </Header>

)

export default header;