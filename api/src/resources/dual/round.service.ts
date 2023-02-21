import { Injectable } from '@nestjs/common'
import { Action } from '../../shared/enums/action.enum'
import { Opponent } from '../../shared/enums/opponent.enum'
import { RoundResult } from '../../shared/enums/round-result.enum'
import { Round } from '../../shared/interfaces/round.interface'

@Injectable()
export class RoundService {
  maxRounds = 50

  executeRounds(
    challengerSourceCode: string,
    defenderSourceCode: string,
    previousRounds: Round[] = []
  ): Round[] {
    // We calculate the actions of both bots.
    const challengerAction: Action = this.calculateBotAction(
      challengerSourceCode,
      previousRounds
    )
    const defenderAction: Action = this.calculateBotAction(
      defenderSourceCode,
      previousRounds
    )

    // We calculate the result of the round.
    const roundResult: RoundResult = this.calculateRoundResult(
      challengerAction,
      defenderAction
    )

    // We create the round object.
    previousRounds.push({
      number: previousRounds.length + 1,
      challenger: {
        action: challengerAction,
        ammo: this.calculateAmmo(
          challengerAction,
          previousRounds,
          Opponent.Challenger
        ),
        isKilled: roundResult === RoundResult.ChallengerKilled
      },
      defender: {
        action: defenderAction,
        ammo: this.calculateAmmo(
          defenderAction,
          previousRounds,
          Opponent.Defender
        ),
        isKilled: roundResult === RoundResult.DefenderKilled
      }
    })

    if (roundResult === RoundResult.Draw) {
      // TODO: Challenger should loose if draw after some rounds.
      if (previousRounds.length >= this.maxRounds) {
        return previousRounds
      }

      return this.executeRounds(
        challengerSourceCode,
        defenderSourceCode,
        previousRounds
      )
    }

    return previousRounds
  }

  calculateBotAction(sourceCode: string, previousRounds: Round[]): Action {
    const sourceCodeFunction: (previousRounds: Round[]) => Action =
      new Function(sourceCode) as (previousRounds: Round[]) => Action

    // TODO: Add a try/catch to catch errors in the source code. And adapt the source code to the POV (challenger or defender).
    // TODO: Also detect if shot with no ammo or void return.

    return sourceCodeFunction(previousRounds)
  }

  calculateRoundResult(
    challengerAction: Action,
    defenderAction: Action
  ): RoundResult {
    if (
      challengerAction === Action.Shoot &&
      (defenderAction === Action.Reload || defenderAction === Action.Nothing)
    ) {
      return RoundResult.DefenderKilled
    }
    if (
      defenderAction === Action.Shoot &&
      (challengerAction === Action.Reload ||
        challengerAction === Action.Nothing)
    ) {
      return RoundResult.ChallengerKilled
    }

    return RoundResult.Draw
  }

  calculateAmmo(
    action: Action,
    previousRounds: Round[],
    pov: Opponent
  ): number {
    const initialAmmo =
      previousRounds.length === 0
        ? 0
        : previousRounds[previousRounds.length - 1][pov].ammo

    if (action === Action.Reload) {
      return initialAmmo + 1
    }
    if (action === Action.Shoot) {
      return initialAmmo - 1
    }
    return initialAmmo
  }
}
