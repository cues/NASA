import React, { Component } from 'react';
import Layout from './Layout/Layout';
import DisplayArea from '../Components/DisplayArea/DisplayArea';
import axios from 'axios';
import moment from 'moment';


class App extends Component {
  state = {
    date : {
      displayDate : null,
        displayTitle : null,
        displayContent : null,
        displayImage : null,
    },
    show: false,
  }


  componentDidMount(){
    const date = moment(); 
    const year  = date.format('YYYY');
    const month = date.format('M');
    const day = date.format('D');
    console.log(year,'-',month,'-',day);
    const newDate = year+'-'+month+'-'+day; 
    this.fetchAstronomy(newDate); 
  }


  getDate = (date) => {
    console.log(date);
    this.fetchAstronomy(date); 
  }


  fetchAstronomy = (date) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7Ev1ZGT3SQPD6oOZ33NAeCjAWjQtAw72j90f8Am7&date='+date+'')
    .then(response => {
        console.log(response);
        let date = response.data.date
        date = moment(date).format('Do MMMM YYYY')
        this.setState({displayDate : date})
        this.setState({displayTitle : response.data.title})
        this.setState({displayContent : response.data.explanation})
        this.setState({displayImage : response.data.hdurl})

        // response.data.hdurl !== undefined ? alert(response.data.hdurl) : alert('null')
        response.data.hdurl !== undefined ? this.setState({show : true}) : this.setState({show : false}) 

    })
  }



  render() {
    return (
      <Layout date={this.getDate}>
        <DisplayArea 
            date = {this.state.displayDate}
            title = {this.state.displayTitle}
            image = {this.state.displayImage}
            content = {this.state.displayContent}
            show = {this.state.show}
        />
      </Layout>
    );
  }
}

export default App;
