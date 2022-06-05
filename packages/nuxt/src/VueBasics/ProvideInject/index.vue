<template>
  <div>
    <CounterDisplay />
    <CounterIncrementButton />
    <CounterDecrementButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import CounterDecrementButton from './components/CounterDecrementButton.vue'
import CounterDisplay from './components/CounterDisplay.vue'
import CounterIncrementButton from './components/CounterIncrementButton.vue'
import { CounterKey, useCounter } from './function/use-counter'

export default defineComponent({
  components: {
    CounterDisplay,
    CounterIncrementButton,
    CounterDecrementButton,
  },
  setup() {
    //
    provide(CounterKey, useCounter())
    // return {}
  },
})
</script>
