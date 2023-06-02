import { useLocation, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import { Colors } from "../styles/ui";
import { TextButton, HrBox, OuterBox, ImageButton, InnerBox, ImageBox } from '../components'
import icon_speacker from '../assets/icon_speacker.png'
import icon_previous from "../assets/icon_previous.png"
import icon_next from "../assets/icon_next.png"
import icon_record from "../assets/icon_record.png"
import icon_complete from "../assets/icon_complete.png"
import image_tongue from "../assets/image_tongue.png"


function Practice () {
    const navigate = useNavigate();
    //사용자 입력 단어 전달 받음
    const inputWord = useLocation().state;

    const onClickListenBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭");
    };

    const onRecord = () => {
        console.log("발음하기 버튼 클릭");
    };

    const onCheck = () => {
        console.log("들어보기 버튼 클릭");
    };

    const onComplete = () => {
        console.log("완료하기 버튼 클릭");
        navigate('/feedback', { state: inputWord});
    };

    return (
        <Container>

            {/* 좌측 표준 발음 변환 결과 영역 */}
            <LeftBox>
                <InnerArea>
                    <TextArea>
                        <div className='title'>입력한 단어</div>
                        <div className='content' style={{color:Colors.gray4}}>좋다</div>
                    </TextArea>
                    <HrBox width="90%"/>
                    <TextArea>
                        <div className='title'>표준 발음 변환 결과</div>
                        <div className='content' style={{color:Colors.green2}}>조타</div>
                    </TextArea>
                </InnerArea>
                <TextButton width="150px" height="150px" image={icon_speacker} text1="표준 발음" text2="듣기" onClick={onClickListenBtn}/>
            </LeftBox>

            {/* 우측 연습 영역 */}
            <RightBox>
                <OuterBox className='practiceWord' width="40vw" height="134px" text="조"></OuterBox>
                <RowBox className='practiceImages'>
                    <ImageButton width="75px" height="139px" image={icon_previous} />
                    <InnerBox width="54px" height="30vh" text="표준발음"/>
                    <ImageBox width="15vw" image={image_tongue} />
                    <ImageBox width="15vw" image={image_tongue} />
                    <ImageButton width="75px" height="139px" image={icon_next}/>
                </RowBox>
                <RowBox className='practiceButtons'>
                    <div style={{width:"2vw"}} />
                    <TextButton width="178px" height="148px" image={icon_record} text1="발음하기" onClick={onRecord}/>
                    <TextButton width="178px" height="148px" image={icon_speacker} text1="들어보기" onClick={onCheck}/>
                    <TextButton width="178px" height="148px" image={icon_complete} text1="완료하기" onClick={onComplete}/>
                    <div style={{width:"2vw"}} />
                </RowBox>
            </RightBox>
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

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30vw;
    height: 94vh;

    box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
    border-radius: 40px;
`;

const InnerArea = styled.div`
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

const RightBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 70vw;
height: 94vh;
`

const RowBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 85%;

margin: 36px 0px 36px 0px;
`