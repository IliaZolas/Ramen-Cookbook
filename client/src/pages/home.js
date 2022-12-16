import {PrimaryButton} from "../components/buttons";
import "./home.css"

const Home = () => {
    return (
        <div className="">
            <div className="hero-banner">
               <h1>Ramen Cookbook</h1>
               <h3>by Ilia Zolas</h3>
               <PrimaryButton />
            </div>
        </div>
      );
}

export default Home;