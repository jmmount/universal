import NavigateButton from "../routes/NavigateButton";

function SignUpCard () {
    return (
        <div class="container">
        <div class="row">
          <div class="col-4 p-0">
            <img
              src="/logo192.png"
              class="img-fluid w-100 h-100"
              alt="Descriptive alt text"
            />
          </div>
          <div class="col-8">
            <h2 class="display-2">Are you ready to explore?</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eaque consequuntur fugit dolor, libero eveniet iusto reiciendis
              velit dicta aliquam?
            </p>
            <NavigateButton
              className="btn btn-outline-success mt-3"
              to="../pages/SignUp.jsx"
            >
              Sign Up
            </NavigateButton>
          </div>
        </div>
      </div>
    );
}

export default SignUpCard;