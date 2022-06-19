import React,{useState} from 'react';
import axios from 'axios'
import {Link,useHistory} from "react-router-dom";

var username

function User(){
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPass] = useState("");
    const history=useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let user_data={
            name: name,
            email:email,
            phone:phone,
            password:password
        }

        axios.post("http://localhost:8000/user",user_data)
        .then((resp)=>{
            if(resp.data=="0"){
                alert("Login was unsuccessfull try again");
            }
            else if(resp.data){
                username = user_data.name
                localStorage.setItem("username" , username);
                console.log("user is:"+username);
                history.push("/dashboard/user");
            }
            })
            .catch((err)=>console.log(err));
        }

    return (
        <div className="bg-grad">
        <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column">
                <h1>Customer Login</h1>

                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeHolder="name"/>
                <input type="text" value={email}
                        onChange={(e) => setMail(e.target.value)} placeHolder="email"/>
                <input type="text" value={phone}
                        onChange={(e) => setPhone(e.target.value)} placeHolder="phone Number"/>
                <input type="password" value={password}
                        onChange={(e) => setPass(e.target.value)} placeHolder="Password"/>
                <input type="submit" />
                    <small>Don't have a account?<Link to="/signup/user">Click here</Link></small>
                </form>
           
            </div>
            </div>
    );
}

export default User;