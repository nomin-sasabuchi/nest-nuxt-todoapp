import C from './index.vue'

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<C v-bind="$props" >田中たろう</C>',
  components: { C },
})

export const Button = Template.bind({})

