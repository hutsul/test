import React  from 'react';
import PropTypes from 'prop-types';

import noImage from '../../../../assets/icons/no-image.jpg';
import './style.scss';

const propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

const GridItem = props => {

        return (
            <div className="grid-item">
                <h3 className="grid-item-title hide-mobile">{props.title}</h3>
                <div className="grid-item-img grid-item-top">
                    <img src={noImage} alt="no-image"/>
                </div>
                <div className="grid-item-bottom">
                    <h3 className="grid-item-title hide-desktop">{props.title}</h3>
                    <p className="grid-item-desc">{props.description}</p>
                    <p className="grid-item-date-time">Updated:
                        <span className="date">{props.date}</span>,
                        <span className="time">{props.time}</span>
                    </p>
                </div>
            </div>
        )
}

GridItem.propTypes = propTypes;

export default GridItem;