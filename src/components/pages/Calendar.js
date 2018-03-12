import React , { Component } from 'react';
import './Calendar.css';
import CalendarEvents from "../atoms/Calendar/BigCalendar";

class Calendar extends Component {
    render() {
        return(
            <section className="CalendarPage">
                <div className="container-fluid">
                    <CalendarEvents/>
                </div>
            </section>
        )
    }
}
export default Calendar;