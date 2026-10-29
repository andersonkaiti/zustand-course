import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { useStore } from '@store/index'
import { useForm } from 'react-hook-form'
import { useShallow } from 'zustand/react/shallow'

export function UserProfile() {
  console.log('UserProfile rendered')

  const { user, setUsername } = useStore(
    useShallow((state) => ({
      user: state.user.data,
      setUsername: state.user.setUsername,
    })),
  )

  const form = useForm({
    defaultValues: user,
  })

  const handleSubmit = form.handleSubmit(({ username }) => {
    setUsername(username)
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="size-30">
          <AvatarImage
            src={`https://github.com/${user.username}.png`}
            alt={`@${user.username}`}
          />
          <AvatarFallback>
            {user.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h1>@{user.username}</h1>
      </div>

      <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
        <Input {...form.register('username')} />
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  )
}
