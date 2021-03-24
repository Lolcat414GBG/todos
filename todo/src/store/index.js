import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    async getTodos(ctx) {
      const url = 'https://awesome-todo-api.herokuapp.com/tasks';
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      ctx.commit('addTodos', data.todos);
      console.log('Todos: ', data.todos);
    },
    async addTodo(ctx, todo) {
      console.log('async: ', ctx + ' ' + todo);
      const obj = { task: todo }
      const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks', 
      { method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'}
      });
      const data = await response.json();
      console.log('addTodo: ', data);
    },
    async removeTodo(text, test) {
      console.log('removeTodo: ', text, test);
      const url = 'https://awesome-todo-api.herokuapp.com/tasks/' + test;
      const response = await fetch(url, { method: 'DELETE' });
      const data = await response.json();
      console.log('ny data i removeTodo', data);
      //getTodos();
    }
  },
  modules: {
  }
});