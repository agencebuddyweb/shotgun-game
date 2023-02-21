import React from 'react'

import { IBot } from 'interfaces'
import BotAvatar from '../avatar'
import './card.scss'

export const BotCard: React.FC = () => {
  const bot = {
    // TODO: remove this mock data
    // id: 'string',
    // creatorId: 'string',
    // name: 'string',
    // avatar: 'string',
    // sourceCode: 'string',
    // ranking: 1
  } as IBot
  return (
    <div>
      <BotAvatar bot={bot} isNameAtLeft={true} />
      <p>Ranking : {bot.ranking}</p>
    </div>
  )
}
