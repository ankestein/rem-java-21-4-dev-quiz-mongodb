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
    setSelectedAnswerId: PropTypes.func,
    correctAnswerId: PropTypes.string,
    setCorrectAnswerId: PropTypes.func,
}


export default function Answer({ answer, questionId, correctStatus, setCorrectStatus, selectedAnswerId,
                                   setSelectedAnswerId, correctAnswerId, setCorrectAnswerId }) {


    const handleClick = (event) => {
        setCorrectStatus(answer.isCorrect)

        if (event.target.value === true) {
            setCorrectAnswerId(answer.id)

        }
    }

  return (
    <AnswerContainer >
      <input type="radio" onChange={(event) => handleClick(event)} name={questionId} value={answer.isCorrect} />
      <h4>{answer.answerText}</h4>
    </AnswerContainer>
  )
}


const AnswerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`
