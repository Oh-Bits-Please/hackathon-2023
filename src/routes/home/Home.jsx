import MapBox from "../../components/map/Map";
import { Link } from "react-router-dom";
import shopper from '../../assets/img/shopping-blush-design.png';
import Footer from "../../components/footer/footer.component";
import HowTo from "../../components/how/how.component";
import HeaderText from "../../components/header-text/header-text.component";
import ActionButton from "../../components/action-button/action-button.component";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <HeaderText />
      <ActionButton />
      <HowTo />
      <Footer />
    </div>
  );
};
export default Home;
