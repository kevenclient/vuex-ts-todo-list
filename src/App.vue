<template>
  <div class="container">
    <header class="display-1 text-center py-4">
      To-Do List
    </header>
    <TodoForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoForm from './components/TodoForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoForm,
  },
});
</script>

<style scoped>

</style>
