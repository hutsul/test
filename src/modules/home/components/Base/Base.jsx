import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridItem from "../GridItem";
import Loader from "../../../shared/components/DateLoad";
import ItemsGrid from "../ItemsGrid";

import './style.scss';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    })),
    isFetching: PropTypes.bool.isRequired,
    canLoadMore: PropTypes.bool.isRequired,
    fetchItems: PropTypes.func.isRequired,
};

class Home extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    getItemsGrid(){
        const { items } = this.props;

        if(!items.length){
            return <p className="no-data">No Results</p>
        }

        return (
            <ItemsGrid>
                {items.map(item => (
                    <GridItem key={`${item.id}`} {...item}/>
                ))}
            </ItemsGrid>
        )
    }

    render() {
        const { isFetching, canLoadMore, fetchItems} = this.props;
        const gridItems = this.getItemsGrid();
        return (
            <div className="home">
                {gridItems}
                {isFetching && <Loader/>}
                {canLoadMore && <div className="load-more-holder">
                    <button className="load-more" onClick={() => fetchItems()}>Load More</button>
                </div>
                }
            </div>
        )
    }
}

Home.propTypes = propTypes;

export default Home;