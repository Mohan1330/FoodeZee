// reducers/reducers.js
const initialState = {
  firstActionSheetOpen: false,
  secondActionSheetData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_FIRST_ACTION_SHEET':
      return {...state, firstActionSheetOpen: true};
    case 'CLOSE_FIRST_ACTION_SHEET':
      return {...state, firstActionSheetOpen: false};
    case 'ADD_DATA':
      return {...state, secondActionSheetData: action.payload};
    default:
      return state;
  }
};

export default reducer;
