import bannerimg from "../../../assets/banner-main.png";
const BannerContent = () => {
return (
    <div className="flex flex-col items-center justify-center gap-5">
        <img className="h-40 w-45" src={bannerimg} alt="Banner"/>
        <h1 className="text-4xl font-bold text-white text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h2 className="text-xl text-gray-300 text-center">Beyond Boundaries Beyond Limits</h2>
        <div className="border border-[#E7FE29] rounded-2xl p-2">
            <button className="btn btn-primary text-lg block mx-auto bg-[#E7FE29] text-black font-bold rounded-xl border border-[#E7FE29] hover:bg-[#D4E01B]">Claim Free Credit</button>
        </div>
    </div>
)
}

export default BannerContent