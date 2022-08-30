<template>
  <ul class="list-group shadow mb-4 mb-md-5">
    <TodoItem v-for="item in items"
      :key="item.description" :item="item"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import TodoItemInterface from './../types/TodoItemInterface';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    const items: TodoItemInterface[] = [
      {description: 'TP-Link N300 TL-WR841N router', status: 'Incomplete'},
      {description: 'SteelSeries TUSQ in-ear mobile gaming headset', status: 'Incomplete'},
      {description: 'Keychron K10 hot-swappable (Full size mechanical keyboard)', status: 'Incomplete'},
    ];

    return {
      items,
    };
  },
});
</script>

<style scoped>

</style>
