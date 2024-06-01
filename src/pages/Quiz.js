import React, { useState } from 'react'
import data from '../data'
import "./Quiz.css"
import Result from './Result'

const Quiz = () => {
    const [question, setQuestion] = useState(0)
    const [clicked, setClicked] = useState(0);
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)

    const next = () => {
        updateScore()
        if (question < data.length-1) {
            setQuestion(question + 1)
        } else {
            setResult(true)
        }
    }


    const updateScore = () => {
        if(clicked === data[question].answer){
            setScore(score+1)
        }
    }
    return (
        <>
        {
            result ? (
                <Result score = {score} total = {data.length}/>
            ) : (
                <div className="container text-center ">
                <div className='questions-div shadow p-3 mb-5 bg-white rounded'>
                    <div className="questions">
                        <span>{question + 1}) </span>
                        <span>{data[question].question}</span>
                    </div>
                    <div className="options">
                        {
                            data[question].options.map((option, i) => (
                                <button className='btn option-btn' onClick={() => setClicked(i)}>{option}</button>
                            ))
                        }
                    </div>
                    <div className="next-button">
                        <button className='btn btn-success mt-3 next-btn' onClick={next}>Next</button>
                    </div>
                </div>
            </div>
            )
        }
            
        </>
    )
}

export default Quiz