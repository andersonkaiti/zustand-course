import { Button } from '@components/ui/button'
import { useStore } from '@store/index'
import { useShallow } from 'zustand/react/shallow'

export function Counter() {
  console.log('Counter rendered')

  const { counter, increment } = useStore(
    useShallow((state) => ({
      counter: state.counter.value,
      increment: state.counter.increment,
    })),
  )

  return (
    <div className="grid place-items-center space-y-4">
      <h1>Counter: {counter}</h1>

      <Button onClick={increment}>Incrementar</Button>
    </div>
  )
}
