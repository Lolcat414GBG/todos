<template>
  <div class="addTodo">
    <form action="" @submit.prevent="save">
      <input placeholder="Add Todo" type="text" v-model="todo" required>
      <button type="submit">Save Todo</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    save: function(){
      this.$store.dispatch('addTodo', this.todo);
      this.todo = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    padding: 0.5rem;
}
button {
    border: none;
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    margin-left: 1rem;
}
</style>
