import { all } from 'redux-saga/effects';
import { saga as main } from './home';

const rootSaga = function* () {
    return yield all([
        // -- start connecting sagas
        ...main
        // -- end connecting sagas
    ]);
};

export default rootSaga;
