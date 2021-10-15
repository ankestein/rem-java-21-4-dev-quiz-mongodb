import * as React from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types'


Answer.propTypes = {
    answer: PropTypes.shape({
        id: PropTypes.string,
        answerText: PropTypes.string,
        isCorrect: PropTypes.bool.isRequired
    }),
    questionId: PropTypes.string,
    correctStatus: PropTypes.bool,
    setCorrectStatus: PropTypes.func,
    selectedAnswerId: PropTypes.string,
    setSelectedAnswerId: PropTypes.func
}


export default function Answer({ answer, questionId, correctStatus, setCorrectStatus, selectedAnswerId, setSelectedAnswerId }) {

    const handleClick = () => {
        setCorrectStatus(answer.isCorrect)
        setSelectedAnswerId(answer.id)
        console.log("handleClick executed!")
        console.log(answer)
        console.log(correctStatus)
        console.log(selectedAnswerId)
    }

  return (
    <AnswerContainer>
      <input type="radio" onChange={() => handleClick()} name={questionId} value={answer} />
      <h4>{answer.answerText}</h4>
    </AnswerContainer>
  )
}



const AnswerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`
