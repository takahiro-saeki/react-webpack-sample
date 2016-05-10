import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './sample';

const test = 10;
console.log(test);

class Test extends React.Component {
  render() {
    return(
      <div>
      <Sample />
      </div>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('app')
)
