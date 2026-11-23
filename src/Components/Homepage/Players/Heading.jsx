
const Heading = () => {
return (
    <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-black text-center">Avaiable Players</h1>
        <div>
            <button className="active:bg-[#E7FE29] text-black font-bold py-2 px-4 rounded-bl-xl border border-gray-300 rounded-tl-xl cursor-pointer">
                Available
            </button>
            <button className="active:bg-[#E7FE29] text-black font-bold py-2 px-2 rounded-br-xl border border-gray-200 rounded-tr-xl cursor-pointer">
                Selected <span className="">(0)</span>
            </button>
        </div>
    </div>
)
}

export default Heading