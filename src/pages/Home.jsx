import ImgCard from "../components/ImgCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import SignUpCard from "../components/SignUpCard.jsx";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="display-1">
          Summon the universe. 
          <small className="text-body-secondary">
            Join the over 1.35 billion people around the world that use the
            English language for communication, businesss, and self-expression.{" "}
          </small>
        </h1>
      </div>
      <div className="container">
        <QuoteCard
          quoteText="The limits of my language mean the limits of my world."
          author="Ludwig Wittgenstein"
          source="Tractatus logigo-philosphicus, 1922"
        />
      </div>
      <div className="container">
      <h3 className="display-2 text-center">Choose how you want to learn.</h3>
        <ImgCard
          image="/logo192.png"
          title="Grammar"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to="/grammar/"
          buttonText="Learn More"
        />
        <ImgCard
          image="/logo192.png"
          title="Self-Study Course"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to="/self-study"
          buttonText="Learn More"
        />
        <ImgCard
          image="/logo192.png"
          title="For Teachers"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          to=""
          buttonText="Learn More"
        />
      </div>
      <div>
        <SignUpCard/>
      </div>
      
    </>
  );
}

export default Home;
