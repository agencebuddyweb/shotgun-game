export interface IBot {
  id: string;
  creatorId: string;
  name: string;
  avatar: string;
  sourceCode: string;
  ranking?: number;
  campaign?: ICampaign;
}

export interface ICampaign {
  date: string;
  bot: IBot;
  duals: IDual[];
}

export interface IDual {
  bot1: IBot;
  bot2: IBot;
  winner: IBot;
  campaign: ICampaign;
}
