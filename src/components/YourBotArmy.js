import React, { useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy({selected, filterBots}) {
  //your bot army code here...
  let selectedBots = [...new Set(selected)];
  const [click, setClick] = useState(false);

  const deSelect = (id) => {
    console.log(id);
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {selectedBots.map(bot => <BotCard bot={bot} key={bot.id} click={click}  onClick={() => deSelect(bot.id)} />)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
