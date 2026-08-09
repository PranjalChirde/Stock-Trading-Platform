function Stats() {
    return ( 
        <div className="container mt-5 mb-5 p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h2 className="mb-5 fs-3">
                        Trust with confidence
                    </h2>

                    <div className="mb-5" >
                        <h3 style={{color: "#424242"}} className="fs-5">Customer-first always</h3>
                        <p>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
                            investments, making us India’s largest broker; contributing to 15% of daily
                            retail exchange volumes in India.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 style={{color: "#424242"}} className="fs-5">No spam or gimmicks</h3>
                        <p>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality
                            apps that you use at your pace, the way you like. Our philosophies.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 style={{color: "#424242"}} className="fs-5">The Zerodha universe</h3>
                        <p>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
                            you tailored services specific to your needs.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 style={{color: "#424242"}} className="fs-5">Do better with money</h3>
                        <p>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                            but actively help you do better with your money.
                        </p>
                    </div>

                </div>
                <div className="col-6 p-6 ">
                    <img src="media/ecosystem.png" alt="ecosystem img" style={{width: "100%"}} className="mt-5" />

                    <div className="text-center mt-5">
                        <a href="#" className="mx-5" style={{textDecoration:"none"}}>
                            Explore our products &nbsp;
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" style={{textDecoration:"none"}}>
                            Try Kite demo  &nbsp;
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;