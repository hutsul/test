import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import logo from '../../../assets/icons/logo.svg';
import { ROUTES, PAGES } from '../../../constants/index';

import NavigationComponent from './Navigation'
import './style.scss';
import Search from "../../shared/components/Search";

const propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleNav: PropTypes.func.isRequired,
    searchItems: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    searchValue: PropTypes.string
};

class Header extends Component {
    render() {
        const { isActive, toggleNav, path, searchValue, searchItems } = this.props;
        const title = path ? path : PAGES.home;

        return (
            <header className="main-header">
                <div className="main-header-top">
                    <Link to={ROUTES.home} className="hero">
                        <img src={logo}
                             alt="logo"
                        />
                    </Link>
                    <h2 className="main-header-title">{title}</h2>
                    <NavigationComponent
                        isActive={isActive}
                        toggleNav={toggleNav}
                        searchItems={searchItems}
                        searchValue={searchValue}
                    />
                </div>
                <div className="main-header-bottom">
                    <Search onChange={searchItems} value={searchValue}/>
                </div>
            </header>
        )
    }
}

Header.propTypes = propTypes;

export default Header;