export interface IBot {
  id: number
  creatorId: string
  name: string
  avatar: string
  sourceCode: string
  ranking?: number
  campaign?: ICampaign

  dualsAsChallenger?: IDual[]
}

export interface IDual {
  id: number
  rounds: IRound[]
  challenger?: IBot
  defender?: IBot
  challengerWin: boolean
  winner: IBot
  campaign: ICampaign
}

export interface IRound {
  number: number
  challenger: {
    action: any // TODO: Shared types
    ammo: number
    isKilled: boolean
  }
  defender: {
    action: any // TODO: Shared types
    ammo: number
    isKilled: boolean
  }
}
