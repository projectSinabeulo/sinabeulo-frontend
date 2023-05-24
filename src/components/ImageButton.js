import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function ImageButton(props) {
    return (
        <Container style={{width:props.width, height:props.height}} onClick={() => props.onClick()}>
            <img src={props.image} style={{width:"42%", height:"42%"}}></img>
        </Container>
    )
}

export default ImageButton;

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;

background: ${Colors.green1};
box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
border-radius: 30px;
border: none;
`
