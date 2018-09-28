import React , { Component }  from 'react';
import cls from './DisplayArea.css';
import DisplayDate from './DisplayDate/DisplayDate';
import DisplayTitle from './DisplayTitle/DisplayTitle';
import DisplayContent from './DisplayContent/DisplayContent';
import DisplayImage from './DisplayImage/DisplayImage';
import axios from 'axios';
import moment from 'moment';
import image from '../../Assets/Images/nasa_logo.png'



class DisplayArea extends Component {
    state = {
        displayDate : null,
        displayTitle : null,
        displayContent : null,
        displayImage : {image},

        show : false
    }



    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=7Ev1ZGT3SQPD6oOZ33NAeCjAWjQtAw72j90f8Am7')
        .then(response => {
            console.log(response);
            let date = response.data.date
            date = moment(date).format('Do MMMM YYYY')
            this.setState({displayDate : date})
            this.setState({displayTitle : response.data.title})
            this.setState({displayContent : response.data.explanation})
            this.setState({displayImage : response.data.hdurl})

            response.data.hdurl !== null ? this.setState({show : true}) : this.setState({show : false}) 

        })
    }
    

    


    render(){

        return(
                <div className={cls.DisplayArea}>
                        <DisplayDate displayDate={this.state.displayDate}/>
                        <DisplayTitle displayTitle={this.state.displayTitle}/>
                        <DisplayImage displayImage={this.state.displayImage} show={this.state.show}/>
                        <DisplayContent displayContent={this.state.displayContent}/>
                </div>
            )
    }
   
}

        

    

export default DisplayArea;