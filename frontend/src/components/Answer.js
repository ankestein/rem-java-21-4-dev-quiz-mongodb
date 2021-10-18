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


    /*const handleClick = () => {
        if (name.checked) {
            if (name.value === true) {
                name.nextSibling.style.color="purple"
            }
        }
    }

     */

    const handleClick = (event) => {
        console.log(`event target value: ${event.target.value}`)
        console.log(answer)
        console.log(`checked: ${event.target.checked}`)
        setCorrectStatus(answer.isCorrect)

        if (event.target.value === true) {
            setCorrectAnswerId(answer.id)

        }
        console.log(`correct status: ${correctStatus}`)
        console.log(`selected answer id: ${selectedAnswerId}`)
        console.log(`correct answer id: ${correctAnswerId}`)
    }

  return (
    <AnswerContainer >
      <input type="radio" onChange={(event) => handleClick(event)} name={questionId} value={answer.isCorrect} />
      <h4>{answer.answerText}</h4>
    </AnswerContainer>
  )
}

/*
background-color: ${correctAnswerId =>
  correctAnswerId === true ? "lightgreen" : "blue"}
;
 */

const AnswerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`
