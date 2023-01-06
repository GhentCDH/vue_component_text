# vue_component_text

<!-- markdownlint-disable MD033 -->
<script setup>
import { VueLive } from "vue-live";
import ".vitepress/theme";
import { TextBlock } from "../src/components";
import "../src/style.scss";

const example1 = `<TextBlock
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
/>`
</script>

`vue_component_text` is a component to display texts with line numbering for Vue 2 and Vue 3.

## Example

<VueLive
  :code="example1"
  :components="{ TextBlock }"
/>

## Reference

### Properties

| Property | Type                                  | Default      | Description                                                                                                      |
| -------- | ------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| lines    | { number: number; content: string }[] | / (required) | An array with objects containing the number of the line (key `number`) and the text of the line (key `content`). |
