import { bannerHomeStyles as a } from "../assets/dummyStyles";
import Navbar from "./Navbar";
const BannerHome = () => {
  return (
    <div className={a.container}>
      <div className={a.navbarWrapper}>
        <Navbar />
      </div>
    </div>
  );
};

export default BannerHome;
