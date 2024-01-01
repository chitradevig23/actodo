import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){

    const navigate =  useNavigate()
    
    const[eusername,seteusername]=useState()
    const[epassword,setepassword]=useState()
    const[ruser,setruser]=useState(true)

    const users=props.users
    
  

function handleUinput(evt){
seteusername(evt.target.value)
}
function handlePinput(evt){
setepassword(evt.target.value)
}

function checkuser(){

    var userfound=false

    users.forEach(function(item)
    {
        if(item.username===eusername && item.password===epassword){
            console.log("succesfull")
            userfound = true
            navigate("/landing",{state:{user:eusername}})
        }
    })
    if(userfound===false)
    {
        console.log("login failed")
        setruser(false)
    }

}

    return( <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium ">Hey Hi!</h1>
       {ruser?<p>I help you manage your activities after you login:) </p>:<p className="text-red-500">Please Signup Before You Login!!</p>} 
        <div className="flex flex-col gap-2 my-2">
            <input 
            type="text"  
            className="w-52 border-black border rounded-md p-1 bg-transparent"
            placeholder="user name"
            onChange={handleUinput}/>
            <input 
            type="text"  
            className="w-52 border-black border rounded-md p-1 bg-transparent"
            placeholder="password"
            onChange={handlePinput}/>

            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>
                Login
            </button>
            <p>Dont have an account?<Link to={"/signup"} className="underline"> Sign up</Link> </p>

        </div>

    </div> 
  
</div>)
}
export default Login