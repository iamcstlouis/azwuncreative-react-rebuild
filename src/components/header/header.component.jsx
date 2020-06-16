import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './header.styles.scss'

const Header = () => {

    const toggleMobileMenu = () => {
        var menuToggler = document.querySelector('.menu-toggler');
        var hamburger = document.querySelector('.hamburger-btn');
        var barTop = document.querySelector('.bar__top');
        var barMid = document.querySelector('.bar__mid');
        var barBtm = document.querySelector('.bar__btm');
        var mobileMenu = document.querySelector('.mobile-menu');

        var menuItems = [menuToggler, hamburger, barTop, barMid, barBtm, mobileMenu];

        menuItems.forEach(function (el) {
            el.classList.toggle('open')
        })
    }

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

                <div className='menu-toggler' onClick={() => toggleMobileMenu()}>
                    <div className='hamburger-btn'>
                        <div className='bar bar__top'></div>
                        <div className='bar bar__mid'></div>
                        <div className='bar bar__btm'></div>
                    </div>
                </div>

                <div id='mobile-menu' className='mobile-menu'>
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
    );
}

export default Header;
