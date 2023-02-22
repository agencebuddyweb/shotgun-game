import { useList, HttpError } from '@pankod/refine-core'

import { IBot } from '../../interfaces'
import React from 'react'

import './list.scss'
import { BotCard } from './card/card'

export const BotList: React.FC = () => {
  const { data, isLoading, isError } = useList<IBot, HttpError>({
    resource: 'bots',
    config: { hasPagination: false }
  })

  const bots = data?.data.slice(0,10) ?? []
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong!</div>
  }

  return (
    <React.Fragment>
<section className="hero is-large">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-align-items-center">
        <div className="column is-6 is-offset-3 has-text-centered">
          <div
            className="buttons is-flex is-align-items-center is-justify-content-center"
          >
            <a href="#rules" className="button px-8 is-dark has-shadow mx-1"
              >Read the rules</a
            >
            <a
              href="/bots/create"
              className="button px-8 is-warning has-shadow mx-1"
              >Play</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container">
  <div className="columns is-multiline">
    <div className="column is-8 is-offset-2 pb-0 has-text-light has-text-centered">
      <h2 className="mt-4 has-text-weight-bold">Top 10 ranking</h2>
      <audio autoPlay>
        <source
          src="../../assets/sounds/magic-sweep-game-trophy.ogg"
          type="audio/ogg"
        />

        <source
          src="../../assets/sounds/magic-sweep-game-trophy.mp3"
          type="audio/mpeg"
        />

        Your browser does not support the audio element.
      </audio>
       
      {bots.map((bot) => (
        <BotCard bot={bot}/>
      ))}
    
    </div>

  
  </div>

  <div className="columns">
    <div className="column is-6 is-offset-3">
      <div className="card mt-4 has-background">
        <div className="has-background--honey"></div>
        <div className="card-content m-8">
          <div className="content has-text-light is-size-5">
            <h2 className="has-text-light has-text-weight-bold" id="rules">
              the rules of the game
            </h2>
            <h3 className="has-text-light">How our game works</h3>
            <p>Shotgun bot is the biggest shotgun tournament.</p>
            <p>
              Each time a new challenger arrives, he faces all the bots 1 by 1.
            </p>
            <p>
              A bot can't be updated. This means that you have to create a new
              robot every time you want to win the tournament.
            </p>

            <h3 className="has-text-light">How does a duel work ?</h3>
            <p>
              Shotgun bot is a duel between 2 bots designed by anonymous
              developers. The principle is to "kill" the opponent.
            </p>
            <p>
              Each robot performs an action at the same time as its opponent.
              The robots have then the choice between three actions:
            </p>
            <ul>
              <li>
                <strong>Reload:</strong> The robot recovers an ammunition.
              </li>
              <li>
                <strong>Protect:</strong> The robot cannot die if it is shot.
              </li>
              <li>
                <strong>Shoot:</strong> The robot shoots at its opponent. It is
                impossible to shoot if no ammunition is available. It kills the
                opponent if he reloads at that moment. If both robots shoot at
                the same time, neither of them dies. In any case, you must start
                by reloading, because you cannot shoot and therefore protection
                is useless.
              </li>
            </ul>
            <div
              className="is-flex is-align-items-center is-justify-content-center"
            >
              <p className="mr-3 my-0">
                Will you be able to create the best shooting robot?
              </p>
              <a href="/bots/create"className="button is-warning no-deco">Create a shooter bot</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 




    </React.Fragment>
  
  )
}
