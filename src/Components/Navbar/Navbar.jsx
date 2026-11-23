import currencyimg from "../../assets/currency.png";

const Navbar = () => {
    return (
        <div className="my-5 bg-base-100 flex justify-between w-4/5 mx-auto">
            <div className="w-2/4">
                <a href="/" className=""><img src="/src/assets/logo.png" alt="logo"/></a>
            </div>
            <div className="flex justify-between items-center w-2/4">
                <div className="flex">
                    <ul className="flex gap-8 items-center justify-center">
                        <li>
                            <a className="text-md font-semibold cursor-pointer btn-ghost btn hover:bg-[#E7FE29] active:scale-98">Home</a>
                        </li>
                        <li>
                            <a className="text-md font-semibold cursor-pointer btn-ghost btn hover:bg-[#E7FE29] active:scale-98">Fixture</a>
                        </li>
                        <li>
                            <a className="text-md font-semibold cursor-pointer btn-ghost btn hover:bg-[#E7FE29] active:scale-98">Teams</a>
                        </li>
                        <li>
                            <a className="text-md font-semibold cursor-pointer btn-ghost btn hover:bg-[#E7FE29] active:scale-98">Schedules</a>
                        </li>
                    </ul>
                </div>
                <button className="flex items-center gap-2 btn btn-ghost text-xl">
                    0 coins
                    <img src={currencyimg} alt="Currency" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
