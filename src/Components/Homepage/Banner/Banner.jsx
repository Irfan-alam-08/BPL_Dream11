import bannerBg from "../../../assets/bg-shadow.png";
import BannerContent from "./BannerContent";
const Banner = () => {
return (
    <div className="bg-cover bg-center bg-no-repeat min-h-110 bg-black w-4/5 mx-auto rounded-3xl my-10"
    style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="py-10">
            <BannerContent />
        </div>
    </div>
)
}

export default Banner