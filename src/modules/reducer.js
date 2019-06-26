import { combineReducers } from 'redux';
// import { routerReducer as router } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import { reducer as main } from './home';
import { reducer as header } from './header';
import { reducer as home } from './home';
import history from '../utils/history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    main,
    header,
    home
});

export default rootReducer;
