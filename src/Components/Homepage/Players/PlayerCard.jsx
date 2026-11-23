import { ShieldUser } from "lucide-react";
import { Image } from "lucide-react";
import { Flag } from "lucide-react";
const PlayerCard = ({ playerName, country, playertype, rating, battingtype, bowlingtype, price }) => {
return (

    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-2xl p-4">
        <div className="h-50 w-full rounded-xl  bg-gray-200 flex items-center justify-center">
            <Image color="gray" strokeWidth="1" size={100} />
        </div>
        <div className="flex items-center justify-start gap-2">
            <ShieldUser size={25} />
            <h1 className="text-xl font-semibold text-black text-center">{playerName}</h1>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2 p-1">
                <Flag size={18} strokeWidth={2.5} />
            <h3 className="text-md text-gray-500">{country}</h3>
            </div>
            <div className="bg-gray-100 rounded-lg py-1 px-4">
                <p className="text-md text-gray-700">{playertype}</p>
            </div>
        </div>
        <hr className="border-gray-200 border m-2" />
        <div className="flex items-center justify-between">
            <h3>Rating</h3>
            <p className="text-lg font-bold text-gray-800">{rating}</p>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">{battingtype}</p>
            <p className="text-sm font-semibold text-gray-600">{bowlingtype}</p>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-md font-semibold text-gray-600">Price: ${price}</p>
            <button className="bg-gray-200 hover:bg-[#E7FE29] py-2 px-3 rounded-xl cursor-pointer hover:scale-103 active:scale-99 transition-all duration-200">
                <p className="text-md font-semibold text-gray-600">Choose Player</p>
            </button>
        </div>
    </div>
)
}

export default PlayerCard