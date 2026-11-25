import PlayerCard from "./PlayerCard";

const PlayersList = ({ players, activeTab, selectedPlayers, setSelectedPlayers }) => {

    const handleRemovePlayer = (id) => {
  setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
};

    const handleChoosePlayer = (player) => {

    // age check: already selected kina
    const isAlreadySelected = selectedPlayers.find((p) => p.id === player.id);

    if (isAlreadySelected) {
    alert("Player already selected!");
    return;
    
    }
    // notun array banaye purano gulo + notun player add
    setSelectedPlayers([...selectedPlayers, player]);
};

const listToShow = activeTab === "Available" ? players : selectedPlayers;

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      {listToShow.map((player) => (
        console.log(player),
        <PlayerCard key={player.id} playerName={player.playerName} country={player.country} playertype={player.playertype} rating={player.rating} battingtype={player.battingtype} bowlingtype={player.bowlingtype} price={player.price} selectedPlayers={selectedPlayers} onChoose={handleChoosePlayer} player={player} isSelected={selectedPlayers.some((p) => p.id === player.id)} onRemove={handleRemovePlayer} activeTab={activeTab} />
      ))}
    </div>
  );
};

export default PlayersList