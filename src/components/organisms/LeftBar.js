import React from 'react';

import { NavLink} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './LeftBar.css';


class LeftBar extends React.Component {
    render() {
        return (
            <div className="LeftBarMenu">
                <div className="Logo">
                    <img src={ Logo } alt="Logo"/>
                </div>
                <nav>
                    <ul className="LeftBarNav">
                        <li><NavLink className="Home" activeClassName="active" exact  to="/">Home</NavLink></li>
                        <li><NavLink className="Workflow" activeClassName="active" to="/workflow">Workflow</NavLink></li>
                        <li><NavLink className="Statistics" activeClassName="active" to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className="Calendar" activeClassName="active" to="/calendar">Calendar</NavLink></li>
                        <li><NavLink className="User" activeClassName="active" to="/users">Users</NavLink></li>
                        <li><NavLink className="Settings" activeClassName="active" to="/settings">Settings</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;