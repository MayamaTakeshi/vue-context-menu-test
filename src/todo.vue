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
  <li @contextmenu.prevent="$refs.ctxMenu.open"
      :class="{ done: todo.done }"
      @click="todo.done = !todo.done">
      {{ todo.content }}
  </li>

  <context-menu id="context-menu" v-ref:ctx-menu>
    <li @click="clicked1()">option 1</li>
    <li @click="clicked2()">option 2</li>
  </context-menu>
</template>

<script>
  import { default as contextMenu } from 'vue-context-menu'

  export default {
    data () {
      return {
      }
    },

    props: ['todo'],

    components: { contextMenu },

    methods: {
      clicked1: function(e) {
        console.log('clicked1');
      },
      clicked2: function(e) {
        console.log('clicked2');
      },
    },
  }
</script>

