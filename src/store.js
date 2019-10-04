import { createStore } from 'redux';
import tableReducer from './reducers/tableReducer';

let columns = [
  { id: 'offer', label: 'Offer', minWidth: 120, algin: 'center' },
  {
    id: 'advertiser',
    label: 'Advertiser',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'publisher',
    label: 'Publisher',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'isp',
    label: 'ISP',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'request-time',
    label: 'Request Time',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'ip-address',
    label: 'IP-Address',
    minWidth: 100,
    align: 'center',
  },
];

const state = {
  table: {
    columns: columns,
    rows: Array.from(Array(10).keys()).map(item => {
      let object = {};
      columns.forEach(item => {
       object[item.id] = Math.random().toString(36).substring(7);
      })
      return object;
    })
  }
};

function configureStore() {
  return createStore(tableReducer, state);
}

export default configureStore;
