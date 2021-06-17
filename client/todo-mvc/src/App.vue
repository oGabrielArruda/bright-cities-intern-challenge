<template>
  <div id="app">
    <TodoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>

</style>
