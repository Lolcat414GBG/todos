<template>
  <div class="addTodo">
    <form action="" @submit.prevent="save">
      <label for="todo">Add Todo</label>
      <input type="text" id="todo" v-model="todo" required>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
