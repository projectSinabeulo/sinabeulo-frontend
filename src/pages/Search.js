import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import styled from "@emotion/styled";
import axios from 'axios';
import { Colors } from "../styles/ui";
import { ImageButton } from "../components"

import icon_search from "../assets/icon_search.png"

function Search() {
    const navigate = useNavigate();
    const [inputWord, setInputWord] = useState('');

    //표준 발음 변환 api 호출
    async function transInputWord() {
        try {
          const response = await axios.post('/second',{
              word: inputWord,
          });
          navigate('/practice', { 
            state: {
                inputWord: inputWord,
                transWord: response.data
            }
        });
    

        //검색이 불가한 단어를 입력했을 떄, 경고창 출력
        } catch (error) {
            console.error("/second error message: " + error);
            Swal.fire({
                icon: "error",
                title: "검색 불가",
                text: `[${inputWord}]는 검색이 불가한 단어입니다.\n다른 단어를 검색해주세요`,
                showCancelButton: false,
                confirmButtonText: "확인",
                confirmButtonColor: "#407C46"
            }).then((res) => {
                window.location.replace("/"); 
            });
        }
      }

    const onInputChange = (e) => {
        setInputWord(e.target.value);
    };

    //검색 버튼 클릭시 연습 화면으로 이동, 사용자 입력 단어 전달
    const onSearchButtonClick = () => {
        transInputWord();
    }

    const onSearchButtonDown = (e) => {
        if(e.key == "Enter"){
            transInputWord();
        }
    }

    return (
        <Container>
            <Input placeholder="발음 연습하고 싶은 단어를 입력해주세요" onChange={onInputChange} value={inputWord} onKeyDown={onSearchButtonDown}/>
            <ImageButton width="103px" height="103px" image={icon_search} onClick={onSearchButtonClick} />
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

    background: ${Colors.green1};
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