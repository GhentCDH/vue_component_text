<template>
  <div class="text-block">
    <div
      v-for="{ number, content } in lines"
      :key="number"
      class="line-wrapper"
    >
      <div class="line-number">{{ number }}</div>
      <div class="line-content">{{ content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lines: { number: number; content: string }[];
}>();
</script>
