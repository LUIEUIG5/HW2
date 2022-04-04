import {useState} from 'react'

const StateTutorial2 = () => {

    const [inputValue, setInputValue] = useState('Abc')
  
    //JavaScript
    let onChange = (e)=> {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    return (
    <div>
        <h1>Using UseStates</h1>
        <br/> 
        <input placeholder='Please enter somethong' onChange={onChange}/>
        <br/>
        <div>
        Hello {inputValue}!
        </div>
    </div>
  )
}

export default StateTutorial2