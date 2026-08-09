function CreateTicket() {
    return ( 
        <div className="container">
            <h2 className="fs-3 mt-5 mb-5">To create a ticket, select a relevant topic</h2>
            <div className="row">
                
                <div className="col-4">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-solid fa-circle-plus" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Account Opening
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Online Account Opening</a></li>
                        <li><a href="#">Offline Account Opening</a></li>
                        <li><a href="#">Company, PartnerShip and huf Account Opening</a></li>
                        <li><a href="#">NRI Account Opening</a></li>
                        <li><a href="#">Charges at Zerodha</a></li>
                        <li><a href="#">Zerodha IDFC FIRST 3-in-1 Account</a></li>
                        <li><a href="#">Getting Started</a></li>
                    </ul>
                </div>

                <div className="col-4">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-solid fa-user" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Your Zerodha Account
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Login Credential</a></li>
                        <li><a href="#">Account Modification and Segment Addition</a></li>
                        <li><a href="#">DP ID and bank details</a></li>
                        <li><a href="#">Your Profile</a></li>
                        <li><a href="#">Transfer and conversion of shares</a></li>
                    </ul>
                </div>

                <div className="col-4">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-solid fa-chart-column" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Your Zerodha Account
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Margin/Leverage, Product and Order types</a></li>
                        <li><a href="#">Kite Web and Mobile</a></li>
                        <li><a href="#">Trading FAQs</a></li>
                        <li><a href="#">Corporate Actions</a></li>
                        <li><a href="#">Sentinel</a></li>
                        <li><a href="#">Kite API</a></li>
                        <li><a href="#">Pi and other platform</a></li>
                        <li><a href="#">Stockports+</a></li>
                        <li><a href="#">GTT</a></li>
                    </ul>
                </div>



            

                <div className="col-4 mt-5">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-regular fa-credit-card" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Funds
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Adding Funds</a></li>
                        <li><a href="#">Fund Withdrawal</a></li>
                        <li><a href="#">eMandates</a></li>
                        <li><a href="#">Adding Bank Accounts</a></li>
                    </ul>
                </div>

                <div className="col-4 mt-5">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-regular fa-circle" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Console
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Ledger</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">60 Day Challenge</a></li>
                        <li><a href="#">IPO</a></li>
                        <li><a href="#">Referral Program</a></li>
                    </ul>
                </div>

                <div className="col-4 mt-5">
                    <h4 className="fs-5 mb-5" style={{ color: "#424242" }}>
                        <span><i className="fa-solid fa-coins" style={{color: "rgb(13, 13, 14)"}}></i></span> &nbsp;
                        Coin
                    </h4>
                    <ul className="support-page1">
                        <li><a href="#">Understading Mutual Funds</a></li>
                        <li><a href="#">About Coin</a></li>
                        <li><a href="#">Buying and Selling Through Coin</a></li>
                        <li><a href="#">Starting an SIP </a></li>
                        <li><a href="#">Managing your Portfolio</a></li>
                        <li><a href="#">Coin App</a></li>
                        <li><a href="#">Moving to Coin</a></li>
                        <li><a href="#">Goverment Securities</a></li>
                    </ul>
                </div>

            </div>
        </div>
     );
}

export default CreateTicket;