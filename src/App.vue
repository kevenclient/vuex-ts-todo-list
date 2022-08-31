<template>
  <div class="container">
    <header class="display-1 text-center py-4">
      To-Do List
    </header>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
});
</script>
