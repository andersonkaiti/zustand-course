import { Button } from '@components/ui/button'
import { useStore } from '@store/index'

export function Counter() {
  console.log('Counter rendered')

  const counter = useStore((state) => state.counter)
  const increment = useStore((state) => state.increment)

  return (
    <div className="grid place-items-center space-y-4">
      <h1>Counter: {counter}</h1>

      <Button onClick={increment}>Incrementar</Button>
    </div>
  )
}
