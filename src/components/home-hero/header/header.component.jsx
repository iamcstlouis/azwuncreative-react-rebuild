import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss'

const Header = () => {
    return (
        <div id='nav'>
            <div className='container'>
                <div className='logo'>
                    <div className='logo-wrapper'>
                        {/* <router-link to='/' exact v-on:click='closeMenu()'> */}
                        <Link to='/'>
                            <img
                                src={require('../../../assets/imgs/global/azwun-logo-mark2.svg')}
                                className='logo'
                                alt='Azwun Logo'
                            />
                        </Link>
                    </div>
                </div>

                {/* <div className='menu-toggler' v-on:click='toggleState()'> */}
                <div className='menu-toggler'>
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
                                    Home
                {/* // <router-link : {{ obj.link }}</router-link> */}
                                    {/* <Link></Link> */}
                                </li>
                            </ul>
                        </div>
                    </div >
                </div >

                <div className='desktop-menu'>
                    <div className='desktop-links'>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/work'>
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to='contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Header;
