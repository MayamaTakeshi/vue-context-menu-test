<style>
  body {
      font-family: Helvetica Neue, Arial, sans-serif;
  }
  li.done {
      text-decoration: line-through;
  }
  [v-cloak] {
      display: none;
  }
</style>

<template>
  <div>
      <p v-if="!todos.length">No todos at this moment.</p>
      <ul>
          <todo :todo="todo" v-for="todo in todos"></todo>
      </ul>
  </div>
</template>

<script>
  var ToDo = require('./todo.vue');

  export default {
    data () {
      return {
        todos: [
          {
            done: false,
            content: "buy groceries",
          }
        ]
      }
    },

    components: {
      'todo': ToDo
    },
  }

</script>

