<template>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox"/>
    <label class="form-check-label">{{ item.description }}</label>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TodoItemInterface from './../types/TodoItemInterface';

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<TodoItemInterface>,
  },
});
</script>
