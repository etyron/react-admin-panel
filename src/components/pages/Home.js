import React , { Component } from 'react';
import './Home.css';
import HomeActiveSales from "../organisms/HomeActiveSales";
import HomeSalesCard from "../organisms/HomeSalesCard";
import HomePageList from "../organisms/HomePageList";

const periodOfSales = ['Last year', 'Last month', 'Last week'];
const username = localStorage.getItem('username');

class Home extends Component {
    render() {
        return (
            <section className="HomePage">
                <div className="container-fluid">
                    <h3 className="HomePage-Title">Hello {username}!</h3>
                    <div className="HomePageFlex row align-items-stretch">
                        <div className="col-md-5">
                            <HomeSalesCard data={periodOfSales}/>
                        </div>
                        <div className="col-md-7">
                            <HomeActiveSales data={periodOfSales}/>
                        </div>
                    </div>
                    <HomePageList/>
                </div>
            </section>
        )
    }
}

export default Home;