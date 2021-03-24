<template>
  <section class="todos">
      <ul>
          <li v-for="(todo, index) in todos" v-bind:key="index" v-on:click="removeTodo(todo.id)">{{ todo.task }}</li>
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
            console.log('ta bort', task)
            this.$store.dispatch('removeTodo', task);
        }
    }
}
</script>

<style>

</style>