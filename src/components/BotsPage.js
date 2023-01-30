import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots").then(res => res.json()).then(data => setBots(data.splice(0, 9)));
  }, []);

  const selectedBots = (bot) => {
    setSelected([...selected, bot])
  }

  const filterBots = (id) => {
    console.log(id);
  }


  return (
    <div>
      <YourBotArmy selected={selected} filterBots={filterBots} />
      <BotCollection bots={bots} setSelected={selectedBots} />
    </div>
  )
}

export default BotsPage;
