<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddTodo msg="Welcome to Your Vue.js App"/>
    <h1>Todos</h1>
    <p>Click on a Todo to remove it.</p>
    <Todos />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    Todos
  },
  created() {
    this.$store.dispatch('getTodos');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
