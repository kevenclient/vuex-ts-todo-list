<template>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox" :checked="closed"/>
    <label class="form-check-label" :class="statusClass">
      {{ item?.description }}
    </label>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<TodoItemInterface>,
  },
  computed: {
    closed() {
      return this.item?.status === Status.CLOSED;
    },
    statusClass() {
      return {
        'text-decoration-line-through': this.closed,
      };
    },
  },
});
</script>
