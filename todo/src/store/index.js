import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const url = 'https://awesome-todo-api.herokuapp.com/tasks';

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
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      ctx.commit('addTodos', data.todos);
    },
    async addTodo(ctx, todo) {
      const obj = { task: todo }
      const response = await fetch(url, 
      { method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'}
      });
      const data = await response.json();
      ctx.commit('addTodos', data.todo);
    },
    async removeTodo(ctx, id) {
      const response = await fetch(url + '/' + id, { method: 'DELETE' });
      const data = await response.json();
      if(data.success) {
        ctx.dispatch('getTodos', data);
      }
    }
  }
});