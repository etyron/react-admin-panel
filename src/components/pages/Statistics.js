import React , { Component } from 'react';
import './Statistics.css';
import ActiveUsers from "../organisms/ActiveUsers";
import ActiveUsersSales from "../organisms/ActiveUsersSales";
import TotalSales from "../organisms/TotalSales";
import SelectPeriod from "../atoms/SelectPeriod";
import TitleMain from "../atoms/TitleMain";

const periodOfSales = ['Last year', 'Last month', 'Last week'];
const typeofSelect = ['Notification', 'Other'];

class Statistics extends Component {
    render() {
        return(
            <section className="StatisticsPage">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <TitleMain title={'Lorem Ipsum Stats'}/>
                        <ul className="d-flex Statistics-List">
                            <li><SelectPeriod data={ periodOfSales }/></li>
                            <li><SelectPeriod data={ typeofSelect }/></li>
                        </ul>
                    </div>
                    <div className="row StatisticsChart-List">
                        <div className="col-md-5">
                            <ActiveUsersSales/>
                        </div>
                        <div className="col-md-7">
                            <ActiveUsers data={periodOfSales}/>
                        </div>
                    </div>
                   <TotalSales/>
                </div>
            </section>
        )
    }
}

export default Statistics;