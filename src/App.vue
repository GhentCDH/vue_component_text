<template>
  <Paragraph
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
  />
  <Paragraph
    paragraph-style="in-line"
    :lines="[
      { number: 1, content: 'Line 1' },
      { number: 2, content: 'Line 2' },
    ]"
  />
</template>

<script setup lang="ts">
import { Paragraph } from "./components";
</script>
