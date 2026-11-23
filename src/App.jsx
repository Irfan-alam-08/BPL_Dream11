import { Suspense } from "react";
import Banner from "./Components/Homepage/Banner/Banner"
import PlayerSection from "./Components/Homepage/Players/PlayerSection";
import Navbar from "./Components/Navbar/Navbar"

const fetchPlayers = async () => {
  const response = await fetch("/data.json");
  return response.json();
};
const App = () => {
  const playerPromise = fetchPlayers();
  return (
    <>
    <Navbar />
    <Banner />
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <PlayerSection playersPromise={playerPromise} />
    </Suspense>
    </>
  )
}

export default App