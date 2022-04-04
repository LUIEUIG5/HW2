import {useState, useReducer} from 'react'
import { BsFillArrowUpSquareFill,BsFillArrowDownSquareFill, BsFillAspectRatioFill } from "react-icons/bs";

// const reducer = (state, action) =>{
//     switch(action.type){
//         case "INCREMENT":
//             return{count: state.count + 1,img:<BsFillArrowUpSquareFill className='reducerImage'/>, text: ('we are incrementing')}
//         case "DECREMENT":
//             return {count: state.count - 1,img:<BsFillArrowDownSquareFill className='reducerImage'/> , text: ('we are decrementing')}
//         default:
//             return state;
//     }
// }

const Reducer = () => {

    //using useState

    const [count, setCount] = useState(0)
    const [text, setText] = useState('what are we doing?')
    const [img, setImg] = useState(<BsFillAspectRatioFill/>)



  return (
    <div>
        
        <h1>Using UseStates</h1>
        <br/> 
        <h2 className='secondTitle'>{count} &nbsp;&nbsp; {img}</h2>
        <button className='IncrementBtn'
        onClick={()=>{
            setCount(count+1)
            setImg(<BsFillArrowUpSquareFill className='reducerImage'/>)
            setText('we are incrementing')
           
        }}>
            Increment
        </button>
        <button
        className='DecrementBtn'
        onClick={()=>{
            setCount(count-1)
            setImg(<BsFillArrowDownSquareFill className='reducerImage'/>)
            setText('we are decrementing')
            }}>
            Decrement
        </button>
        <br/>
        <p className='reducerText'>
            {text}..!
        </p>
       
    </div>
  )


//Using Reducer//

// const [state, dispatch] = useReducer(reducer, {count:0, text:'what are we doing?', img:<BsFillAspectRatioFill/>})

// // const [text, setText] = useState('what are we doing?')
// // const [img, setImg] = useState(<BsFillAspectRatioFill/>)



// return (
// <div>
//     <h1>Using UseReducer</h1>
//     <h2 className='secondTitle'>{state.count}{state.img}</h2>
//     <button className='IncrementBtn'
//     onClick={()=>{
//         dispatch({type: "INCREMENT"})
//     }}>
//         Increment
//     </button>
//     <button
//      className='DecrementBtn'
//     onClick={()=>{
//         dispatch({type: "DECREMENT"})
//         }}>
//         Decrement
//     </button>
//     <br/>
//    <p className='reducerText'>
//      {state.text}..!
//    </p>
    
// </div>
// )

}

export default Reducer