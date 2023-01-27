import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <h1 className="action-call">
        Find alternative prices in other stores near you!
      </h1>
      <img src="/src/images/shopper.png"></img>
      <h3>Got an image? Upload and search below.</h3>
      <input type="file"></input>
      <button>Search Now</button>
      <img src="/src/images/map.png"></img>
    </div>
  );
};
export default Home;
