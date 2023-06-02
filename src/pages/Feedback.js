import { useLocation, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import { Colors } from "../styles/ui";
import { MultiButton, HrBox, OuterBox, ImageButton, InnerBox, ImageBox, TextButton } from '../components'
import icon_speacker from '../assets/icon_speacker.png'
import icon_previous from "../assets/icon_previous.png"
import icon_next from "../assets/icon_next.png"
import image_tongue from "../assets/image_tongue.png"


function Feedback () {
    const navigate = useNavigate();
    //사용자 입력 단어 전달 받음
    const inputWord = useLocation().state;

    const onStandardBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭");
    };

    const onUserVoiceBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭");
    };

    const moveToPractice = () => {
        console.log("발음 연습 다시 하기 클릭");
        navigate('/practice', { state: inputWord});
    };

    const moveToSearch = () => {
        console.log("다른 단어 연습하기 클릭");
        navigate('/');
    };

    return (
        <Container>

            {/* 좌측 표준 발음 변환 결과 영역 */}
            <LeftBox>
                <InnerArea>
                    <TextArea>
                        <div className='title'>입력한 단어</div>
                        <div className='content' style={{color:Colors.gray4}}>{inputWord}</div>
                    </TextArea>
                    <HrBox width="90%"/>
                    <TextArea>
                        <div className='title'>표준 발음 변환 결과</div>
                        <div className='content' style={{color:Colors.green2}}>조타</div>
                    </TextArea>
                    <HrBox width="90%"/>
                    <TextArea>
                        <div className='title'>사용자 발음 변환 결과</div>
                        <div className='content' style={{color:Colors.green2}}>조따</div>
                    </TextArea>
                </InnerArea>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", width:"80%"}}>
                    <MultiButton width="140px" height="140px" image={icon_speacker} text1="표준 발음" text2="듣기" onClick={onStandardBtn}/>
                    <MultiButton width="140px" height="140px" image={icon_speacker} text1="사용자 발음" text2="듣기" onClick={onUserVoiceBtn}/>
                </div>
            </LeftBox>

            {/* 우측 연습 영역 */}
            <RightBox>
                <OuterBox className='practiceWord' width="40vw" height="94px" text="조"></OuterBox>

                <RowBox className='practiceImages'>
                    <ImageButton width="75px" height="139px" image={icon_previous} />
                    <ColumnBox>
                        <InnerBox width="54px" height="30vh" text="표준발음"/>
                        <InnerBox width="54px" height="30vh" text="사용자발음"/>
                    </ColumnBox>
                    <ColumnBox>
                        <ImageBox width="15vw" image={image_tongue} />
                        <ImageBox width="15vw" image={image_tongue} />
                    </ColumnBox>
                    <ColumnBox>
                        <ImageBox width="15vw" image={image_tongue} />
                        <ImageBox width="15vw" image={image_tongue} />
                    </ColumnBox>
                    <ImageButton width="75px" height="139px" image={icon_next}/>
                </RowBox>

                <RowBox className='practiceButtons'>
                    <div style={{width:"12%"}} />
                    <TextButton width="35%" height="74px" text="발음 연습 다시하기" onClick={moveToPractice}/>
                    <TextButton width="35%" height="74px" text="다른 단어 연습하기" onClick={moveToSearch}/>
                    <div style={{width:"12%"}} />
                </RowBox>
            </RightBox>
        </Container>
    );
}

export default Feedback;

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
    height: 57vh;
    margin-bottom: 6vh;

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

margin: 18px 0px 18px 0px;
`

const ColumnBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

height: 63vh;
`