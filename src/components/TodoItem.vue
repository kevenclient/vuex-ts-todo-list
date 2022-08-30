<template>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox"/>
    <label class="form-check-label">TP-Link N300 TL-WR841N router</label>
  </li>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox"/>
    <label class="form-check-label">SteelSeries TUSQ in-ear mobile gaming headset</label>
  </li>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox" checked/>
    <label class="form-check-label text-decoration-line-through">Keychron K10 hot-swappable (Full size mechanical keyboard)</label>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoItem',
});
</script>

<style scoped>

</style>
