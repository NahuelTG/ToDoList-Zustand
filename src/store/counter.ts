import { create } from 'zustand'

interface CounterState {
  count: number
  title: string
  increment: () => void
  Decrement: () => void
  Reset: () => void
}

export const CounterStore = create<CounterState>((set) => ({
  count: 0,
  title: 'Contador',
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  Decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  Reset: () =>
    set(() => ({
      count: 0,
    })),
}))
