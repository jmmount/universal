import NavigateButton from "../routes/NavigateButton";

const ImgCard = ({ image, title, body, to, buttonText }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "1140px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <NavigateButton className="btn btn-outline-success" to={to}>
                {buttonText}
              </NavigateButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
