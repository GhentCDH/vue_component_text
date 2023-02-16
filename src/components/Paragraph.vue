<template>
  <div :class="`${paragraphStyle}-paragraph`">
    <component
      :is="lineWrapperComponentType"
      v-for="{ number, content } in lines"
      :key="number"
      class="line-wrapper"
    >
      <component :is="lineNumberComponentType" class="line-number">{{
        number
      }}</component>
      <component :is="lineContentComponentType" class="line-content">{{
        content
      }}</component>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    paragraphStyle?: "in-line" | "new-line";
    lines: { number: number; content: string }[];
  }>(),
  {
    paragraphStyle: "new-line",
  }
);
const lineWrapperComponentType = computed(() => {
  return props.paragraphStyle === "new-line" ? "div" : "span";
});
const lineNumberComponentType = computed(() => {
  return props.paragraphStyle === "new-line" ? "div" : "span";
});
const lineContentComponentType = computed(() => {
  return props.paragraphStyle === "new-line" ? "div" : "span";
});
</script>
