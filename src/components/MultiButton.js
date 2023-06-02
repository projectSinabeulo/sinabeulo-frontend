import React, { useState }  from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function MultiButton(props) {
    const [text2, setText2] = useState(props.text2);

    return (
        <>
        { text2 ?

        <Container style={{width:props.width, height:props.height}} onClick={() => props.onClick()}>
            <img className='image' src={props.image} style={{width:"42%", height:"42%"}}></img>
            <p className='buttonName1'>{props.text1}</p>
            <p className='buttonName2'>{props.text2}</p>
        </Container>

        :
        <Container style={{width:props.width, height:props.height}} onClick={() => props.onClick()}>
            <img className='image' src={props.image} style={{width:"42%", height:"42%", marginBottom:"10px"}}></img>
            <p className='buttonName1'>{props.text1}</p>
        </Container>
    }
    </>
    )
}

export default MultiButton;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: ${Colors.green1};
box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
border-radius: 40px;

font-weight: 500;
font-size: 20px;
color: ${Colors.gray3};

.image{
    margin-top: 20px;
}

.buttonName1 {
margin-top: -1px;
}

.buttonName2 {
    margin-top: -18px;
    }
`