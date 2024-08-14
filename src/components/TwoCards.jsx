function TwoCards () {
    return (
        <div className="row justify-content-center g-3">
        <div className="col-auto">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
  
    )
}

export default TwoCards;