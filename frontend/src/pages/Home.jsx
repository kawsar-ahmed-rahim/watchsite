import BannerHome from "../components/BannerHome";
import CategoriesHome from "../components/CategoriesHome";
import ComingSoonWatchesPage from "../components/ComingSoonWatchesPage";
import FashionPage from "../components/FashionPage";
import Footer from "../components/Footer";
import TestimonialsPage from "../components/TestimonialsPage";
const Home = () => {
  return (
    <div>
      <BannerHome />
      <CategoriesHome />
      <ComingSoonWatchesPage />
      <FashionPage />
      <TestimonialsPage />
      <Footer />
    </div>
  );
};

export default Home;
