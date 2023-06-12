import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import { Colors } from "../styles/ui";
import { MultiButton, HrBox, OuterBox, ImageButton, InnerBox, VowImageBox, TextButton, ConImageBox } from '../components'
import icon_speacker from '../assets/icon_speacker.png'
import icon_previous from "../assets/icon_previous.png"
import icon_next from "../assets/icon_next.png"
import image_tongue from "../assets/image_tongue.png"


function Feedback () {
    const Hangul = require('hangul-js');

    //사용자 입력 단어, 표준 발음 변환 결과 전달 받음
    const navigate = useNavigate();
    const inputWord = useLocation().state.inputWord+"";             //사용자 입력 단어
    const transWord = useLocation().state.transWord+"";             //표준 발음 변환 결과
    const sttWord = useLocation().state.sttWord+"";                 //stt(사용자 발음) 변환 결과

    const [ wordPos, setWordPos ] = useState(0);                    //현재 사용자가 보고있는 단어 index
    const [ currentTransChar, setCurrentTransChar ] = useState(''); //현재 사용자가 보고있는 표준 발음 변환 단어
    const [ currentTransFn, setCurrntTransFn ] = useState('');      //현재 사용자가 보고있는 표준 발음 변환 단어의 초성
    const [ currentTransSn, setCurrntTransSn ] = useState('');      //현재 사용자가 보고있는 표준 발음 변환 단어의 중성
    const [ currentTransTn, setCurrntTransTn ] = useState('');      //현재 사용자가 보고있는 표준 발음 변환 단어의 종성

    const [ currentSttChar, setCurrentSttChar ] = useState('');     //현재 사용자가 보고있는 사용자 발음 변환 단어
    const [ currentSttFn, setCurrntSttFn ] = useState('');          //현재 사용자가 보고있는 사용자 발음 변환 단어의 초성
    const [ currentSttSn, setCurrntSttSn ] = useState('');          //현재 사용자가 보고있는 사용자 발음 변환 단어의 중성
    const [ currentSttTn, setCurrntSttTn ] = useState('');          //현재 사용자가 보고있는 사용자 발음 변환 단어의 종성
    const wordLen = transWord.length;                               //전체 단어 길이

    //사용자가 보고있는 음절
    useEffect(() => {
        setCurrentTransChar(transWord.charAt(wordPos));
        setCurrentSttChar(sttWord.charAt(wordPos));
    }, [wordPos])

    //사용자가 보고있는 음절의 초성, 중성 종성
    useEffect(() => {
        //표준 발음 변환 단어의 음절
        setCurrntTransFn(Hangul.disassemble(currentTransChar)[0]);
        setCurrntTransSn(Hangul.disassemble(currentTransChar)[1]);
        setCurrntTransTn(Hangul.disassemble(currentTransChar)[2]);

        //사용자 발음 변환 단어의 음절
        setCurrntSttFn(Hangul.disassemble(currentSttChar)[0]);
        setCurrntSttSn(Hangul.disassemble(currentSttChar)[1]);
        setCurrntSttTn(Hangul.disassemble(currentSttChar)[2]);

    }, [currentTransChar])

    const onStandardBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭");
    };

    const onUserVoiceBtn = () => {
        console.log("사용자 발음 다시 듣기 버튼 클릭");
    };

    //사용자가 보고있는 음절 index 관리 (이전버튼)
    const onPrevImage = () => {
        if(wordPos == 0) { setWordPos(wordLen - 1); } 
        else { setWordPos(wordPos - 1); }
    }

    //사용자가 보고있는 음절 index 관리 (다음버튼)
    const onNextImage = () => {
        if(wordPos == wordLen - 1) { setWordPos(0); } 
        else { setWordPos(wordPos + 1); }
    }

    const moveToPractice = () => {
        navigate('/practice', { 
            state: {
                inputWord: inputWord,
                transWord: transWord
            }
        });
    };

    const moveToSearch = () => {
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
                        <div className='content' style={{color:Colors.green2}}>{transWord}</div>
                    </TextArea>
                    <HrBox width="90%"/>
                    <TextArea>
                        <div className='title'>사용자 발음 변환 결과</div>
                        <div className='content' style={{color:Colors.green2}}>{sttWord}</div>
                    </TextArea>
                </InnerArea>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", width:"80%"}}>
                    <MultiButton width="140px" height="140px" image={icon_speacker} text1="표준 발음" text2="듣기" onClick={onStandardBtn}/>
                    <MultiButton width="140px" height="140px" image={icon_speacker} text1="사용자 발음" text2="듣기" onClick={onUserVoiceBtn}/>
                </div>
            </LeftBox>

            {/* 우측 연습 영역 */}
            <RightBox>
                <OuterBox className='practiceWord' width="40vw" height="94px" text={currentTransChar}></OuterBox>

                <RowBox className='practiceImages'>
                    <ImageButton width="75px" height="139px" image={icon_previous} onClick={onPrevImage}/>
                    <ColumnBox>
                        <InnerBox width="54px" height="30vh" text="표준발음"/>
                        <InnerBox width="54px" height="30vh" text="사용자발음"/>
                    </ColumnBox>
                    <ColumnBox>
                        <ConImageBox width="15vw" image={image_tongue} fn={currentTransFn} tn={currentTransTn}/>
                        <ConImageBox width="15vw" image={image_tongue} fn={currentSttFn} tn={currentSttTn}/>  
                    </ColumnBox>
                    <ColumnBox>
                        <VowImageBox width="15vw" sn={currentTransSn} />
                        <VowImageBox width="15vw" sn={currentSttSn} />
                    </ColumnBox>
                    <ImageButton width="75px" height="139px" image={icon_next} onClick={onNextImage}/>
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