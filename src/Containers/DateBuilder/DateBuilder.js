import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import cls from './DateBuilder.css';




class DateBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
      }

    //   data:{

    // }
        // onathang = (date) => {

        //     this.state.data[date] ? return this.state.data[date] 
            
        //     const resp = fetch(date)
        //     this.setState({
        //         data: {
        //             ...this.state.data,
        //             [date]: resp
        //         }
        //     })
        // }

    doNothing = () => {}


    handleChange(date) {
        const newDay = moment(date).format('YYYY-MM-DD');
        this.setState({
          startDate: date
        });
        this.props.date(newDay);
        this.props.show ? this.props.clicked() : this.doNothing()
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