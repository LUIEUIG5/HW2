import './App.css'
import StateTutorial from './UseState/StateTutorial'
import StateTutorial2 from './UseState/StateTutorial2'
import Reducer from './UseReducer/Reducer'
import Effect from './UseEffect/Effect'
import ImperativeHandle from './UseImperative/ImperativeHandle'
import ContextT from './UseContext/ContextT'
import background from './image/background.png'
import Ref from './UseRef/Ref'
import LayoutEffect from './UseLayoutEffect/LayoutEffect'
import UserForm from './form/UserForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import App_To_do from './To_do/To_do'
import To_do from './To_do/To_do'

function App() {
    return (
        <div className="App">
            <div className="title">
                Hello to all!!
                <br />
                Welcome to React Hook Presentation.
            </div>
            <To_do />
            {/* <App_To_do /> */}
            {/* <UserForm /> */}
            {/* <StateTutorial/> */}
            {/* <StateTutorial2 /> */}
            {/* <Reducer/> */}
            {/* <Effect /> */}
            {/* <ImperativeHandle /> */}
            {/* <ContextT/> */}
        </div>
    )
}

export default App
