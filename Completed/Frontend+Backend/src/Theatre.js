import React,{useState} from 'react';
import axios from 'axios'
import {Link,useHistory} from "react-router-dom";

var theatre_name

function User(){
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
    const history=useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let user_data={
            name: name,
            password:password
        }

        console.log(user_data);

        axios.post("http://localhost:8000/theatre",user_data)
        .then((resp)=>{
            if(resp.data==="0"){
                alert("Login was unsuccessfull try again");
            }
            else if(resp.data){
                theatre_name = user_data.name
                localStorage.setItem("theatre_name" , theatre_name);
                console.log("user is:"+theatre_name);
                history.push("/dashboard/theatre");
            }
            })
            .catch((err)=>console.log(err));
        }

    return(
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column">
                <h1>Theatre Login</h1>
                <input type="text" value={name} placeHolder="Theater Name"
                                        onChange={(e) => setName(e.target.value)}/>
                <input type="password" value={password} placeHolder="Password"
                                        onChange={(e) => setPass(e.target.value)}/>
                    <input type="submit" className="btn btn-outline-dark mb-4"/><br/>
           
                    <small>Don't have a account?<Link to="/signup/theatre">Click here</Link></small>
                </form>
            </div>
            </div>
    );
}

export default User;