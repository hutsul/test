import React from 'react';
import { NavLink } from "react-router-dom";
import { PAGES, ROUTES } from "../../../../constants";

const NavigationList = () => {
    return (
        <ul className="navigation-menu">
            <li>
                <NavLink
                    to={ROUTES.news}
                    className="navigation-menu-item"
                >{PAGES.news}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.regions}
                    className="navigation-menu-item"
                >{PAGES.regions}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.video}
                    className="navigation-menu-item"
                >{PAGES.video}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.tv}
                    className="navigation-menu-item"
                >{PAGES.tv}
                </NavLink>
            </li>
        </ul>
    )
};

export default NavigationList;