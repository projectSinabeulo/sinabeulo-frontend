import { useLocation } from 'react-router-dom';

function Practice () {
    //사용자 입력 단어 전달 받음
    const inputWord = useLocation().state;

    return (
        <div>
            this is practice page!! {inputWord}
        </div>
    );
}

export default Practice;