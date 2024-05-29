import { CounterStore } from './store/counter'
import './App.css'

function App() {
  const values = CounterStore((state) => ({
    count: state.count,
    title: state.title,
  }))

  const { increment, Decrement, Reset } = CounterStore()

  return (
    <section className="count">
      <h1>{values.title}</h1>
      <h1>{values.count}</h1>
      <div className="botones">
        <button onClick={() => increment()}>Sumar</button>
        <button onClick={() => Decrement()}>Restar</button>
        <button onClick={() => Reset()}>Reset</button>
      </div>
    </section>
  )
}

export default App
