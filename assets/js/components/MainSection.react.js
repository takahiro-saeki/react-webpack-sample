import React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem.react';
const ReactPropTypes = React.PropTypes;

class MainSection extends React.Component {
  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }

  render() {
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  allTodos: ReactPropTypes.object.isRequired,
  areAllComplete: ReactPropTypes.bool.isRequired
}

export default MainSection;
