<template>
  <ul class="list-group shadow mb-3 mb-md-5">
    <TodoItem v-for="(item, index) in todos"
      :key="index" :item="item"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import TodoItemInterface from './../types/TodoItemInterface';
import store from './../store';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    todos: (): Array<TodoItemInterface> => store.state.todos,
  },
});
</script>
