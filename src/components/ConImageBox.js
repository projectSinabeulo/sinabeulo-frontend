import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";

import image_con1 from "../assets/image_con1.png"
import image_con2 from "../assets/image_con2.png"
import image_con3 from "../assets/image_con3.png"
import image_con4 from "../assets/image_con4.png"
import image_con5 from "../assets/image_con5.png"
import image_con6 from "../assets/image_con6.png"
import image_con7 from "../assets/image_con7.png"
import image_con8 from "../assets/image_con8.png"
import image_con9 from "../assets/image_con9.png"
import image_con10 from "../assets/image_con10.png"
import image_con11 from "../assets/image_con11.png"
import image_con12 from "../assets/image_con12.png"
import image_con13 from "../assets/image_con13.png"
import image_con14 from "../assets/image_con14.png"
import image_con15 from "../assets/image_con15.png"
import image_con16 from "../assets/image_con16.png"
import image_con17 from "../assets/image_con17.png"
import image_con18 from "../assets/image_con18.png"
import image_con19 from "../assets/image_con19.png"

function ConImageBox(props) {

    const conList = [
        "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ",
        "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ",
        "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㄲ",
        "ㄸ", "ㅃ", "ㅆ", "ㅉ"
    ];
    const ConImages = [
        image_con1, image_con2, image_con3, image_con4, image_con5,
        image_con6, image_con7, image_con8, image_con9, image_con10,
        image_con11, image_con12, image_con13, image_con14, image_con15,
        image_con16, image_con17, image_con18, image_con19
    ]
    const ConPos = [
        ["40%", "68%"], ["22%", "32%"], ["43%", "32%"], ["48%", "35%"], ["20%", "23%"],
        ["52%", "16%"], ["38%", "39%"], ["25%", "61%"], ["37%", "52%"], ["37%", "52%"],
        ["40%", "68%"], ["43%", "32%"], ["52%", "16%"], ["55%", "75%"], ["40%", "68%"],
        ["43%", "32%"], ["52%", "16%"], ["38%", "39%"], ["37%", "52%"]
    ]

    const [ fnImage, setFnImage ] = useState(ConImages[0]);
    const [ fnPos, setFnPos ] = useState(ConPos[0]);
    const [ tnImage, setTnImage ] = useState(ConImages[0]);
    const [ tnPos, setTnPos ] = useState(ConPos[0]);

    //사용자가 보고있는 음절의 초성, 종성의 이미지 파일 및 화면 내 위치 정보 매칭
    useEffect(() => {
        for(let i = 0; i < 19; i++){
            if (conList[i] === props.fn) {
                setFnImage(ConImages[i]);
                setFnPos(ConPos[i]);
            }
            if (conList[i] === props.tn) {
                setTnImage(ConImages[i]);
                setTnPos(ConPos[i]);
            }
        }

        console.log(props.tn);
    }, [props])

    
    return (
        <>
        { props.tn === undefined ?
            // 초성만 있는 경우
            <Container style={{width:props.width, paddingBottom:props.width}}>
                <Tongue src={props.image} />
                <Circle style={{top:fnPos[0], left:fnPos[1]}} src={fnImage}/>
            </Container>
            :
            // 초성, 종성 모두 있는 경우
            <Container style={{width:props.width, paddingBottom:props.width}}>
            <Tongue src={props.image} />
            <Circle style={{top:fnPos[0], left:fnPos[1]}} src={fnImage}/>
            <Circle style={{top:tnPos[0], left:tnPos[1]}} src={tnImage}/>
        </Container>

        }
        </>
    )
}

export default ConImageBox;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

position: relative;
height: 0;
overflow: hidden;

box-shadow: 13px 13px 30px rgba(58, 61, 54, 0.16), -20px -20px 25px rgba(255, 255, 255, 0.64);
border-radius: 40px;
`

const Tongue = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 40px;
`

const Circle = styled.img`
position: absolute;
width: 22px;
height: 22px;

top: 55%;
left: 75%;
`
