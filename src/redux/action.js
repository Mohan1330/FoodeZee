// actions/actions.js
export const openFirstActionSheet = () => ({ type: 'OPEN_FIRST_ACTION_SHEET' });
export const closeFirstActionSheet = () => ({ type: 'CLOSE_FIRST_ACTION_SHEET' });
export const openSecondActionSheet = () => ({ type: 'OPEN_SECOND_ACTION_SHEET' });
export const closeSecondActionSheet = () => ({ type: 'CLOSE_SECOND_ACTION_SHEET' });
export const addData = (data) => ({ type: 'ADD_DATA', payload: data });
