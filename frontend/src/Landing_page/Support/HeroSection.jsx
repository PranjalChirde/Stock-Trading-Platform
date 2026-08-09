function HeroSection() {
  return (
    <div className="container mt-5 mb-5" id="support-cont">
      <div className="row">
        <div className="col-6">
          <h5>Support Portal</h5>

          <div className="mt-5">
            <h3 className="mb-4">
              Search for an answer or browser help topics to create a ticket
            </h3>
            <input
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
              className="p-2 px-2 mb-3"
              style={{width: "90%"}}
            /> <br />
            <a style={{color: "#fff", textDecoration : "underline"}} href="#">Track account opening</a>&nbsp;&nbsp;&nbsp;
            <a style={{color: "#fff", textDecoration : "underline"}} href="#">Track segment activation</a>&nbsp;&nbsp;&nbsp;
            <a style={{color: "#fff", textDecoration : "underline"}} href="#">Intraday</a>&nbsp;&nbsp;&nbsp;
            <a style={{color: "#fff", textDecoration : "underline"}} href="#">margins</a>
            <a style={{color: "#fff", textDecoration : "underline"}} href="#">Kite user manual</a>
          </div>
        </div>

        <div className="col-6">
            <p style={{color: "#fff", marginLeft : "400px"}}>
                <a href="" style={{color: "#fff", textDecoration : "underline"}} >Track Ticket</a>
            </p>

          <div style={{lineHeight : "30px"}}>
            <h3>Featured</h3>
            1.<a style={{color: "#fff", textDecoration : "underline"}} href="#">Current Takeovers and Delisting - January 2024</a> <br />
            2.<a style={{color: "#fff", textDecoration : "underline"}} href="#">Latest Intraday leverages - MIS & CO</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
