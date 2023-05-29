import React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

function HrBox(props) {
    return (
        <Container style={{width:props.width}}>
        </Container>
    )
}

export default HrBox;

const Container = styled.div`
height: 6px;

background: ${Colors.green1};
box-shadow: inset 1px 1px 2px rgba(58, 61, 54, 0.16), inset -1px -1px 1px rgba(255, 255, 255, 0.64);
border-radius: 40px;
`
