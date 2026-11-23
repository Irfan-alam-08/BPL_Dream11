import PlayerCard from "./PlayerCard";

const PlayersList = ({ players }) => {
    console.log(players);
return (
    <div className="item grid grid-cols-3 gap-4 mb-4">
        {players.map((player) => (
            console.log(player),
            <PlayerCard key={player.id} playerName={player.playerName} country={player.country} playertype={player.playertype} rating={player.rating} battingtype={player.battingtype} bowlingtype={player.bowlingtype} price={player.price} />
        ))}
    </div>
)
}

export default PlayersList