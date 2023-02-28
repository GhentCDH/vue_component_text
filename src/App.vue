<template>
  <Paragraph
    id="1"
    header-component-type="h4"
    :number="1"
    :lines="[
      { id: '1', content: 'Line 1' },
      { id: '2', content: 'Line 2' },
    ]"
  />
  <Paragraph
    id="2"
    :number="2"
    paragraph-style="in-line"
    :lines="[
      { id: '1', content: 'Line 1' },
      { id: '2', content: 'Line 2' },
    ]"
  />
</template>

<script setup lang="ts">
import { Paragraph } from "./components";
</script>
