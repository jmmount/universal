import PageHead from "./PageHead";
import ImgCard from "./ImgCard";
import SignUpCard from "./SignUpCard";

const CourseLayout = ({ title, body, cards }) => {
  return (
    <div className="course-page">
      <PageHead title={title} body={body} />
      {cards.map((card, index) => (
        <ImgCard
          key={index}
          image={card.image}
          title={card.title}
          body={card.body}
          to={card.to}
          buttonText={card.buttonText}
        />
      ))}
      <SignUpCard />
    </div>
  );
};

export default CourseLayout;
