import { useShow } from '@pankod/refine-core'
import { IBot, IDual } from '../../../interfaces'

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
      <ul>
        {bot?.dualsAsChallenger?.map((dual: IDual) => (
          <li>
            VS Rank N°{dual?.defender?.ranking} {dual?.defender?.name} -{' '}
            <strong>{dual.challengerWin ? 'WIN' : 'LOST'}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
