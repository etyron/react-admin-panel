import React, { Component } from 'react';
import './ActiveUsersSales.css';
import ActiveUsersSalesChart from "../molecules/ActivUsersSalesChart";
import ActiveUsersViewsChart from "../molecules/ActivUsersViewsChart";


class ActiveUsersSales extends Component{

    render(){
        return(
            <div className="ActiveUsers-Sales">
                <ActiveUsersSalesChart/>
                <ActiveUsersViewsChart/>
            </div>
        )
    }
}

export default ActiveUsersSales;