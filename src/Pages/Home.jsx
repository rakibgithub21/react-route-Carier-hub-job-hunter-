import Banner from "../components/Banner/Banner";
import CategoryList from "../components/Category/CategoryList";
import FeaturedJob from "../components/FeatureJob/FeaturedJob";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* job category list */}
            <CategoryList></CategoryList>
            {/* Featured Jobs */}
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;