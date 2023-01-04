import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function About() {
    const [message, setMesssage] = useState("");
    const {number} = useParams();

    useEffect(()=>{
        if(number){
            setMesssage(`The number is ${number}`);
        }else{
            setMesssage("no number")
        }
    }, [number])
    return <div className="bg-yellow-300">
        <p>This is the about page</p>
        <p>{message}</p>
    </div>
}
export default About