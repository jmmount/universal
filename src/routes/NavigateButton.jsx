import {useNavigate} from 'react-router-dom';

function NavigateButton ({to, buttonText, ...props}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };


    return (
        <button {...props} onClick={handleClick}>
            {buttonText}
        </button>
    );
}

export default NavigateButton;