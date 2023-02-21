import { Action } from '../enums/action.enum'

export interface Round {
  number: number
  challenger: {
    // Action took by the challenger.
    action: Action
    // Current ammo of the challenger (after the action).
    ammo: number
    // Is the challenger killed in this round ?.
    isKilled: boolean
  }
  defender: {
    action: Action
    ammo: number
    isKilled: boolean
  }
}
