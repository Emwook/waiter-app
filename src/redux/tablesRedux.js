import { API_URL } from "../config.js";

//selectors
export const getTableById = ({ tables } , id ) => tables.find(table => String(table.id) === String(id));
export const getAllTables = (state => state.tables);

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const CHANGE_TABLE_DETAILS = createActionName('CHANGE_TABLE_DETAILS');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');


//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchAllTableData = () => {
  return (dispatch) => {
    fetch(API_URL+'/tables') //was http://localhost:3131/api/tables'
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
};

export const changeDetails = payload => ({type: CHANGE_TABLE_DETAILS, payload});
export const requestUpdateDetails = (data) => {
  return (dispatch) => {
    
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const url = API_URL+`/tables/${data.id}`; // was http://localhost:3131/tables/${data.id}
    fetch(url, options)
      .then(() => dispatch(changeDetails(data)));
  };
};

export const removeTable = payload => ({type: REMOVE_TABLE, payload});
export const requestTableRemove = (data) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const url = API_URL+`/tables/${data.id}`; // was http://localhost:3131/tables/${data.id}
    fetch(url, options)
      .then(() => dispatch(removeTable(data)));
  };
};

export const addTable = payload => ({type: ADD_TABLE, payload});
export const requestTableAdd = (data) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const url = API_URL+`/tables`; // was http://localhost:3131/tables/${data.id}
    fetch(url, options)
      .then(() => dispatch(addTable(data)));
  };
};


const tablesReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case CHANGE_TABLE_DETAILS:
      const { id, status, numPeople, maxNumPeople, bill } = action.payload;
      return statePart.map(table => {
        if (table.id === id) {
          return {
            ...table,
            status: status !== undefined ? status : table.status,
            numPeople: numPeople !== undefined ? numPeople : table.numPeople,
            maxNumPeople: maxNumPeople !== undefined ? maxNumPeople : table.maxNumPeople,
            bill: bill !== undefined ? bill : table.bill
          };
        }
        return table;
      });
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload.id);
    case ADD_TABLE:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
};


export default tablesReducer;