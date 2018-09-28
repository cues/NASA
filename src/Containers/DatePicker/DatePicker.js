import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import cls from './DatePicker.css';


class DateBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
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