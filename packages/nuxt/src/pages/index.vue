<template>
  <OTop />
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/atoms/Button/index.vue'
import { OTop } from '@/components/templates/Top/index.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    Button,
    OTop,
  },
})
</script>
