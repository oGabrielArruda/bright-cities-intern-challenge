<template>
  <div id="app">
    <div id="container">
    <TodoList msg="Welcome to Your Vue.js App"/>
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container {
  margin: 0 auto;
  text-align: center;
  width: 500px;
}
</style>
