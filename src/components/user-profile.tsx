import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { useStore } from '@store/index'
import { useForm } from 'react-hook-form'

export function UserProfile() {
  console.log('UserProfile rendered')

  const user = useStore((state) => state.user)
  const setUsername = useStore((state) => state.setUsername)

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
        <Button>Salvar</Button>
      </form>
    </div>
  )
}
