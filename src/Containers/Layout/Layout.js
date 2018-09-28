import  React , { Component } from 'react';
import Rapper from '../../hoc/rapper';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SideDrawer from '../../Components/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showBackdrop : false,
    }

    openBackdropHandler = () => {
        this.setState(prevState =>  {return{showBackdrop : !prevState.showBackdrop}})
    }

    closeBackdropHandler = () => {
        this.setState(prevState =>  {return{showBackdrop : !prevState.showBackdrop}})
    }

    render(){

        const {children:child} = this.props;
        const {showBackdrop} = this.state;

        return(
            <Rapper> 
                <SideDrawer show={showBackdrop} clicked={this.closeBackdropHandler} date={this.props.date}/>
                <Header clicked={this.openBackdropHandler} date={this.props.date} />
                <main>{child}</main>
                <Footer/>
            </Rapper>
        )
    }
}


export default Layout;