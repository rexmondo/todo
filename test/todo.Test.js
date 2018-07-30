const assert = require('assert')
const { createStore } = require('redux')
const {
  reducer: todoReducer,
  actions: todoActions
} = require('../src')

describe('todo list', function() {
  beforeEach(function () {
    this.store = createStore(todoReducer)
  })
  it('initializes the state properly', function() {
    const initialState = this.store.getState()
    assert.deepEqual(initialState, { todo: [], done: [] })
  })
  it('doesn\'t do anything for garbage actions', function() {
    const garbageAction = {
      type: 'GARBAGE',
      payload: {
        garbage: true
      }
    }

    const currentState = this.store.getState()
    this.store.dispatch(garbageAction)
    assert(this.store.getState(), currentState)
  })
  it('adds todos', function() {
    const todo = 'eat lunch'
    const todoAction = todoActions.addTodo(todo)
    this.store.dispatch(todoAction)
    assert.deepEqual(this.store.getState().todo, [todo])
  })
  it('marks todos done', function() {
    const todo = 'eat lunch'
    const todoAction = todoActions.addTodo(todo)
    this.store.dispatch(todoAction)
    const index = this.store.getState().todo.findIndex(item => item === todo)
    assert.equal(index, 0)
    const finishAction = todoActions.finishTodo(index)
    this.store.dispatch(finishAction)

    assert.deepEqual(this.store.getState().todo, [])
    assert.deepEqual(this.store.getState().done, [todo])
  })
  it('deletes todos', function() {
    const todo = 'eat lunch'
    const todoAction = todoActions.addTodo(todo)
    this.store.dispatch(todoAction)
    const index = this.store.getState().todo.findIndex(item => item === todo)
    const finishAction = todoActions.finishTodo(index)
    this.store.dispatch(finishAction)
    const doneIndex = this.store.getState().done.findIndex(item => item === todo)

    const removeAction = todoActions.removeTodo(doneIndex)
    this.store.dispatch(removeAction)
    assert.deepEqual(this.store.getState().todo, [])
    assert.deepEqual(this.store.getState().done, [])
  })
})