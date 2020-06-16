import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './header.styles.scss'


export default class Header extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        return (
            <div id='nav'>
                <div className='container'>
                    <div className='logo'>
                        <div className='logo-wrapper'>
                            <Link to='/'>
                                <img
                                    src={require('../../assets/imgs/global/azwun-logo-mark2.svg')}
                                    className='logo'
                                    alt='Azwun Logo'
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={`menu-toggler`} onClick={this.handleClick}>
                        <div className='hamburger-btn'>
                            <div className={`bar bar__top ${this.state.isOpen ? 'open' : undefined}`}></div>
                            <div className={`bar bar__mid ${this.state.isOpen ? 'open' : undefined}`}></div>
                            <div className={`bar bar__btm ${this.state.isOpen ? 'open' : undefined}`}></div>
                        </div>
                    </div>

                    <div id='mobile-menu' className={`mobile-menu ${this.state.isOpen ? 'open' : undefined}`}>
                        <div className='mobile-menu-links'>
                            <div className='container'>
                                <ul>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/'>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/work'>
                                            Work
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/about'>
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='contact'>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='desktop-menu'>
                        <div className='desktop-links'>
                            <ul>
                                <li>
                                    <NavLink
                                        exact
                                        to='/'>
                                        Home
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to='/work'>
                                        Work
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to='/about'>
                                        About
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to='contact'>
                                        Contact
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
