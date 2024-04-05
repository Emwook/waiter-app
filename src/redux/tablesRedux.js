
//selectors
export const getTableById = ( { tables }, tableId ) => tables.filter(table => table.id === tableId);
export const getAllTables = (state => state.tables);

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const CHANGE_STATUS = createActionName('CHANGE_STATUS');
const CHANGE_BILL = createActionName('CHANGE_BILL');
const CHANGE_NUMBER_PEOPLE = createActionName('CHANGE_NUMBER_PEOPLE');
const CHANGE_MAX_NUMBER_PEOPLE = createActionName('CHANGE_MAX_NUMBER_PEOPLE');

//action creators
export const changeStatus = payload => ({ type: CHANGE_STATUS, payload });
export const changeBill = payload => ({ type: CHANGE_BILL, payload });
export const changeNumPeople = payload => ({ type: CHANGE_NUMBER_PEOPLE, payload });
export const changeMaxNumPeople = payload => ({ type: CHANGE_MAX_NUMBER_PEOPLE, payload });

const tablesReducer = (statePart = [], action) => {
    switch(action.type) {
      case CHANGE_STATUS:
        return statePart.map(table => (table.id === action.payload.id) ?
      { ...table, status: action.payload.status } : table);
      case CHANGE_BILL:
        return statePart.map(table => (table.id === action.payload.id) ?
      { ...table, bill: action.payload.bill } : table);
      case CHANGE_NUMBER_PEOPLE:
        return statePart.map(table => (table.id === action.payload.id) ?
      { ...table, numPeople: action.payload.numPeople } : table);
      case CHANGE_MAX_NUMBER_PEOPLE:
        return statePart.map(table => (table.id === action.payload.id) ?
      { ...table, maxNumPeople: action.payload.maxNumPeople } : table);
      default:
        return statePart;
}}

export default tablesReducer;