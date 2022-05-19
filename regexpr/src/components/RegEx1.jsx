import { useState } from "react";

export const RegEx1 = () =>
{
    //const regemail =  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [emailmsg,setEmailmsg] = useState("")
    
    const checkEmail = (e) =>
    {
        // console.log(e.target.value);
        if(regemail.test(e.target.value) === false)
        {
            setEmailmsg('Not Valid');            
        }
        else
        {
            setEmailmsg('Valid :)');            
        }
    }

    console.log(emailmsg);

    return(
        <>
            <div>
                <label>
                    Email : {"  "}
                </label>
                <input type={"text"} onChange={checkEmail} />
            </div>
            <br />
            <label>{emailmsg}</label>
            <br /><br />
            <div>
                <button>
                    Submit
                </button>
            </div>


        </>
    )
}