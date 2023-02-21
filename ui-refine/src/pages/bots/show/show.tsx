import { useShow } from '@pankod/refine-core'
import { IBot } from '../../../interfaces'

export const BotShow: React.FC = () => {
  const { queryResult } = useShow<IBot>()

  const { data, isLoading, isError } = queryResult
  const bot = data?.data

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong!</div>
  }

  return (
    <div>
      <h3>bot Details</h3>
      <p>id: {bot?.id}</p>
      <p>name: {bot?.name}</p>
      <p>material: {bot?.avatar}</p>
    </div>
  )
}
