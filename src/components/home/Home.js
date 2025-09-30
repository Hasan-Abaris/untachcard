import Banner from "./banner/Banner";
import PopulorVennue from "./populorVennue/PopulorVennue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import PopularSearches from "./popularSearches/PopularSearches";
import WeddingCategory from "./weddingCategory/WeddingCategory";
import InhouseServices from "./inhouseServices/InhouseServices";
import RealWeddingStories from "./realWeddingStories/RealWeddingStories";
import GalleryLook from "./galleryLook/GalleryLook";
import LatestBlog from "./latestBlog/LatestBlog";
import { allCategories } from "../../data/weddingCategoriesData";
import Banner2 from "./banner2/Banner2";
import About from "./about/About";
import BenefitsSection from "./benefitsSection/BenefitsSection";
import CardFeatures from "./cardFeatures/CardFeatures";
import OurCards from "./ourCard/OurCard";
import BrandBar from "./brandBar/BrandBar";
import ContactForm from "./contactForm/ContactForm";


const HomeMain = () => {
  return (
    <>
      <Banner2 />
      <About />
      <BenefitsSection />
      <CardFeatures />
      <OurCards />
      <BrandBar />
      <ContactForm />
      {/* <Banner />
      <PopulorVennue />
      <PopularSearches />
      <WeddingCategory
        categories={allCategories.slice(0, 5)}
        showHeader={true}
        showLink={true}
      />      <RealWeddingStories />
      <GalleryLook />
      <LatestBlog /> */}
    </>
  );
};

export default HomeMain;
