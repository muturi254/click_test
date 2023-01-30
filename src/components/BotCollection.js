import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, setSelected}) {
  // Your code here

 
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}

        {bots.map(bot => <BotCard bot={bot} key={bot.id} setSelected={setSelected} />)}

      </div>
    </div>
  );
}

export default BotCollection;
