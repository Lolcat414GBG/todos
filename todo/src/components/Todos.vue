<template>
  <section class="todos">
      <ul>
          <li v-for="(todo, index) in todos" v-bind:key="index" 
          >{{ todo.task }} <span v-on:click="removeTodo(todo.id)"> &#xd7;</span></li>
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
span {
    font-size: 2em;
    margin-left: 0.5rem;
    cursor: pointer;
}
</style>