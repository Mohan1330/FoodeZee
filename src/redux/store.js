// import {configureStore}  from '@reduxjs/toolkit';

// const store = configureStore({
//     reducer:{
//         secondActionSheetOpen:false,
//         secondActionSheetData: '',
//     }
// })

// export default store;

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
