
const Heading = ({ activeTab, setActiveTab, count, setCount , selectedPlayers }) => {
    setCount(selectedPlayers.length);
return (
    <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-black text-center">Available Players</h1>
        <div>
            <button 
                className={`py-2 px-4 rounded-bl-xl border border-gray-300 rounded-tl-xl cursor-pointer ${activeTab === 'Available' ? 'bg-[#E7FE29]' : ''}`}
                onClick={() => setActiveTab('Available')}
            >
                Available
            </button>
            <button 
                className={`py-2 px-4 rounded-br-xl border border-gray-300 rounded-tr-xl cursor-pointer ${activeTab === 'Selected' ? 'bg-[#E7FE29]' : ''}`}
                onClick={() => setActiveTab('Selected')}
            >
                Selected <span className="">({count})</span>
            </button>
        </div>
    </div>
)
}

export default Heading