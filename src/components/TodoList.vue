<template>
  <ul class="list-group shadow mb-4 mb-md-5">
    <TodoItem/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
});
</script>

<style scoped>

</style>
