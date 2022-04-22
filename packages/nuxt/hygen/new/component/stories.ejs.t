---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.stories.ts
---
import C from './index.vue'

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<C v-bind="$props" ></C>',
  components: { C },
})

export const <%= component_name %> = Template.bind({})