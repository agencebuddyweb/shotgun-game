import { IDual, IRound } from '../../interfaces'

export const DualShow: React.FC<any> = ({ dual }: { dual: IDual }) => {
  return (
    <ul>
      {dual.rounds.map((round: IRound) => (
        <li>
          {round.challenger.isKilled ? 'KILLED' : ''} You:{' '}
          {round.challenger.action} - {round.defender.action} :Opponent{' '}
          {round.defender.isKilled ? 'KILLED' : ''}
        </li>
      ))}
    </ul>
  )
}
