import { filter } from 'lodash';
import mockData from './mockData';
import mockApiCall from '../../utils/mockAPI'

const getData = function() {
    return mockData
} ;

export const fetchItems = ({startLimit, endLimit}) => {
    const data = getData().slice(startLimit, endLimit);
    return mockApiCall(data, 2500);
};

export const searchItems = ({startLimit, endLimit, searchValue}) => {
    let data = filter(getData(), item => item.title.indexOf(searchValue) !== -1);
    data = data.slice(startLimit, endLimit);
    return mockApiCall(data, 2500);
};