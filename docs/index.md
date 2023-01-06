# vue_component_text

<!-- markdownlint-disable MD033 -->
<script setup>
import { TextBlock } from "../src/components";
import "../src/style.scss";
</script>

`vue_component_text` is a component to display texts with line numbering for Vue 2 and Vue 3.

## Example

<TextBlock
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
/>

## Reference

### Properties

| Property | Type                                  | Default      | Description                                                                                                      |
| -------- | ------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| lines    | { number: number; content: string }[] | / (required) | An array with objects containing the number of the line (key `number`) and the text of the line (key `content`). |
