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
import { CREATE_TODO } from './../store/actions';
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

      store.dispatch(CREATE_TODO, {
        id: uuid(), description: this.description, status: Status.OPEN,
      } as TodoItemInterface);

      this.description = '';
    },
  },
});
</script>
