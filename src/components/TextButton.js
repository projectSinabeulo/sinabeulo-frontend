import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function TextButton(props) {
    return (
        <Container style={{width:props.width, height:props.height}} onClick={() => props.onClick()}>
            <p className='buttonName1'>{props.text}</p>
        </Container>
    )
}

export default TextButton;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

background: ${Colors.green1};
box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
border-radius: 25px;

font-weight: 500;
font-size: 20px;
color: ${Colors.gray3};
`