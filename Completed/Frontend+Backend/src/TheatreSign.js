import React , {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';

const SignTheatre=()=>{
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
    const [address, setAddress] = useState("");
    const history=useHistory();

    function handleSubmit(e){
        e.preventDefault();

        let user_data={
            name: name,
            address: address,
            password:password
        }

        console.log(user_data);

        axios.post("http://localhost:8000/signup/theatre" , user_data)
        .then((resp)=>{
                if(resp){
                    history.push("/theatre");
                }
                else{
                    alert("Unsuccessful registration");
                }
        })
        .catch(err=>console.log(err));
    }

    return(
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column"><h1>Theatre Signup</h1>
                <input type="text" value={name} placeHolder="Theatre Name"
                                        onChange={(e) => setName(e.target.value)}/>
                <input input type="text" value={address} placeHolder="Address"
                                        onChange={(e) => setAddress(e.target.value)}/>         
                <input type="password" value={password} placeHolder="Password"
                                        onChange={(e) => setPass(e.target.value)}/>
                    <input type="submit" className="btn btn-outline-dark mb-4" />
           </form>
            </div>
            </div>
    );
}

export default SignTheatre;