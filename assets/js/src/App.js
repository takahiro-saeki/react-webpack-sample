import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText, clearText, reduxTest, sampleText } from './actions';

class App extends Component {
  onAddBtnClicked(e) {
    let input = this.refs.input
    let text = input.value.trim()
    if (!text) return alert('何かテキストを入力してください。')
    input.value = ''
    this.props.dispatch(addText(text))
  }

  onClearBtnClicked(e) {
    this.props.dispatch(clearText())
  }

  onTestBtnClicked(e) {
    this.props.dispatch(reduxTest())
  }

  onSample(e) {
    this.props.dispatch(sampleText())
  }

  render() {
    return (
      <div>
      <input type='text' ref='input' /><br/>
      <button onClick={ e => this.onAddBtnClicked(e)}   >Add</button>
      <button onClick={ e => this.onClearBtnClicked(e)} >Clear</button>
      <button onClick={ e => this.onTestBtnClicked(e)} >Test</button>
      <button onClick={ e => this.onSample(e)} >Sample</button>
      <ul>
      {
        this.props.state.storedText.map((obj) =>
        <li key={obj.id} >
        {obj.text}
        </li>
      )
    }
    </ul>
    </div>
    )
  }
}

let selector = (state) => {
  console.log(state)
  return {
    state: state
  }
}

export default connect(selector)(App)
