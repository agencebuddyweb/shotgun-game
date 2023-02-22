import { IBot } from "interfaces";

function BotAvatar(props:{bot:IBot,isNameAtLeft:boolean}) {
  return (
    <div>
      <span className="is-size-5 ml-3 has-text-weight-bold">{props.isNameAtLeft && props.bot.name}</span>
      <div className="avatar ml-2">
        <img className="avatar-img" src={props.bot.avatar} alt={props.bot.name} />
        <span className="is-size-5 ml-3 has-text-weight-bold">{!props.isNameAtLeft && props.bot.name}</span>
      </div>
    </div>
  );
}
export default BotAvatar;
