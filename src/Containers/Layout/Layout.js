import  React , { Component } from 'react';
import Rapper from '../../hoc/rapper';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Backdrop from '../../Components/Backdrop/Backdrop'


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
                <Backdrop show={showBackdrop} clicked={this.closeBackdropHandler}/>   
                <Header clicked={this.openBackdropHandler} />
                <main>{child}</main>
                <Footer/>
            </Rapper>
        )
    }
}


export default Layout;