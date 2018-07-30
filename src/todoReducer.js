const Immutable = require('seamless-immutable')
const types = require('./todoTypes')

const initialState = Immutable.from({
  todo: [],
  done: []
})

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO: {
      const { text } = action.payload
      return state.set('todo', state.todo.concat(text))
    }
    case types.FINISH_TODO: {
      const { index } = action.payload
      const item = state.todo[index]
      return state
        .set('todo', state.todo.filter((_, i) => index !== i))
        .set('done', state.done.concat(item))
    }
    case types.REMOVE_TODO: {
      const { index } = action.payload
      return state
        .set('done', state.todo.filter((_, i) => index !== i))
    }
    default:
      return state
  }
}

module.exports = todoReducer