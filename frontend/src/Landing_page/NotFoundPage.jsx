function NotFoundPage() {
    return ( 
        <div className="container text-center mt-5 mb-5">
            <h1 className="mt-5 mb-3  fs-3" style={{color: "#424242"}}>
                404 Not Found
            </h1>

            <p style={{fontSize: "14px", color: "#666"}}>
                Sorry, the page you are loking for does not exists.
            </p>
        </div>
     );
}

export default NotFoundPage;