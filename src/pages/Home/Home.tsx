import AboutUs from '../../components/AboutUs';
import HeroSection from '../../components/HeroSection/HeroSection';
import PlantsTypeSection from '../../components/plantsTypeSection/PlantsTypeSection';
import TreePlantOnlineStoreSection from '../../components/TreePlantOnlineStoreSection ';
import FAQSection from '../../FAQSection ';

const Home = () => {
   return (
      <div>
         <HeroSection />
         <PlantsTypeSection />
         <TreePlantOnlineStoreSection />
         <AboutUs />
         <FAQSection />
      </div>
   );
};

export default Home;
