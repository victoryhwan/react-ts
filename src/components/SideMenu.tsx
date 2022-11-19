import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function SideMenu() {
    // const [message, setMesssage] = useState("");
    // const {number} = useParams();

    // useEffect(()=>{
    //     if(number){
    //         setMesssage(`The number is ${number}`);
    //     }else{
    //         setMesssage("no number")
    //     }
    // }, [])
    return <div className="bg-yellow-300">
        <p>Side Menu</p>
        {/* <p>{message}</p> */}
    </div>
}
export default SideMenu