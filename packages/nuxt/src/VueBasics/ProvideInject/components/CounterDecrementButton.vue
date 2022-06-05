<template>
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterKey, CounterStore } from '../function/use-counter'

export default defineComponent({
  setup() {
    const { decrement } = inject(CounterKey) as CounterStore
    return {
      decrement,
    }
  },
})
</script>
