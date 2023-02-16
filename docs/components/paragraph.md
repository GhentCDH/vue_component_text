# Paragraph

<!-- markdownlint-disable MD033 -->
<script setup>
import { VueLive } from "vue-live";
import { Paragraph } from "../../src/components";
import "../style.scss";

const newLineExample = `<Paragraph
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
/>`
const inLineExample = `<Paragraph
    paragraph-style="in-line"
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
/>`
</script>

`Paragraph` is a component to display a contigous piece of text with line numbering.

## Examples

### With newlines

<VueLive
  :code="newLineExample"
  :components="{ Paragraph }"
/>

### Inline

<VueLive
  :code="inLineExample"
  :components="{ Paragraph }"
/>

## Reference

### Properties

| Property        | Type                                  | Default      | Description                                                                                                      |
| --------------- | ------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| paragraph-style | "in-line" \| "new-line"               | "new-line"   | How to display the lines of text: one after another (`in-line`) or each line on a new line (`new-line`)          |
| lines           | { number: number; content: string }[] | / (required) | An array with objects containing the number of the line (key `number`) and the text of the line (key `content`). |
