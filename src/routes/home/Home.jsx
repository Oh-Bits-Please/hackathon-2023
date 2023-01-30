import MapBox from "../../components/Map";

const Home = () => {
  return (
    <div className="home">
      <h1 className="action-call">
        Find alternative prices in other stores near you!
      </h1>
      <img src="/src/images/shopper.png" className="w-50 h-50"></img>
      <h3 className="font-sans">Got an image? Upload and search below.</h3>
      <input type="file"></input>
      <button>Search Now</button>
      <MapBox />
    </div>
  );
};
export default Home;
