import { combineReducers } from 'redux';
import { ADD_TEXT, CLEAR_TEXT, REDUX_TEST, SAMPLE_TEXT } from './actions';

let initialState = [
  {
    id: 0,
    text: 'Hello Redux and React!'
  }
]

let text = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TEXT:
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ];
    case CLEAR_TEXT:
    return []
    case REDUX_TEST:
    return [
      {
        id: 666,
        text: 'hogeee'
      }
    ]
    case SAMPLE_TEXT:
    return [
      {
        id: 999,
        text: new Date().getFullYear()
      },
      {
        id:1000,
        text: '1000!!!!'
      }
    ]
    default:
    return state
  }
};

export const store = combineReducers(
  {
    storedText : text
  }
)
