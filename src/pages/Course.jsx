import PageHead from "../components/PageHead";
import ImgCard from "../components/ImgCard";
import SignUpCard from "../components/SignUpCard";

const Course = ({ image, title, body, to, buttonText }) => {
    return (
        <div className="course-page">
            <PageHead
            title={title}
            body={body}
            />
             <ImgCard
                image={image}
                title={title}
                body={body}
                to={to}
                buttonText={buttonText}
        />
            <ImgCard
                image={image}
                title={title}
                body={body}
                to={to}
                buttonText={buttonText}
        />
            <ImgCard
                image={image}
                title={title}
                body={body}
                to={to}
                buttonText={buttonText}
        />
            <SignUpCard/>
            
        </div>
    );
}

export default Course;