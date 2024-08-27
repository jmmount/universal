import ImgCard from "../components/ImgCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";

function Home() {
  return (
    <>
      <h1 class="display-1">
        Summon the universe.
        <small class="text-body-secondary">
          Join the over 1.35 billion people around the world that use the
          English language for communication, businesss, and self-expression.{" "}
        </small>
      </h1>
      <QuoteCard
        quoteText="The limits of my language mean the limits of my world."
        author="Ludwig Wittgenstein"
        ource="Tractatus logigo-philosphicus, 1922"
      />
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
    </>
  );
}

export default Home;
