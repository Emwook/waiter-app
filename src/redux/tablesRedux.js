//selectors
export const getTableById = ({ tables } , tableId ) => tables.find(table => String(table.id) === String(tableId));
export const getAllTables = (state => state.tables);

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const CHANGE_TABLE_DETAILS = createActionName('CHANGE_TABLE_DETAILS');


//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchAllTableData = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
};

export const changeDetails = payload => ({type: CHANGE_TABLE_DETAILS, payload});
export const requestUpdateDetails = (table) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(table)
    };
    fetch('http://localhost:3131/api/tables', options)
    .then(() => dispatch(changeDetails(table)))
  }
}

const tablesReducer = (statePart = [], action) => {
    switch(action.type) {
      case UPDATE_TABLES:
        return [...action.payload]
      case CHANGE_TABLE_DETAILS:
        return statePart.map(table => (table.id === action.payload.id)
        ? {...table,
           status: action.payload.status,
           numPeople: action.payload.numPeople,
           maxNumPeople: action.payload.maxNumPeople,
           bill: action.payload.bill}
        : table);
      default:
        return statePart;
}}

export default tablesReducer;