import React, {Component} from 'react';
import './style.scss';

class ItemsGrid extends Component {

    render(){
        return (
            <div className="items-grid">
                {this.props.children}
            </div>
        )
    }
}

export default ItemsGrid;