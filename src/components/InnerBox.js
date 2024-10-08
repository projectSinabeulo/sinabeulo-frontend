import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function InnerBox(props) {
    return (
        <Container style={{position: props.position, width:props.width, height:props.height}}>
            <div className='text'>{props.text}</div>
        </Container>
    )
}

export default InnerBox;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

background: ${Colors.green1};
box-shadow: inset 13px 13px 30px rgba(58, 61, 54, 0.16), inset -20px -20px 25px rgba(255, 255, 255, 0.64);
border-radius: 20px;

.text{
    width: 50%;
    line-height: 35px;
    font-weight: 400;
    font-size: 22px;
    color: ${Colors.gray3};
}
`