import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import TodoConstants from '../constants/TodoConstants';
import assign from 'object-assign';
const CHANGE_EVENT = 'change';
const _todos = {};

const create = text => {
  let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

const update = (id, updates) => _todos[id] = assign({}, _todos[id], updates);
const updateAll = updates => {
  for (var id in _todos) {
    update(id, updates);
  }
}
const destroy = id => delete _todos[id];
const destroyCompleted = () => {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

const TodoStore = assign({}, EventEmitter.prototype, {

  areAllComplete: () => {
    for (let id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },
  getAll: () => _todos,
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: callback => this.removeListener(CHANGE_EVENT, callback)
});

AppDispatcher.register(action => {
  let text;

  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (TodoStore.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_COMPLETE:
      update(action.id, {complete: true});
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      TodoStore.emitChange();
      break;

    default:
  }
});

export default TodoStore;
