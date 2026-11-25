import { use } from "react";
import Heading from "./Heading";
import PlayersList from "./PlayersList";
import { useState } from 'react';

const PlayerSection = ({ playersPromise }) => {
    const players = use(playersPromise);
    const [activeTab, setActiveTab] = useState('Available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [count, setCount] = useState(0);
return (
    <div className="w-4/5 mx-auto">
        <Heading activeTab={activeTab} setActiveTab={setActiveTab} count={count} setCount={setCount} selectedPlayers={selectedPlayers} />
        <PlayersList players={players} activeTab={activeTab} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
    </div>
)
}

export default PlayerSection