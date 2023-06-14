import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import axios from 'axios';
import Swal from "sweetalert2";
import { Colors } from "../styles/ui";
import { MultiButton, HrBox, OuterBox, ImageButton, InnerBox, VowImageBox, ConImageBox } from '../components'

import icon_speacker from '../assets/icon_speacker.png'
import icon_previous from "../assets/icon_previous.png"
import icon_next from "../assets/icon_next.png"
import icon_record from "../assets/icon_record.png"
import icon_complete from "../assets/icon_complete.png"
import image_tongue from "../assets/image_tongue.png"


function Practice () {
    const Hangul = require('hangul-js');

    //사용자 입력 단어, 표준 발음 변환 결과 전달 받음
    const navigate = useNavigate();
    const inputWord = useLocation().state.inputWord+"";             //사용자 입력 단어
    const transWord = useLocation().state.transWord+"";             //표준 발음 변환 결과
    const [ wordPos, setWordPos ] = useState(0);                    //현재 사용자가 보고있는 단어 index
    const [ currentChar, setCurrentChar ] = useState('');           //현재 사용자가 보고있는 단어
    const [ currentFn, setCurrntFn ] = useState('');                //현재 사용자가 보고있는 단어의 초성
    const [ currentSn, setCurrntSn ] = useState('');                //현재 사용자가 보고있는 단어의 중성
    const [ currentTn, setCurrntTn ] = useState('');                //현재 사용자가 보고있는 단어의 종성
    const wordLen = transWord.length;                               //전체 단어 길이

    const [stream, setStream] = useState();
    const [media, setMedia] = useState();
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState();
    const [analyser, setAnalyser] = useState();
    const [audioUrl, setAudioUrl] = useState();
    const [disabled, setDisabled] = useState(true);
    const [sound, setSound] = useState();

    //SpeechToText api 호출
    async function speechToText() {
        const formData = new FormData();
        formData.append('file', audioUrl);

        try {
          const response = await axios.post('/uploadFormAction', 
            formData
            , {
                headers: {
                    "Contest-Type": "multipart/form-data"
                }
            }
          ).then(res => {
            navigate('/feedback', { 
            state: {
                inputWord: inputWord.replace(" ", ""),
                transWord: transWord.replace(" ", ""),
                sttWord: res.data.replace(" ", ""),
                audioUrl: audioUrl
            }
            });
          })
        }

        //speech to text 변환 실패 시, 경고창 출력
         catch (error) {
            console.error("/uploadFormAction error message: " + error);
            Swal.fire({
                icon: "error",
                title: "변환 불가",
                text: `녹음을 진행하지 않았습니다. 다시 시도해주세요.`,
                showCancelButton: false,
                confirmButtonText: "확인",
                confirmButtonColor: "#407C46"
            }).then((res) => {
                window.location.replace("/practice"); 
            });
        }
    };

    //사용자가 보고있는 음절
    useEffect(() => {
        setCurrentChar(transWord.charAt(wordPos));
    }, [wordPos])

    //사용자가 보고있는 음절의 초성, 중성 종성
    useEffect(() => {
        setCurrntFn(Hangul.disassemble(currentChar)[0]);
        setCurrntSn(Hangul.disassemble(currentChar)[1]);
        setCurrntTn(Hangul.disassemble(currentChar)[2]);
    }, [currentChar])

    const onClickListenBtn = () => {
        console.log("표준 발음 다시 듣기 버튼 클릭");
    };

    //사용자가 보고있는 음절 index 관리 (이전버튼)
    const onPrevImage = () => {
        if(wordPos == 0) { setWordPos(wordLen - 1); } 
        else { setWordPos(wordPos - 1); }
    };

    //사용자가 보고있는 음절 index 관리 (다음버튼)
    const onNextImage = () => {
        if(wordPos == wordLen - 1) { setWordPos(0); } 
        else { setWordPos(wordPos + 1); }
    };

    //발음하기 버튼 - 녹음 시작
    const onRecord = () => {
        setDisabled(true);
        
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();      // 음원정보를 담은 노드를 생성, 음원을 실행/디코딩
        const analyser = audioCtx.createScriptProcessor(0, 1, 1);
        setAnalyser(analyser);
    
        function makeSound(stream) {                                                    //오디오 스트림 정보
            const source = audioCtx.createMediaStreamSource(stream);
            setSource(source);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
        }

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {         //마이크 사용 권한 설정
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setStream(stream);
            setMedia(mediaRecorder);
            makeSound(stream);
    
            analyser.onaudioprocess = function (e) {                                    // 20초 초과시 녹음 중지
            if (e.playbackTime > 20) {
                stream.getAudioTracks().forEach(function (track) {
                track.stop();
                });
                mediaRecorder.stop();

                analyser.disconnect();                                                  //노드 연결 해제
                audioCtx.createMediaStreamSource(stream).disconnect();
    
                mediaRecorder.ondataavailable = function (e) {
                setAudioUrl(e.data);
                setOnRec(true);
                };
            } else {
                setOnRec(false);
            }
            };
        });
    };
        
    //발음하기 버튼 - 녹음 중지
    const offRecord = () => {
        media.ondataavailable = function (e) {                                          //Blob 데이터 저장
            setAudioUrl(e.data);
            setOnRec(true);
        };
    
        stream.getAudioTracks().forEach(function (track) {                              //오디오 스트림 정지
            track.stop();
        });
    
        media.stop();                                                                   //미디어 캡처 중지
    
        analyser.disconnect();                                                          //노드 연결 해제
        source.disconnect();
        
        if (audioUrl) {                                                                 //오디오 파일로 변환 - '들어보기'구현 위함
            URL.createObjectURL(audioUrl);
        }
        const sound = new File([audioUrl], "soundBlob", {
            lastModified: new Date().getTime(),
            type: "audio",
        });
        setSound(sound);
            
        setDisabled(false);
    };

    //들어보기 버튼
    const onPlay = () => {
        if(audioUrl){
            const audio = new Audio(URL.createObjectURL(audioUrl));
            audio.loop = false;
            audio.volume = 1;
            audio.play();
        }
    };

    //완료하기 버튼
    const onComplete = () => {
        speechToText();
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
                </InnerArea>
                <MultiButton width="150px" height="150px" image={icon_speacker} text1="표준 발음" text2="듣기" onClick={onClickListenBtn}/>
            </LeftBox>

            {/* 우측 연습 영역 */}
            <RightBox>
                <OuterBox className='practiceWord' width="40vw" height="114px" text={currentChar}></OuterBox>
                <RowBox className='practiceImages'>
                    <ImageButton width="75px" height="139px" image={icon_previous} onClick={onPrevImage}/>
                    <InnerBox width="54px" height="30vh" text="표준발음"/>
                    <ConImageBox width="15vw" image={image_tongue} fn={currentFn} tn={currentTn}/>
                    <VowImageBox width="15vw" sn={currentSn} />
                    <ImageButton width="75px" height="139px" image={icon_next} onClick={onNextImage}/>
                </RowBox>
                <RowBox className='practiceButtons'>
                    <div style={{width:"2vw"}} />
                    <MultiButton width="178px" height="148px" image={icon_record} text1="발음하기" onClick={onRec ? onRecord : offRecord} />
                    <MultiButton width="178px" height="148px" image={icon_speacker} text1="들어보기" onClick={onPlay}/>
                    <MultiButton width="178px" height="148px" image={icon_complete} text1="완료하기" onClick={onComplete}/>
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