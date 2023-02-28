<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text">
    <Paragraph
      v-for="(p, index) in paragraphs"
      :id="p.id"
      :key="p.id"
      :header-component-type="p.headerComponentType ?? headerComponentType"
      :header="p.header"
      :number="paragraphNumber(index, p.header, p.number)"
      :paragraph-style="p.paragraphStyle ?? paragraphStyle"
      :lines="p.lines"
    />
  </div>
</template>
<script setup lang="ts">
import { Paragraph } from "../components";
import type {
  ParagraphHeaderComponentType,
  ParagraphStyle,
  ParagraphProps,
} from "../types";

// TODO: interface reuse
// https://github.com/vuejs/core/issues/4294
const props = withDefaults(
  defineProps<{
    displayHeaders?: boolean;
    headerComponentType?: ParagraphHeaderComponentType;
    paragraphStyle?: ParagraphStyle;
    paragraphs: ParagraphProps[];
  }>(),
  {
    displayHeaders: true,
    headerComponentType: "h3",
    paragraphStyle: "new-line",
  }
);
const paragraphNumber = function (
  index: number,
  header?: string,
  number?: number
): number | undefined {
  if (header != null || number != null) {
    // if paragraph header is set, it doesn't matter
    // if paragraph number is set, use it
    // => return number
    return number;
  }
  if (props.displayHeaders) {
    // if paragraph header and number are not set, but displayHeaders is true
    // => return number based on index in paragraph array
    return index + 1;
  }
  return undefined;
};
</script>
