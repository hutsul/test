import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Search from "../../../shared/components/Search";
import NavigationList from "../../../shared/components/NavigationList";
import './style.scss';

const propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleNav: PropTypes.func.isRequired,
    searchItems: PropTypes.func.isRequired,
    searchValue: PropTypes.string
};

class NavigationComponent extends Component {
    render() {
        const { isActive, toggleNav, searchValue, searchItems } = this.props;
console.log('this.props', this.props);
        return (
            <nav className={classNames("navigation", {'active': isActive})}>
                <span
                    className="navigation-burger"
                    onClick={toggleNav}>
                    <i className="line"/>
                    <i className="line"/>
                    <i className="line"/>
                    <i className="line"/>
                </span>
               <NavigationList/>
                <Search onChange={searchItems} value={searchValue}/>
            </nav>
        )
    }
}

NavigationComponent.propTypes = propTypes;

export default NavigationComponent;