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
  return(
    <div>
      <p>{props.statisticsText} {props.statisticsVal}</p>
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

  const all = bad+good+neutral

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
      <Content statisticsText = {buttonText[0]} statisticsVal = {good}/>
      <Content statisticsText = {buttonText[1]} statisticsVal = {neutral}/>
      <Content statisticsText = {buttonText[2]} statisticsVal = {bad}/>
      <Content statisticsText = {summaryText[0]} statisticsVal = {all}/>
      <Content statisticsText = {summaryText[1]} statisticsVal = {((good-bad)/all)*100}/>
      <Content statisticsText = {summaryText[2]} statisticsVal = {(good/all)*100}/>

    </div>
  )
}

export default App