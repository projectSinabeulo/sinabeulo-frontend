import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function OuterBox(props) {
    return (
        <Container style={{position: props.position, width:props.width, height:props.height}}>
            <div className='text'>{props.text}</div>
        </Container>
    )
}

export default OuterBox;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

background: ${Colors.green1};
box-shadow: 14px 14px 35px rgba(74, 77, 68, 0.16), -11px -11px 30px #FFFFFF;
border-radius: 30px;

.text{
    font-weight: 700;
    font-size: 60px;
    color: ${Colors.gray4};
}
`