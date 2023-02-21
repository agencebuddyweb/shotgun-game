import { IBot } from "interfaces";

function BotAvatar(props:{bot:IBot,isNameAtLeft:boolean}) {
  return (
    <div>
        <p > {props.isNameAtLeft && props.bot.name}</p>
 <img className="Avatar"
      src={props.bot.avatar}
      alt={props.bot.name}
    />
    <p > {!props.isNameAtLeft && props.bot.name}</p>
    </div>
   
  );
}
export default BotAvatar;
