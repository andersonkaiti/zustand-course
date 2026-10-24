import { Counter } from '@components/counter'
import { UserProfile } from './components/user-profile'

export function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-16 p-5">
      <Counter />

      <UserProfile />
    </div>
  )
}
