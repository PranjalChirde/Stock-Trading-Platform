import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>
      <HeroSection />
      <LeftSection
        imageURL="media/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        goggleLogo=""
        appleLogo=""
      />
      <RightSection 
        imageURL="media/console.png"
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        goggleLogo=""
        appleLogo=""
      />
      <RightSection 
        imageURL="media/kiteconnect.png"
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/varsity.png"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        goggleLogo=""
        appleLogo=""
      />
      <h2 className="text-center fs-4 p-5">Want to know more about our technology stack? Check out the<span>Zerodha.tech</span> blog.</h2>
      <Universe />
    </div>
  );
}

export default ProductPage;
