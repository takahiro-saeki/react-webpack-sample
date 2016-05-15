export const ADD_TEXT = 'ADD_TEXT';
export const CLEAR_TEXT = 'CLEAR_TEXT';
export const REDUX_TEST = 'REDUX_TEST';
export const SAMPLE_TEXT = 'SAMPLE_TEXT';
let textId = 1

export function addText(newText) {
  return {
    type: ADD_TEXT,
    id: textId++,
    text: newText
  };
}

export function clearText() {
  return {
    type: CLEAR_TEXT
  };
}

export function reduxTest() {
  return {
    type: REDUX_TEST
  }
}

export function sampleText() {
  return {
    type: SAMPLE_TEXT
  }
}
