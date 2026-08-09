function LeftSection({
  imageURL,
  productTitle,
  productDescription,
  tryDemo,
  learnMore,
  goggleLogo,
  appleLogo,
}) {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">

        <div className="col-6 p-3 ">
          <img src={imageURL} alt="Image URL" style={{width: "95%"}}/>
        </div>

        <div className="col-6 mt-5">
            <h2 className="mx-5">
                {productTitle}
            </h2>
            <p className="p-4 mx-4">
                {productDescription}
            </p>


            <div className="mx-5 fw-medium">
                <a href={tryDemo}>
                    Try Demo &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a href={learnMore} className="mx-5">
                    Learn More &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div className="my-4 mx-5 d-flex gap-4">
                <a href={goggleLogo}>
                    <img src="media/google-play-badge-light.svg" alt="Google Logo" />
                </a>
                <a href={appleLogo}>
                    <img src="media/appstore-badge-light.svg" alt="Apple logo" />
                </a>
            </div>

        </div>

      </div>
    </div>
  );
}

export default LeftSection;
