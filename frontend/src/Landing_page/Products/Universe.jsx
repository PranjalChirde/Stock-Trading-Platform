function Universe() {
  return (
    <div className="container text-center mt-5">
      <div className="mb-5" style={{ lineHeight: "3rem" }}>
        <h2 className="fs-3">Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mt-3">
        <div className="col-4 logo-par">
          <img
            src="media/zerodhaFundhouse.png"
            alt="zerodha Fundhouse logo"
            style={{ width: "50%" }}
          />
          <p className="px-5 py-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>

          <img
            src="media/streakLogo.png"
            alt="streakLogo"
            className="mt-5"
            style={{ width: "50%" }}
          />
          <p className="px-5 py-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>


        <div className="col-4 logo-par mt-2">
          <img
            src="media/sensibullLogo.svg"
            alt="sensibull Logo"
            style={{ width: "50%" }}
          />
          <p className="px-5 py-4 mb-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>

          <img
            src="media/smallcaseLogo.png"
            alt="smallcase Logo"
            className="mt-5"
            style={{ width: "50%" }}
          />
          <p className="px-5 py-3 mt-2">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>


        <div className="col-4 logo-par">
          <img
            src="media/tijori.svg"
            alt="tijori logo"
            style={{ width: "50%" }}
          />
          <p className="px-5 py-3 mb-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>

          <img
            src="media/dittoLogo.png"
            alt="ditto Logo"
            className="mt-4"
            style={{ width: "40%" }}
          />
          <p className="px-5 py-3 mt-2">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <button
          className="p-px btn btn-primary fs-5 mt-5 mb-3"
          style={{
            width: "18%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
          }}>Sign up for free</button>
    </div>
  );
}

export default Universe;
