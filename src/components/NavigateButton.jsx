import {useNavigate} from 'react-router-dom';

function NavigateButton ({to, children, ...props}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };


    return (
        <button {...props} onClick={handleClick}>
            {children}
        </button>
    );
}

export default NavigateButton;