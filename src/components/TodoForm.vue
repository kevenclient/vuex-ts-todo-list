<template>
  <div class="card rounded-0 shadow mx-auto">
    <div class="card-body">
      <div class="form-floating">
        <input type="text" class="form-control border-0 shadow-none"
          id="todo" placeholder="What needs to be done?">
        <label for="todo">What needs to be done?</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoForm',
});
</script>
