function Team() {
  return (
    <div className="container mt-3 ">
      <div className="row">
        <h2 className="fs-4 text-center mb-4">People</h2>

        <div className="col-6 p-5 text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="Founder of compony"
            className="mb-3"
            style={{ width: "60%", borderRadius: "100%" }}
          />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 p-5 mt-3" style={{lineHeight: "1.8rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          <p>Connect on<span> Homepage / TradingQnA / Twitter </span></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
