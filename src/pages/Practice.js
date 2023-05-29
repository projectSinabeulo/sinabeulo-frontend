import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";
import { Colors } from "../styles/ui";
import { TextButton, HrBox } from '../components'
import icon_search from '../assets/icon_speacker.png'

function Practice () {
    //사용자 입력 단어 전달 받음
    const inputWord = useLocation().state;

    const onClickListenBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭")
    };

    return (
        <Container>

            {/* 좌측 표준 발음 변환 결과 영역 */}
            <ResultBox>
                <InnerBox>
                    <TextArea>
                        <div className='title'>입력한 단어</div>
                        <div className='content' style={{color:Colors.gray4}}>좋다</div>
                    </TextArea>
                    <HrBox width="90%"/>
                    <TextArea>
                        <div className='title'>표준 발음 변환 결과</div>
                        <div className='content' style={{color:Colors.green2}}>조타</div>
                    </TextArea>
                </InnerBox>
                <TextButton image={icon_search} text1="표준 발음" text2="듣기" onClick={onClickListenBtn}/>
            </ResultBox>

            {/* 우측 연습 영역 */}
        </Container>
    );
}

export default Practice;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;

    height: 97vh;
    padding: 0px 62px;
`

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30vw;
    height: 94vh;

    box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
    border-radius: 40px;
`;

const InnerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 23vw;
    height: 38vh;
    margin-bottom: 12vh;

    background: ${Colors.while1};
    box-shadow: inset 13px 13px 30px rgba(58, 61, 54, 0.16), inset -20px -20px 25px rgba(255, 255, 255, 0.64);
    border-radius: 30px;
`

const TextArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.title{
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.gray3};

    padding-bottom: 15px;
}

.content{
    font-weight: 700;
    font-size: 30px;
    color: ${Colors.grren2};
}

`
