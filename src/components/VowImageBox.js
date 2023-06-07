import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

import image_lip1 from "../assets/image_lip1.png"
import image_lip2 from "../assets/image_lip2.png"
import image_lip3 from "../assets/image_lip3.png"
import image_lip4 from "../assets/image_lip4.png"
import image_lip5 from "../assets/image_lip5.png"
import image_lip6 from "../assets/image_lip6.png"
import image_lip7 from "../assets/image_lip7.png"
import image_lip8 from "../assets/image_lip8.png"
import image_lip9 from "../assets/image_lip9.png"
import image_lip10 from "../assets/image_lip10.png"
import image_lip11 from "../assets/image_lip11.png"
import image_lip12 from "../assets/image_lip12.png"
import image_lip13 from "../assets/image_lip13.png"
import image_lip14 from "../assets/image_lip14.png"
import image_lip15 from "../assets/image_lip15.png"
import image_lip16 from "../assets/image_lip16.png"
import image_lip17 from "../assets/image_lip17.png"
import image_lip18 from "../assets/image_lip18.png"
import image_lip19 from "../assets/image_lip19.png"

function ImageBox(props) {
    const [ snImage, setSnImage ] = useState(image_lip1);      //현재 사용자가 보고있는 단어의 중성(모음) 이미지

    const vowList = [
        "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ",
        "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ",
        "ㅙ", "ㅛ", "ㅜ", "ㅝ", "ㅟ",
        "ㅠ", "ㅡ", "ㅢ", "ㅣ", "ㅚ", "ㅞ"
    ];
    const vowImages = [
        image_lip1, image_lip2, image_lip3, image_lip4, image_lip5,
        image_lip6, image_lip7, image_lip8, image_lip9, image_lip10,
        image_lip11, image_lip12, image_lip13, image_lip14, image_lip15,
        image_lip16, image_lip17, image_lip18, image_lip19
    ]

    useEffect(() => {
        for(let i = 0; i < 21; i++) {
            if (vowList[i] == props.sn){
                if(i < 19) { setSnImage(vowImages[i]); }
                else { setSnImage(vowImages[10]); }                    //ㅙ, ㅚ, ㅞ는 입모양이 동일함
                break;
            }
        }
    }, [props])

    return (
        // <Container style={{width:props.width, height:props.height}}>
        <Container style={{width:props.width, paddingBottom:props.width}}>
            <img className="image" src={snImage} />
        </Container>
    )
}

export default ImageBox;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

position: relative;
height: 0;
overflow: hidden;

box-shadow: 13px 13px 30px rgba(58, 61, 54, 0.16), -20px -20px 25px rgba(255, 255, 255, 0.64);
border-radius: 40px;

.image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 40px;
}
`
