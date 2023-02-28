# Text

<!-- markdownlint-disable MD033 -->
<script setup>
import { VueLive } from "vue-live";
import { Text } from "../../src/VueComponentText";
import "../vue-live.scss";

const defaultExample = `<Text
  :paragraphs="[
    {
      id: '1',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
    {
      id: '2',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
  ]"
/>`
const noHeadersExample = `<Text
  :display-headers="false"
  :paragraphs="[
    {
      id: '1',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
    {
      id: '2',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
  ]"
/>`
const headerComponentTypeExample = `<Text
  header-component-type="h4"
  :paragraphs="[
    {
      id: '1',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
    {
      id: '2',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
  ]"
/>`
const paragraphStyleExample = `<Text
  paragraph-style="in-line"
  :paragraphs="[
    {
      id: '1',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
    {
      id: '2',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
  ]"
/>`
const paragraphOverwriteExample = `<Text
  :paragraphs="[
    {
      id: '1',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
    {
      id: '2',
      headerComponentType: 'h4',
      header: 'Header',
      paragraphStyle: 'in-line',
      lines: [
        { id: '1', content: 'Line 1' },
        { id: '2', content: 'Line 2' },
      ],
    },
  ]"
/>`
</script>

`Text` is a component to display multiple paragraphs.

## Headers

By default, numbered headers are added to the paragraphs.

<VueLive
  :code="defaultExample"
  :components="{ Text }"
/>

By setting the `display-headers` prop to `false`, paragraph headers are not displayed.

<VueLive
  :code="noHeadersExample"
  :components="{ Text }"
/>

The style of all paragraph header element types can be set by using the `header-component-type` prop.

<VueLive
  :code="headerComponentTypeExample"
  :components="{ Text }"
/>

## Paragraph style

By setting the `paragraph-style` prop, the style of line display can be defined for all paragraphs (default: `new-line`).

<VueLive
  :code="paragraphStyleExample"
  :components="{ Text }"
/>

## Paragraph specific overwrites

The `header-component-style`, `header`,  `number`, `paragraph-style` props of individual paragraphs can be used to overwrite the settings defined on the text level.
<VueLive
  :code="paragraphOverwriteExample"
  :components="{ Text }"
/>

## Reference

### Properties

| Property              | Type                                                 | Default      | Description                                                                                             |
| --------------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| display-headers       | boolean                                              | true         | display headers (by default automatically generated sequential numbers)                                 |
| header-component-type | "h2" \| "h3" \| "h4" \| "h5" \| "h6"                 | "h3"         | HTML element used to display the headers                                                                |
| paragraph-style       | "in-line" \| "new-line"                              | "new-line"   | How to display the lines of text: one after another (`in-line`) or each line on a new line (`new-line`) |
| paragraphs            | [ParagraphProps](/components/paragraph#properties)[] | / (required) | An array of paragraph properties.                                                                       |
