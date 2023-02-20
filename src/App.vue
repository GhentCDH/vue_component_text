<template>
  <Paragraph
    :lines="[
      { id: '1', content: 'Line 1' },
      { id: '2', content: 'Line 2' },
    ]"
  />
  <Paragraph
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
