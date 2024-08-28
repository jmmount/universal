import ImgCard from "../components/ImgCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import NavigateButton from "../routes/NavigateButton.jsx";

function Home() {
  return (
    <>
      <div class="container">
        <h1 class="display-1">
          Summon the universe.
          <small class="text-body-secondary">
            Join the over 1.35 billion people around the world that use the
            English language for communication, businesss, and self-expression.{" "}
          </small>
        </h1>
      </div>
      <div class="container">
        <QuoteCard
          quoteText="The limits of my language mean the limits of my world."
          author="Ludwig Wittgenstein"
          ource="Tractatus logigo-philosphicus, 1922"
        />
      </div>
      <div class="container">
      <h2 class="display-2 text-center">Choose how you want to learn.</h2>
        <ImgCard
          image="/logo192.png"
          title="Grammar"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to=""
          buttonText="Learn More"
        />
        <ImgCard
          image="/logo192.png"
          title="Self-Study Course"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to=""
          buttonText="Learn More"
        />
        <ImgCard
          image="/logo192.png"
          title="Progress Tracking"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to=""
          buttonText="Learn More"
        />
      </div>
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
    </>
  );
}

export default Home;
