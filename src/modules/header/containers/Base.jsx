import Component from '../components/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as homeActions from '../../home/actions';
import * as selectors from '../selectors';
import * as homeSelectors from '../../home/selectors';

const mapStateToProps = state => ({
    isActive: selectors.isActive(state),
    path: selectors.getPathName(state),
    searchValue: homeSelectors.getSearchValue(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleNav: actions.toggleNav,
    searchItems: homeActions.searchItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);