import * as React from 'react'
import styled from 'styled-components'
import {useState} from "react";

export default function Answer({ answer, questionId, correctStatus, setCorrectStatus }) {

    const handleClick = () => {
        setCorrectStatus(answer.isCorrect)
        console.log("handleClick executed!")
        console.log(answer)
    }

  return (
    <AnswerContainer>
      <input type="radio" onClick={() => handleClick()} name={questionId} />
      <h4>{answer.answerText}</h4>
    </AnswerContainer>
  )
}


const AnswerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`
