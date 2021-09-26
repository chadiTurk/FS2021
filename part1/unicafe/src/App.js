import React, { useState } from 'react'

const Button = ({onClickEvent,buttonText}) =>{
  return(
    <button onClick ={onClickEvent}>
      {buttonText}
    </button>
  )
}

const Header = ({headerText}) =>{
  return(
    <h1> {headerText}</h1>
  )
}


const Content = (props) =>{

  const isAllZero = props.statValues.every(item => item === 0);

  if(isAllZero)
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )

  return(
    <div>
      <p>{props.buttonText[0]} {props.statValues[0]}</p>
      <p>{props.buttonText[1]} {props.statValues[1]}</p>
      <p>{props.buttonText[2]} {props.statValues[2]}</p>
      <p>{props.summaryText[0]} {props.numericalSummaries[0]}</p>
      <p>{props.summaryText[1]} {props.numericalSummaries[1]}</p>
      <p>{props.summaryText[2]} {props.numericalSummaries[2]}</p>
    </div>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headerFeedbackText = "give feedback"
  const headerStatisticsText = "statistics"

  const buttonText = ["good","neutral","bad"]
  const summaryText = ["all","average","positive"]
  const statValues = [good,neutral,bad]

  const all = bad+good+neutral
  const average = ((good-bad)/all)*100
  const positive = (good/all)*100

  const numericalSummaries = [all,average,positive]

  const updateGood = () =>{
    setGood(good + 1)
  }

  const updateNeutral = () =>{
    setNeutral(neutral + 1)
  }

  const updateBad = () =>{
    setBad(bad + 1)
  }

  return (
    <div>
      <Header headerText = {headerFeedbackText}/>
      <Button onClickEvent = {updateGood} buttonText = {buttonText[0]}/>
      <Button onClickEvent = {updateNeutral} buttonText = {buttonText[1]}/>
      <Button onClickEvent = {updateBad} buttonText = {buttonText[2]}/>
      <Header headerText = {headerStatisticsText}/>
      <Content buttonText = {buttonText} summaryText = {summaryText} numericalSummaries = {numericalSummaries} statValues = {statValues}/>

    </div>
  )
}

export default App