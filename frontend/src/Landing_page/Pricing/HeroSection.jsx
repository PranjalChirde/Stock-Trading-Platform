function HeroSection() {
  return (
    <div className="container text-center mb-5">
        <div className="mt-5 p-4">
            <h2 className="p-2">Charges</h2>
            <h5 style={{ color: "#666" }}>List of all charges or taxes</h5>
        </div>
        

        <div className="row mt-5 mb-5">
            <div className="col mt-5">
                <img
                    src="media/pricing0.svg"
                    alt="zero img"
                    style={{ width: "70%" }}
                />
                <h2 className="fs-3">Free equity delivery</h2>
                <p className="p-4">
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹
                    0 brokerage.
                </p>
            </div>

            <div className="col mt-5 fs-3">
                <img
                    src="media/intradayTrades.svg"
                    alt="Twenty Rupees img"
                    style={{ width: "70%" }}
                />
                <h2 className="fs-3">Intraday and F&O trades</h2>
                <p className="p-4">
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                    intraday trades across equity, currency, and commodity trades. Flat
                    ₹20 on all option trades.
                </p>
            </div>

            <div className="col mt-5 fs-3">
                <img
                    src="media/pricing0.svg"
                    alt="zero img"
                    style={{ width: "70%" }}
                />
                <h2 className="fs-3">Free direct MF</h2>
                <p className="p-4">
                    All direct mutual fund investments are absolutely free — ₹ 0
                    commissions & DP charges.
                </p>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
