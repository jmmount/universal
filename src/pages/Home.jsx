import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div className="row justify-content-center g-5">
      <div className="col-auto">
        <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Sign up</div>
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
          <div className="card-header">Login</div>
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
      <Footer />
    </>
  );
}

export default Home;
