import React from "react";


import { IBot } from "interfaces";
import BotAvatar from "./avatar";

export const BotCard: React.FC = () => {
    const bot = {id: 'string',
  creatorId: 'string',
  name: 'string',
  avatar: 'string',
  sourceCode: 'string',
  ranking: 1
  } as IBot
    return (
       <div>
<BotAvatar bot={bot} isNameAtLeft={true} />
<p>Ranking : {bot.ranking}</p>
       </div>
    );
};
