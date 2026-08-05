
import Education from "./Education";
import HeroSection from "./HeroSection";
import Stats from "./stats";
import Pricing from "./Pricing";

import OpenAccount from "../OpenAccount";
import Awards from "./Awards";

function HomePage() {
    return ( 
        <>
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <Education /> 
            <OpenAccount />
        </>
     );
}

export default HomePage;