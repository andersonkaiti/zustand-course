import { Button } from '@components/ui/button'
import { useStore } from '@store/index'

export function App() {
  const store = useStore()

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8">
      <h1>Counter: {store.counter}</h1>

      <Button onClick={store.increment}>Incrementar</Button>
    </div>
  )
}
