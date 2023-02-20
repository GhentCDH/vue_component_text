<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="`${paragraphStyle}-paragraph`">
    <component
      :is="lineWrapperComponentType"
      v-for="{ id, content } in lines"
      :key="id"
      class="line-wrapper"
    >
      <component :is="lineNumberComponentType" class="line-number">{{
        id
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
    lines: { id: string; content: string }[];
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
