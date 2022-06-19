import React , {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';

const SignUser=()=>{
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPass] = useState("");
    const history=useHistory();

    function handleSubmit(e){
        e.preventDefault();

        let user_data={
            name: name,
            email:email,
            phone:phone,
            password:password
        }

        console.log(user_data);

        axios.post("http://localhost:8000/signup/user" , user_data)
        .then((resp)=>{
                if(resp){
                    history.push("/user");
                }
                else{
                    alert("Unsuccessful registration");
                }
        })
        .catch(err=>console.log(err));
    }

    return (
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
            
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column">
                    <h1>Customer Signup</h1>
                    <input type="text" value={name} placeHolder= "Enter your name"
                                        onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={email} placeHolder="Enter your email"
                                    onChange={(e) => setMail(e.target.value)}/>
                    <input type="text" value={phone} placeHolder="Enter your Phone Number"
                                            onChange={(e) => setPhone(e.target.value)}/>
                    <input type="password" value={password} placeHolder="Enter Password"
                                        onChange={(e) => setPass(e.target.value)}/>
                <input type="submit" />
           </form>
            </div>
        </div>
    );
}

export default SignUser;