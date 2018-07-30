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
    default:
      return state
  }
}

module.exports = todoReducer