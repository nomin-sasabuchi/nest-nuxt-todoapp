---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.vue
---

<template>
  <div></div>
</template>
 
<script lang="ts">
import Vue from 'vue'
<% if(hasCompositions){ -%>
import { useComposition } from "./compositions/";
<% } -%>

export default Vue.extend({
  name: '<%= component_name %>',
  components: {
    //
  },
  <% if(hasProps){ -%>
  props: {
    //
  },
  <% } -%>
  setup() {
    return {};
  },
})
</script>
