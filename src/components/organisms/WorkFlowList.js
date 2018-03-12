import React, { Component } from 'react';
import './WorkFlowList.css';
import ArrowNext from '../../assets/img/arrow-next.png';
import Options from '../../assets/img/Options.png';


const ItemListToDo = [
    {
        id: 1,
        img_wrap: 'N',
        title: 'New website for JCD.pl',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 2,
        img_wrap: 'F',
        title: 'Free PSD Template vol. 3',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 3,
        img_wrap: 'N',
        title: 'New logo for Google',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 4,
        img_wrap: 'N',
        title: 'New website for Windu.org',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 5,
        img_wrap: 'F',
        title: 'Free PSD Template vol. 2',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 6,
        img_wrap: 'I',
        title: 'Iconset Vol. 3',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    }
];

const ItemListInProgress = [
    {
        id: 1,
        img_wrap: 'N',
        title: 'New logo for Apple',
        day_title: '1 day left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 2,
        img_wrap: 'D',
        title: 'Daily UI Kit',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 3,
        img_wrap: 'B',
        title: 'Business Cards',
        day_title: '2 days delays',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-error'
    }
];

const ItemListCompleted = [
    {
        id: 1,
        img_wrap: 'F',
        title: 'Free PSD Template vol. 1',
        day_title: 'Completed!',
        font_awesome: 'fa fa-check-circle',
        font: 'days-left days-left-completed'
    },
    {
        id: 2,
        img_wrap: 'I',
        title: 'Iconset vol. 1',
        day_title: 'Completed!',
        font_awesome: 'fa fa-check-circle',
        font: 'days-left days-left-completed'
    },
    {
        id: 3,
        img_wrap: 'N',
        title: 'New website for Symu.co',
        day_title: 'Completed!',
        font_awesome: 'fa fa-check-circle',
        font: 'days-left days-left-completed'
    },
    {
        id: 4,
        img_wrap: 'I',
        title: 'Iconset vol. 2',
        day_title: 'Completed!',
        font_awesome: 'fa fa-check-circle',
        font: 'days-left days-left-completed'
    }
];

class WorkFlowList extends Component{
    render(){
        return(
            <ul className="row">

                <li className="col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="Workflow-Title">to do <span>(6)</span></h4>
                        <img src={ ArrowNext } alt="" className="arrow-next"/>
                    </div>
                    <ul className="TaskList">
                        {
                            ItemListToDo.map(item =>{
                                return(
                                    <li className="TaskList-Item" key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="TaskList-Wrap d-flex align-items-center">
                                                <div className="TaskWrap">
                                                    <span>{item.img_wrap}</span>
                                                </div>
                                                <ul>
                                                    <li className="Task-Title">{item.title}</li>
                                                    <li className={item.font}>
                                                        <i className={item.font_awesome} aria-hidden="true"></i>
                                                        {item.day_title}
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={ Options} className="Options-img"  alt=""/>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </li>

                <li className="col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="Workflow-Title">in progress <span>(3)</span></h4>
                        <img src={ ArrowNext } alt="" className="arrow-next"/>
                    </div>
                    <ul className="TaskList">
                        {
                            ItemListInProgress.map(item =>{
                                return(
                                    <li className="TaskList-Item" key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="TaskList-Wrap d-flex align-items-center">
                                                <div className="TaskWrap">
                                                    <span>{item.img_wrap}</span>
                                                </div>
                                                <ul>
                                                    <li className="Task-Title">{item.title}</li>
                                                    <li className={item.font}>
                                                        <i className={item.font_awesome} aria-hidden="true"></i>
                                                        {item.day_title}
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={ Options} className="Options-img"  alt=""/>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </li>

                <li className="col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="Workflow-Title">Completed  <span>(4)</span></h4>
                        <img src={ ArrowNext } alt="" className="arrow-next"/>
                    </div>
                    <ul className="TaskList">
                        {
                            ItemListCompleted.map(item =>{
                                return(
                                    <li className="TaskList-Item" key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="TaskList-Wrap d-flex align-items-center">
                                                <div className="TaskWrap">
                                                    <span>{item.img_wrap}</span>
                                                </div>
                                                <ul>
                                                    <li className="Task-Title">{item.title}</li>
                                                    <li className={item.font}>
                                                        <i className={item.font_awesome} aria-hidden="true"></i>
                                                        {item.day_title}
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={ Options} className="Options-img"  alt=""/>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </li>
            </ul>
        )
    }
}

export default  WorkFlowList;