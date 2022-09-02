<template>
  <ul class="list-group shadow mb-3 mb-md-5">
    <TodoItem v-for="item in todos"
      :key="item.description" :item="item"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import { useStore } from 'vuex';
import { key } from './../store';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  setup() {
    const { state } = useStore(key);
    return {
      ...state,
    };
  },
});
</script>
