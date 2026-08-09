function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 mt-5 px-2 mb-5">
                    <img src="media/education.svg" alt="Education img" style={{width: "80%"}} />
                </div>

                <div className="col-6 mt-5 mb-5">
                    <h2 className="fs-3">
                        Free and open market education
                    </h2>

                    <div className="mt-4">
                        <p>
                            Varsity, the largest online stock market education
                            book in the world covering everything from the basics to
                            advanced trading.
                        </p>

                        <a href="#" style={{textDecoration: "none" }}>
                                Varsity   &nbsp;
                                <i className="fa-solid fa-arrow-right mb-2"></i>
                        </a>
                    </div>

                    <div className="mt-5">
                        <p>
                            TradingQ&A, the most active trading and investment
                            community in India for all your market related queries.
                        </p>

                        <a href="#" style={{textDecoration: "none" }}>
                                TradingQ&A   &nbsp;
                                <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;