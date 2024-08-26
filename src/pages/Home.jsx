import ImgCard from "../components/ImgCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";

function Home() {
  return (
    <>
      <h1 class="display-1">Summon the universe.
      <small class="text-body-secondary">Join the over 1.35 billion people around the world that use the English language to trade, communicate, and express themselves. </small>
      </h1>
      <QuoteCard
        quoteText="The limits of my language mean the limits of my world."
        author="Ludwig Wittgenstein"
        ource="Tractatus logigo-philosphicus, 1922"
      />
      <ImgCard/>
      <ImgCard/>
      <ImgCard/>
    </>
  );
}

export default Home;
