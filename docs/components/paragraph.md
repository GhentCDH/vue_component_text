# Paragraph

<!-- markdownlint-disable MD033 -->
<script setup>
import { VueLive } from "vue-live";
import { Paragraph } from "../../src/VueComponentText";
import "../vue-live.scss";

const headerExample = `<Paragraph
  id="1"
  header="Header"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
const numberExample = `<Paragraph
  id="1"
  :number="1"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
const noHeaderExample = `<Paragraph
  id="1"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
const headerComponentTypeExample = `<Paragraph
  id="1"
  header-component-type="h4"
  header="Header"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
const newLineExample = `<Paragraph
  id="1"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
const inLineExample = `<Paragraph
  id="1"
  paragraph-style="in-line"
  :lines="[
    { id: '1', content: 'Line 1' },
    { id: '2', content: 'Line 2' },
  ]"
/>`
</script>

`Paragraph` is a component to display a contigous piece of text with line numbering, with or without a header.

## Header

Use the `header` prop to add a header to the paragraph.

<VueLive
  :code="headerExample"
  :components="{ Paragraph }"
/>

Alternatively, the `number` prop can be used to add a numbered header (e.g., Paragraph 1) the paragraph. The `header` prop takes precendence over the `number` prop.

<VueLive
  :code="numberExample"
  :components="{ Paragraph }"
/>

When no `header` and `number` prop are defined, no header is generated.
<VueLive
  :code="noHeaderExample"
  :components="{ Paragraph }"
/>

The element type used for the header (`<h3>` by default) can be used by setting the `header-component-type` prop.
<VueLive
  :code="headerComponentTypeExample"
  :components="{ Paragraph }"
/>

## Paragraph Style

By default, each line of text in a paragraph is placed on a new line.

<VueLive
  :code="newLineExample"
  :components="{ Paragraph }"
/>

By setting the `paragraph-style` prop to `in-line`, lines can be displayed one after another.

<VueLive
  :code="inLineExample"
  :components="{ Paragraph }"
/>

## Reference

### Properties

| Property              | Type                                 | Default      | Description                                                                                              |
| --------------------- | ------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------- |
| header-component-type | "h2" \| "h3" \| "h4" \| "h5" \| "h6" | "h3"         | HTML element used to display the header                                                                  |
| header                | string                               | /            | Text to use as header                                                                                    |
| number                | number                               | /            | Number to use in numbered headers (e.g., Paragraph 1)                                                    |
| paragraph-style       | "in-line" \| "new-line"              | "new-line"   | How to display the lines of text: one after another (`in-line`) or each line on a new line (`new-line`)  |
| lines                 | { id: string; content: string }[]    | / (required) | An array with objects containing the id of the line (key `id`) and the text of the line (key `content`). |
