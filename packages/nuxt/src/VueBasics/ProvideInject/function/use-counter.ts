import { InjectionKey, reactive } from '@nuxtjs/composition-api'
type Prpos = {
  state: { count: number }
  increment: () => number
  decrement: () => number
}

export const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore')

export function useCounter(): Prpos {
  // 状態
  const state = reactive<{
    count: number
  }>({
    count: 0,
  })

  // ロジック
  const increment = () => state.count++
  const decrement = () => state.count--

  return {
    state,
    increment,
    decrement,
  }
}

// 追加
export type CounterStore = ReturnType<typeof useCounter>
