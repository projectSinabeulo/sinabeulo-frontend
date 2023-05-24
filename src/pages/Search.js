import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import { Colors } from "../styles/ui";
import ImageButton from "../components/ImageButton"
import icon_search from "../assets/icon_search.png"

function Search() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setWord(e.target.value);
    };

    const onSearchButtonClick = () => {
        console.log(word);
        navigate('/practice', {
            state: {
                inputWord: word
            }
          });
    }

    return (
        <Container>
            <Input onChange={onInputChange} value={word} placeholder="발음 연습하고 싶은 단어를 입력해주세요"/>
            <ImageButton width="103px" height="103px" image={icon_search} onClick={onSearchButtonClick}>
                {/* <Link to="/practice" /> */}
            </ImageButton>
        </Container>
    )
}

export default Search;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 95vh;
`

const Input = styled.input`
    display: flex;
    width: 54vw;
    height: 103px;
    padding-left: 51px;
    margin-right: 20px;

    background: #F0F6F1;
    box-shadow: inset 13px 13px 30px rgba(58, 61, 54, 0.16), inset -20px -20px 25px rgba(255, 255, 255, 0.64);
    border-radius: 30px;
    border:none;

    font-weight: 400;
    font-size: 26px;
    color: ${Colors.gray1};

    :focus {
        outline: none;
    }
`