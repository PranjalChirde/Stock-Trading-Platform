function Pricing() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <h2 className="fs-3 mb-4">
                        Unbeatable pricing
                    </h2>
                    <p>
                        We pioneered the concept of discount broking 
                        and price transparency in India. Flat fees and no hidden charges.
                    </p>

                    <div>
                        <a href="#" style={{textDecoration: "none" }}>
                            See pricing  &nbsp;
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div> 
                </div>

                <div className="col-6" >
                    <div className="row">

                        <div className="col-4 d-flex align-item-center">
                            <img src="media/pricing0.svg" alt="zero img"  style={{width: "75%"}}/>

                            <p className="mt-5">
                                Free account opening
                            </p>
                        </div>

                        <div className="col-4 d-flex align-item-center">
                            <img src="media/pricingEquity.svg" alt="Zero img"  style={{width: "75%"}}/>

                            <p className="mt-5">
                                ₹0 equity delivery
                            </p>
                        </div>

                        <div className="col-4 d-flex align-item-center gap-2">
                            <img src="media/intradayTrades.svg" alt="Twenty Rupees img"  style={{width: "75%"}}/>

                            <p className="mt-5">
                                ₹20 intraday trades
                            </p>
                        </div>
                    </div>
                </div>
                        


            </div>
        </div>
    )
}

export default Pricing;
