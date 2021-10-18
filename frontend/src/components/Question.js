import * as React from 'react'
import Answer from './Answer'
import styled from 'styled-components'
import {useState} from "react";


export default function Question({question}) {

    const [correctStatus, setCorrectStatus] = useState();
    const [selectedAnswerId, setSelectedAnswerId] = useState();
    const [correctAnswerId, setCorrectAnswerId] = useState();


    return (

            <QuestionContainer correctAnswerId={correctAnswerId}  correctStatus={correctStatus}>
                    <h3>{question.questionText}</h3>
                    <AnswerContainer>
                        {question.answers.map(answer => (
                            <Answer answer={answer}
                                    key={answer.id}
                                    questionId={question.id}
                                    correctStatus={correctStatus}
                                    setCorrectStatus={setCorrectStatus}
                                    selectedAnswerId={selectedAnswerId}
                                    setSelectedAnswerId={setSelectedAnswerId}
                                    correctAnswerId={correctAnswerId}
                                    setCorrectAnswerId={setCorrectAnswerId}
                            />
                        ))}

                    </AnswerContainer>
                    <CheckButton>Check Answer</CheckButton>
            </QuestionContainer>

    )
}


const correctColor = {
    true: "green",
    false: "red"
}


export const QuestionContainer = styled.section`

  background-color: ${props =>
          typeof props.correctStatus === 'undefined' ? "grey" :
            correctColor[props.correctStatus]};
  width: 400px;
  border: 1px solid #009fb7;
  border-radius: 20px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
`


const AnswerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. .'
    '. .';
`
const CheckButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background-color: #757780;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
    color: #757780;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`
