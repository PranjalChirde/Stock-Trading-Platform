function HeroSection() {
  // 1 component
  return (
    <div className="container mb-5 mt-3">
      <div className="row text-center ">
        <img src="media/homeHero.png" alt="Hero image" className="mb-5 main-img" style={{width: "90%"}} />

        <h2 className="mt-5 mb-3">Invest in everything</h2>

        <p>
          Online platform to invest in stocks, derivatives, mutal funds ,ETFs,
          bonds, and more.
        </p>

        <button
          className="p-px btn btn-primary fs-5 mt-3 mb-5"
          style={{
            width: "15%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
