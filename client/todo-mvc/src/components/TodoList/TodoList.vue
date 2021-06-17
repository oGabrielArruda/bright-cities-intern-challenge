<template>
  <div id="body">
    <section class="todoapp" v-cloak>
        <h1>todos</h1>
      <header class="header">
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todos.length">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="allDone"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in filteredTodos"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed"/>
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong v-text="remaining"></strong>
          {{ pluralize("item", remaining) }} left
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" @click="visibility = 'all' " :class="{ selected: visibility == 'all' }">All</a>
          </li>
          <li>
            <a href="#/active" @click="visibility = 'active' " :class="{ selected: visibility == 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              @click="visibility = 'completed' "
              :class="{ selected: visibility == 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="http://evanyou.me">Evan You</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
const todoStorage = require('./store');
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  // app initial state
  data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: "",
      editedTodo: null,
      visibility: "all",
      filters: {
        all: function (todos) {
          return todos;
        },
        active: function (todos) {
          return todos.filter(function (todo) {
            return !todo.completed;
          });
        },
        completed: function (todos) {
          return todos.filter(function (todo) {
            return todo.completed;
          });
        },
      },
    };
  },

  // watch todos change for localStorage persistence
  watch: {
    todos: {
      deep: true,
      handler: todoStorage.save,
    },
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return this.filters[this.visibility](this.todos);
    },
    remaining: function () {
      return this.filters.active(this.todos).length;
    },
    allDone: {
      get: function () {
        return this.remaining === 0;
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value;
        });
      },
    },
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    pluralize: function (word, count) {
      return word + (count === 1 ? "" : "s");
    },

    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: this.todos.length + 1,
        title: value,
        completed: false,
      });
      this.newTodo = "";
    },

    removeTodo: function (todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted: function () {
      this.todos = this.filters.active(this.todos);
    },
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" src="./styles.css" scoped />
