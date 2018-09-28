import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import cls from './DatePicker.css';
import axios from 'axios';


class DateBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
      }


      componentDidMount(){
            axios.get('https://api.nasa.gov/planetary/apod?api_key=Ss9IZ3QMGLRhNHh79ClEvEBtO5FazBst0ujSgNO3')
                .then(response => {
                    console.log(response);
                })
        }




    handleChange(date) {
        // const newDay = moment(date).format('YYYY-MM-DD');
        this.setState({
          startDate: date
        });
      }



    render(){
        return(
            <div className={cls.DatePicker}>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default DateBuilder;