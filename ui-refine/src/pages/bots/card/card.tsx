import React from 'react'

import { IBot } from 'interfaces'
import BotAvatar from '../avatar'
import './card.scss'

export const BotCard: React.FC<any> = ({ bot }: { bot: IBot }) => {

  return (
  <div className="card has-background-dark has-text-light">
    <a className="no-deco is-flex is-align-items-center is-justify-content-space-between px-4">
      <div className="is-flex is-align-items-center is-justify-content-center">
        <span className="is-size-3 mr-3 has-text-weight-bold">
          {bot.ranking}
        </span>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <BotAvatar bot={bot} isNameAtLeft={true} />
        </div>
      </div>
      <div
        className="is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-5"
      >
        <span className="mr-3 has-text-weight-bold">Since november 12th, 2022</span>
      </div>
    </a>
  </div>
  
  )
}
