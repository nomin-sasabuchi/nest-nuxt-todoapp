<template>
  <div>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(props, context) {
    const handleClick = () => {
      context.emit('my-event')
    }

    return { handleClick }
  },
})
</script>
