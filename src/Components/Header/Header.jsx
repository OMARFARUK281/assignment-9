import React from 'react';
import './Header.css';
import image from '../../images/image.png';

const Header = () => {
    
    return (
        <div className='all-title-bar'>
            <div className='all-title'>
            <h1 className='title'>One Step Closer To Your <span className='dream'>Dream Job</span></h1>
            <p className='title-bar'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btn-start'>Get Started</button>
            </div>
            <img className='img' src={image} alt="" />
        </div>
    );
};

export default Header;