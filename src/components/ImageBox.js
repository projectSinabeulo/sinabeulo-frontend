import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function ImageBox(props) {
    return (
        // <Container style={{width:props.width, height:props.height}}>
        <Container style={{width:props.width, paddingBottom:props.width}}>
            <img className="image" src={props.image} />
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
