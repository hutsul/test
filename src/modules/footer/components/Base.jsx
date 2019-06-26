import React from 'react';
import NavigationList from "../../shared/components/NavigationList";

import './style.scss';

const Footer = () => {

    return (
        <footer className="main-footer">
            <NavigationList/>
            <p className="copyright">Copy right</p>
        </footer>
    )
};

export default Footer;