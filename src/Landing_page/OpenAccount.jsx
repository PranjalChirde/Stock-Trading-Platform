function OpenAccount() {
    return ( 
        <div className="container text-center mt-5 mb-5">
            <h1 className="mt-5 mb-3  fs-3" style={{color: "#424242"}}>
                Open a Zerodha account
            </h1>

            <p style={{fontSize: "14px", color: "#666"}}>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <button className="p-px btn btn-primary fs-5 my-3 rounded" 
                style={{width: "15%", margin: "0 auto", backgroundColor: "#387ed1", color: "white" }}>
                Sign up for free
            </button>
        </div>
     );
}

export default OpenAccount;