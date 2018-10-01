import React, { Component } from 'react';
import Layout from './Layout/Layout';
import DisplayArea from '../Components/DisplayArea/DisplayArea';
import axios from 'axios';
import moment from 'moment';


class App extends Component {
  constructor(props){
    super(props);

    const date = moment(); 
    const newDate = date.format('YYYY-MM-DD')

    // this.setState({selectedDate:newDate})

    this.state = {
      dates:{ },
      selectedDate:newDate,
      show: false,
      response :false,
    }
  }


  componentDidMount(){
    this.setState({response : true})
    this.fetchAstronomy(this.state.selectedDate); 
    setTimeout(() => 
      console.log(this.state.dates)
    ,2000)
  }


  getDate = (date) => {
    // console.log(this.newDate)

    this.setState({selectedDate:date})
    this.setState({response : true})

    if(!this.state.dates[date]){
      this.fetchAstronomy(date)
    }

    setTimeout(() => 
      console.log(this.state.dates)
    ,2000)
  }


  fetchAstronomy = (date) => {
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7Ev1ZGT3SQPD6oOZ33NAeCjAWjQtAw72j90f8Am7&date='+date+'')
    .then(response => {
        console.log(response);
      
        let date_display = response.data.date
        date_display = moment(date_display).format('Do MMMM YYYY')
       
        this.setState({
          dates: {
              ...this.state.dates,
              [date] : {
                displayDate : date_display,
                displayTitle : response.data.title,
                displayContent : response.data.explanation,
                displayImage : response.data.hdurl
              }
          }
        })

        // console.log(response.data.hdurl);

        response.data.hdurl !== undefined ? this.setState({show : true}) : this.setState({show : false}) 

    })
    .catch(error => {
      console.log(error)
      this.setState({response :false})
    })
  }





      render() {

                const {selectedDate , dates, show, response} = this.state;
                
                

                return (
                  <Layout date={this.getDate}>
                    <DisplayArea 
                        date = {dates[selectedDate] && dates[selectedDate].displayDate}
                        title = { dates[selectedDate] &&  dates[selectedDate].displayTitle}
                        image = { dates[selectedDate] &&  dates[selectedDate].displayImage}
                        content = { dates[selectedDate] &&  dates[selectedDate].displayContent}
                        show = {show}
                        response = {response}
                    />
                  </Layout>
                );
              }
}

export default App;
