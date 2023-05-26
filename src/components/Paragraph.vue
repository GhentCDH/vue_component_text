<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="paragraph-wrapper">
    <component
      :is="headerComponentType"
      v-if="header != null || number != null"
      class="paragraph-header"
    >
      {{ header ?? `Paragraph ${number}` }}
    </component>
    <div :class="`${paragraphStyle}-paragraph`">
      <component
        :is="lineWrapperComponentType"
        v-for="{ id: lineId, content } in lines"
        :key="lineId"
        class="line-wrapper"
      >
        <component :is="lineNumberComponentType" class="line-number">{{
          lineId
        }}</component>
        <component :is="lineContentComponentType" class="line-content">{{
          content
        }}</component>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { ParagraphProps } from "@/types";

const props = withDefaults(defineProps<ParagraphProps>(), {
  headerComponentType: "h3",
  header: undefined,
  number: undefined,
  paragraphStyle: "new-line",
});
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
