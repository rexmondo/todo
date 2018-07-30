const types = require('./todoTypes')

const addTodo = text => ({
  type: types.ADD_TODO,
  payload: {
    text
  }
})

const finishTodo = index => ({
  type: types.FINISH_TODO,
  payload: {
    index
  }
})

const removeTodo = index => ({
  type: types.REMOVE_TODO,
  payload: {
    index
  }
})

module.exports = {
  addTodo,
  finishTodo,
  removeTodo
}