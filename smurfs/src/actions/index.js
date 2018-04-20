/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        console.log('getSmurfs response', response);
        dispatch({ type: SMURFS_FETCHED , payload: response.data});
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

export const addSmurfs = (smurfData) => {
  const smurfs = axios.post(`${URL}`, smurfData);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    smurfs
      .then(response => {
        console.log('addSmurfs response', response);
        dispatch({ type: SMURF_ADDED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}