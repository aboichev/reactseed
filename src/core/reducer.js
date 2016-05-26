import { List, Map } from 'immutable';
import {data} from './mockData';

const init = List(data);

export default function reducer(data=init, action) {
  switch(action.type) {
    case 'CLEAR_ALL':
      return List([]);
    default:
      return data;
  }
}