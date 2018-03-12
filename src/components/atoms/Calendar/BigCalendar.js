import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import './CalendarDefault.css';
import './BigCalendar.css';
import moment from 'moment';
import $ from 'jquery';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const events = [
    {
        title: 'Meeting with Den Smith',
        allDay: true,
        start: new Date(2018, 1, 26),
        end: new Date(2018, 1, 26),
    },
    {
        title: 'Team Meeting',
        start: new Date(2018, 2, 2),
        end: new Date(2018, 2, 2),
    },

    {
        title: 'Show guys how to...',
        start: new Date(2018, 2, 2),
        end: new Date(2018, 2, 2),
    },

    {
        title: 'New WebSite presentation',
        start: new Date(2018, 2, 8),
        end: new Date(2018, 2, 8),
    },

    {
        title: 'Meeting with Google CEO',
        start: new Date(2018, 2, 16),
        end: new Date(2018, 2, 16),
    },
    {
        title: 'Report',
        start: new Date(2018, 2, 19),
        end: new Date(2018, 2, 19),
        desc: 'Big conference for important people',
    },
    {
        title: 'Team meeting',
        start: new Date(2018, 2, 21),
        end: new Date(2018, 2, 21),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        title: 'Call to John',
        start: new Date(2018, 2, 21),
        end: new Date(2018, 2, 21),
        desc: 'Power lunch',
    },
    {
        title: 'Meeting with Den Smith',
        allDay: true,
        start: new Date(2018, 1, 16),
        end: new Date(2018, 1, 16),
    },
    {
        title: 'Team Meeting',
        start: new Date(2018, 2, 13),
        end: new Date(2018, 2, 13),
    },

    {
        title: 'Show guys how to...',
        start: new Date(2018, 2, 4),
        end: new Date(2018, 2, 4),
    },

    {
        title: 'New WebSite presentation',
        start: new Date(2018, 2, 9),
        end: new Date(2018, 2, 9),
    },

    {
        title: 'Meeting with Google CEO',
        start: new Date(2018, 2, 1),
        end: new Date(2018, 2, 1),
    },
    {
        title: 'Report',
        start: new Date(2018, 2, 13),
        end: new Date(2018, 2, 13),
        desc: 'Big conference for important people',
    },
    {
        title: 'Team meeting',
        start: new Date(2018, 2, 12),
        end: new Date(2018, 2, 12),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        title: 'Call to John',
        start: new Date(2018, 2, 11),
        end: new Date(2018, 2, 11),
        desc: 'Power lunch',
    }
];


class CalendarEvents extends Component{

    componentDidMount(){
        $(".rbc-btn-group:first-of-type > button:last-child:not(:first-child)").empty();
        $(".rbc-btn-group:first-of-type > button:not(:first-child):not(:last-child)").empty();

    }

    render(){
        return(
            <BigCalendar
                popup
                events={events}
                defaultDate={new Date(2018, 2, 10)}
            />
        )
    }
}

export default CalendarEvents;