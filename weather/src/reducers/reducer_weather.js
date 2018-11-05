import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // do not do state.push(action.payload.data)
      // only update state with setState.
      // do not manipulate directly
      // returns a new instance of state
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }

  return state
}
