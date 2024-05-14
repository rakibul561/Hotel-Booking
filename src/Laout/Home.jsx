import Carosel from "../component/Carosel";
import MapComponent from "./Map";
import Newsletter from "./NewsLetter";
import Optional from "./Optional";
import Rooms from "./Rooms";

const Home = () => {
    return (
        <div>
            {/* <Carosel></Carosel> */}
            <Carosel></Carosel>
            <div className="mt-16  mb-4">
                <h2 className="text-5xl text-center font-semibold mb-8">Rest In Hotel location</h2>
                <MapComponent></MapComponent>
            </div>
            <Rooms></Rooms>
            
            <div className="mt-8">
                <Newsletter></Newsletter>
            </div>
            <Optional></Optional> 
        </div>
    );
};

export default Home;