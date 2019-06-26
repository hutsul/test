import React from 'react';
import PropTypes from 'prop-types';

import { Loop } from '../svgIcons';
import './style.scss'

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string
};

const Search = props => {
    return (
        <div className="input-holder">
            <Loop/>
            <input
                className="input-search"
                type="text"
                placeholder={props.placeholder || 'Search'}
                onChange={e => props.onChange(e.target.value)}
                value={props.value}
            />
        </div>
    )
};

Search.propTypes = propTypes;

export default Search;