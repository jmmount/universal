//Styling needs Bootstraping to be responsive
import NavigateButton from "../routes/NavigateButton";

function SignUpCard() {
  return (
   <div className="container">
   <div class="card text-center">
      
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore ullam, architecto placeat, rerum numquam reprehenderit nihil voluptas soluta iure perspiciatis nostrum debitis id a.
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
