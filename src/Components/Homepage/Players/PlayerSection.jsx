import { use } from "react";
import Heading from "./Heading";
import PlayersList from "./PlayersList";

const PlayerSection = ({ playersPromise }) => {
    const players = use(playersPromise);
return (
    <div>
        <Heading />
        <PlayersList players={players} />
    </div>
)
}

export default PlayerSection