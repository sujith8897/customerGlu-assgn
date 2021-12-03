import {useEffect, useState} from 'react';

function Timer(props){

    const [time, setTime] = useState(0)

    useEffect(() => {
        if(props.status==="PLAY"){
            setTimeout(()=>{
                setTime(time+1);
            },1000)
        }

    }, [props.status,props.timeLimit,time]);

    return(
      <div>
          <h1>{ time  + "s"}</h1>
      </div>
    )
  }
  
  export default Timer;