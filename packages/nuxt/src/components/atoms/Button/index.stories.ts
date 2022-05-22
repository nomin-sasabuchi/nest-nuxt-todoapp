import C from './index.vue'

export default {
  component: C,
}

const Template = () => ({
  template: '<C v-bind="$props" >田中たろう</C>',
  components: { C },
})

export const Button = Template.bind({})
