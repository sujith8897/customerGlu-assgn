import BottomComponent from "./BottomComponent";
import Timer from "./Timer";
import {useState} from 'react';

function App(){

  const [status, setStatus] = useState("PAUSE")
  const [timeLimit, setTimeLimit] = useState(0)



  return(
    <>
    <Timer status={status} timeLimit={timeLimit} />
    <button onClick={()=> {setStatus("PLAY") ;console.log(status)}}>Start</button>
    <button onClick={()=> setStatus("PAUSE")}>Stop</button>
    <BottomComponent/>
    </>
  )
}

export default App;