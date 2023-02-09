import MapBox from "../../components/Map/Map";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="w-96 text-2xl font-bold text-center p-4 md:text-4xl md:w-3/6 lg:w-2/5">
          Find alternative prices in other stores near you!
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/src/images/shopper.png" className="w-50 h-50" />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-center">
          <h3 className="font-sans font-bold">
            Got an item to compare prices?
          </h3>
        </div>
        <div className="flex justify-center">
          <Link to="/products">
            <button className="w-80 text-white bg-darkRed focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center hover:bg-orangeRed">
              Search Now
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="flex justify-center p-4">
        <MapBox />
      </div> */}
    </div>
  );
};
export default Home;
