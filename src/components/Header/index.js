import React from 'react';
import { Link } from 'react-router-dom'; 

import './styles.scss';

const Header = () => (
    <header>
        <div className="logo">Wu<span>nari</span></div>
        <nav>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">About</Link></li>
        </nav>
    </header>
);

export default Header;