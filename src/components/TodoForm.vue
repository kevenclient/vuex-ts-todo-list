<template>
  <div class="card rounded-0 shadow mx-auto">
    <div class="card-body">
      <form @submit.prevent="handleOnSubmit">
        <div class="form-floating">
          <input type="text" class="form-control border-0 shadow-none"
            id="todo" placeholder="What needs to be done?" v-model="description">
          <label for="todo">What needs to be done?</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from './../store';
import { ADD_TODO } from './../store/actions';
import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';
import { v4 as uuid } from 'uuid';

export default defineComponent({
  name: 'TodoForm',
  data: () => ({
    description: '',
  }),
  methods: {
    handleOnSubmit(): void {
      if (this.description === '') {
        return;
      }
      const todo: TodoItemInterface = {
        id: uuid(), description: this.description, status: Status.OPEN,
      };
      store.dispatch(ADD_TODO, todo);
      this.description = '';
    },
  },
});
</script>
