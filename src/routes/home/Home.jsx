import MapBox from "../../components/Map/Map";
import { Link } from "react-router-dom";
import shopper from '../../assets/img/shopping-blush-design.png';

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="w-96 text-2xl font-bold text-center p-4 md:text-4xl md:w-3/6 lg:w-2/5">
          Compare Apples to Oranges. Find alternative prices in other stores near you!
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/src/assets/img/shopper.png" className="w-50 h-50" />
      </div>
      <div className="flex flex-col m-2 p-2 md:m-8">
        <div className="flex justify-center">
          <h3 className="font-sans font-bold md:text-xl">
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
      <div className="p-2 md:p-8 bg-lightBlue flex flex-col justify-center align-middle ">
        <div className="w-96 md:w-3/6 lg:w-2/5 flex flex-col m-auto">
          <h2 className="text-2xl font-bold md:text-4xl m-auto text-center">
            How does Apples to Oranges work?
          </h2>
          <img src={shopper} />
          <p className="p-4 md:text-lg m-auto text-center">
            So you're browsing in the grocery store and you're wondering if this item's price is better elsewhere.
          </p>
          <p className="p-4 md:text-lg m-auto text-center">
            1. Click on Search Now
          </p>
          <p className="p-4 md:text-lg m-auto text-center">
            2. Type in the item's name
          </p>
          <p className="p-4 md:text-lg m-auto text-center">
            3. See the list of item prices
          </p>
          <p className="p-4 md:text-lg m-auto text-center">
            4. Click on the item's location to locate near you!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
