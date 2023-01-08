import {PrimaryButton} from "../components/buttons";
import "./home.css"
import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="">
            <div className="hero-banner">
               <h1>Ramen Cookbook</h1>
               <PrimaryButton />
            </div>
            <Footer />
        </div>
      );
}

export default Home;