<template>
  <ul class="list-group shadow mb-3 mb-md-5">
    <TodoItem v-for="item in items"
      :key="item.description" :item="item"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    const items: TodoItemInterface[] = [
      {description: 'TP-Link N300 TL-WR841N router', status: Status.OPEN},
      {description: 'SteelSeries TUSQ in-ear mobile gaming headset', status: Status.OPEN},
      {description: 'Keychron K10 hot-swappable (Full size mechanical keyboard)', status: Status.CLOSED},
      {description: 'Nazgul5 v2 FPV Drone', status: Status.OPEN},
      {description: 'GoPro Hero 10', status: Status.CLOSED},
    ];

    return {
      items,
    };
  },
});
</script>
