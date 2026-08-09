function RightSection({
    imageURL,
    productTitle,
    productDescription,
    learnMore,
}) {

    return ( 
        <div className="container mb-5 mt-5">
      <div className="row">

        <div className="col-6 mt-5">
            <h2 className="mx-5 mt-5">
                {productTitle}
            </h2>
            <p className="p-4 mx-4">
                {productDescription}
            </p>

            <div className="mx-5 fw-medium">
                <a href={learnMore}>
                    learn More &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

        </div>

        <div className="col-6">
          <img src={imageURL} alt="Image URL" style={{width: "100%"}}/>
        </div>

      </div>
    </div>
    );
}

export default RightSection;