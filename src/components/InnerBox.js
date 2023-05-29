import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function InnerBox(props) {
    return (
        <Container style={{position: props.position, width:props.width, height:props.height}}>
        </Container>
    )
}

export default InnerBox;

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;

background: ${Colors.purple1};
box-shadow: inset 13px 13px 30px rgba(58, 61, 54, 0.16), inset -20px -20px 25px rgba(255, 255, 255, 0.64);
border-radius: 30px;
`