<template>
  <section class="todos">
      <ul>
          <li v-for="(todo, index) in todos" v-bind:key="index" 
          v-on:click="removeTodo(todo.id)">{{ todo.task }}</li>
      </ul>
  </section>
</template>

<script>
export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
        removeTodo: function(task) {
            this.$store.dispatch('removeTodo', task);
        }
    }
}
</script>

<style>
li {
    list-style-type: none;
}
</style>