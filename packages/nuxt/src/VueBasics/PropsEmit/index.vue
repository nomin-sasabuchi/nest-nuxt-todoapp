<template>
  <div>
    <input type="text value" />
    <Child @my-event="handleEvent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Child from './Child/index.vue'

export default defineComponent({
  components: { Child },
  setup() {
    const handleEvent = () => {
      alert('イベント発生！')
    }

    return { handleEvent }
  },
})
</script>
