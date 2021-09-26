import React, { useState } from 'react'

const Header = ({headerText}) =>{
  return(
    <h1>{headerText}</h1>
  )
}

const Anecdote = (props) =>{
  return(
    <div>
      <p>{props.anecdote}</p>
    </div>
  )
}

const Vote = ({votes}) =>{
  return(
    <div>
    <p> has {votes} votes</p>
    </div>
  )
}

const Button = (props) =>{
  return(
    <button onClick = {props.onClickEvent}>
      {props.buttonText} 
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState([1,1,1,1,1,1,1])
  let indexOfMostVoted = 0

  const randomNumber = (min,max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
  }

  const nextAnecdote = () =>{
    setSelected(randomNumber(0,anecdotes.length-1))
  }

  const updateVote = () =>{
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  function indexOfMax(arr) {
    const copy = [...arr]
    if (copy.length === 0) {
        return -1;
    }

    var max = copy[0];
    var maxIndex = 0;

    for (var i = 1; i < copy.length; i++) {
        if (copy[i] > max) {
            maxIndex = i;
            max = copy[i];
        }
    }
     indexOfMostVoted = maxIndex
    } 

  indexOfMax(votes)

  return (
    <div>
      <Header headerText = {"Anecdote of the day"}/>
      <Anecdote anecdote = {anecdotes[selected]} />
      <Vote votes = {votes[selected]}/>
      <Button onClickEvent = {updateVote} buttonText = {"vote"}/>
      <Button onClickEvent = {nextAnecdote} buttonText={"next anecdote"}/> 
      <Header headerText = {"Anecdote with most votes"}/>
      <Anecdote anecdote = {anecdotes[indexOfMostVoted]}/>
      <Vote votes ={votes[indexOfMostVoted]}/>
    </div>
  )
}

export default App