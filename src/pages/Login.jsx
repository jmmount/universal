import NavigateButton from "../routes/NavigateButton";

function Login() {
  return (
    <div className="d-flex justify-content-center">
    <div class="card border-dark mb-3" style= {{maxWidth: '18rem'}}>
      <div class="card-header">Log in</div>
      <div class="card-body text-dark">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <NavigateButton
              className="btn btn-outline-success mt-3"
              to="/login/"
              buttonText="Log in"
            />
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
