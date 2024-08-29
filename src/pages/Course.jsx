import Navbar from "../components/Navbar";
import PageHead from "../components/PageHead";
import ImgCard from "../components/ImgCard";
import SignUpCard from "../components/SignUpCard";
import Footer from "../components/Footer";

const Course = ({ image, title, body, to, buttonText }) => {
    return (
        <div className="course-page">
            <Navbar/>
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
            <Footer/>
        </div>
    );
}

export default Course;