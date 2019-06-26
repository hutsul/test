import Component from '../components/Base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as selectors from '../selectors';

const mapStateToProps = state => ({
    items: selectors.getItems(state),
    isFetching: selectors.isFetching(state),
    canLoad: selectors.canLoad(state),
    canLoadMore: selectors.canLoadMore(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchItems: actions.fetchItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);