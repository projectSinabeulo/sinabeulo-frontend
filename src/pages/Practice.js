import { useLocation } from 'react-router-dom';

function Practice () {
    const location = useLocation();

    const inputWord = location.state.inputWord;

    return (
        <div>
            this is practice page!!
        </div>
    );
}

export default Practice;