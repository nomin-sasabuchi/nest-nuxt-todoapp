---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/compositions/index.ts
---
import { SetupContext<% if(hasProps){ -%>, computed, ComputedRef<% } -%> } from "vue-demi";

<% if(hasProps){ -%>
type Props = {
  prop: string;
};

<% } -%>
type Clicked = (message: string) => void;

type DispatchMessage = (emit: SetupContext["emit"]) => Clicked;

type UseComposition = (
  <% if(hasProps){ -%>
  props: Props,
  <% } -%>
  emit: SetupContext["emit"]
) => {
  <% if(hasProps){ -%>
  text: ComputedRef<string>;
  <% } -%>
  clicked: Clicked;
};

<% if(hasProps){ -%>
export const someFunction = (text: string)=> ()=> `${text} !!`

<% } -%>
export const dispatchMessage: DispatchMessage = (emit) => (message) => emit("clicked", message);

export const useComposition: UseComposition = (<% if(hasProps){ -%>props, <% } -%>emit) => {
  return { 
    <% if(hasProps){ -%>
    text: computed(someFunction(props.prop)), 
    <% } -%>
    clicked : dispatchMessage(emit)
  };
};
