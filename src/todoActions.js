const types = require('./todoTypes')

const addTodo = text => ({
  type: types.ADD_TODO,
  payload: {
    text
  }
})

module.exports = {
  addTodo
}