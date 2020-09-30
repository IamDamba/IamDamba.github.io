import React from 'react';
import {Link} from 'react-router-dom';
import brand from '../images/IAMDAMBA.svg';
import '../css/App.css';

const Header = () => {
    const topdownMenu = (e)=>{
        if(window.innerWidth <= 768){
            if (document.getElementById("menu").className === 'menu-inactive') {
                document.getElementById("menu").className = 'menu-active'
                document.getElementById("ham").className = 'ham-cross'
            } else if(document.getElementById("menu").className === 'menu-active') {
                document.getElementById("menu").className = 'menu-inactive'
                document.getElementById("ham").className = 'ham'
            }
        }
    }

    
    return (
        <header>
            <div className="brand">
                <Link to='/'><img src={brand} alt="brand.png"/></Link>
            </div>
            <div className="ham" id='ham' onClick={topdownMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="menu-inactive" id="menu">
                <ul>
                    <li><Link to="/Portfolio" onClick={topdownMenu}>Portfolio</Link></li>
                    <li><Link to="/Contact" onClick={topdownMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
