import {useState} from 'react';

function BottomComponent(){
    const dataList = ["Hiii", "How", "Are", "You"];
    const [showContent, setShowContent] = useState(false);

    window.addEventListener('click', function(e){   
        if (document.getElementById('button').contains(e.target)){
            setShowContent(true);
            document.getElementsByTagName('body')[0].style.backgroundColor = "grey"
            document.getElementById('data').style.backgroundColor = "white";

        }else if(!document.getElementById('data').contains(e.target)){
            setShowContent(false);
            document.getElementsByTagName('body')[0].style.backgroundColor = "white"

        }
    });

    function handleClick(){

        
    }

    return(
    <div className="bottom">
        <div className="content" id="content">
            <div className="dataList" style={{display: showContent ? 'block' : 'none' }} id="data" >
                {
                    dataList.map((data)=>{
                        return(
                            <h3 className="data" key={data}>{ data }</h3>
                        )
                    })
                }

            </div>
            <button onClick={handleClick} style={{display: !showContent ? 'block' : 'none' }} id="button">Click Here</button>

        </div>
        

    </div>
      
    )
  }
  
  export default BottomComponent;