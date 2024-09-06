import NavigateButton from "../routes/NavigateButton";

function SignUp({ to, buttonText }) {
  return (
    <div className="d-flex justify-content-center">
      <div class="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Sign Up</div>
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
              <small id="passwordMessage" className="form-text text-muted">
                Passwords must must contain an Uppercase letter and symbol.
              </small>

              <label for="exampleInputPassword1">Re-enter Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <small id="passwordMessage" className="form-text text-muted">
                Passwords must match.
              </small>
            </div>
            <NavigateButton
              className="btn btn-outline-success mt-3"
              to="/login/"
              buttonText="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
