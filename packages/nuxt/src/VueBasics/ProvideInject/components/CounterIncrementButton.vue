<template>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterKey, CounterStore } from '../function/use-counter'

export default defineComponent({
  setup() {
    const { increment } = inject(CounterKey) as CounterStore
    return {
      increment,
    }
  },
})
</script>
