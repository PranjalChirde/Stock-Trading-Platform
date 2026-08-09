function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/largestBroker.svg"
            alt="largest broker"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-6 ">
          <h2 className="mt-5 mb-4 fs-2">
            Largest stock broker in India
          </h2>
          <p>
            2+ million Zerodha client contribute over 15% of all retail order
            volumes in India daily by trading and Investing in:
          </p>

          <div className="row mt-4">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and Derivatives</p>
                </li>
                <li>
                  <p>Currency and Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutal funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. Security</p>
                </li>
              </ul>
            </div>
            <img src="media/pressLogos.png" alt="press logo" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
