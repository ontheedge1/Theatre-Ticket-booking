import React,{useState} from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom";

function AddMovie(){
    const [name, setName] = useState("");
    const [director, setDirector] = useState("");
    const [release_date, setDate] = useState("");
    const [actor, setActor] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("");
    const history=useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let user_data={
            name: name,
            director:director,
            release_date:release_date,
            actor:actor,
            age:age,
            gender:gender
        }

        axios.post("http://localhost:8000/dashboard/addmovie",user_data)
        .then((resp)=>{
            if(resp.data==="0"){
                alert("Adding movie was unsuccessful try again");
            }
            else if(resp.data){
                console.log("In add movie:"+resp);
                alert("Movie added successfully");
                history.push("/dashboard/theatre");
            }
            })
            .catch((err)=>console.log(err));
        }

    return(
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
            
            
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column"><h1>Add Movie</h1>
                    <input type="text" value={name} placeHolder="Enter Movie Name"
                                        onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={director} placeHolder="Enter director name"
                                    onChange={(e) => setDirector(e.target.value)}/>
                    <input type="text" value={release_date} placeHolder="Enter Release Date"
                                            onChange={(e) => setDate(e.target.value)}/>
                    <input type="text" value={actor} placeHolder="Actor Name"
                                        onChange={(e) => setActor(e.target.value)}/>
                    <label>Age</label><input type="number" value={age} placeHolder="Actor Age"
                        onChange={(e) => setAge(e.target.value)} />
                    <input type="text" value={gender} placeHolder="Gender"
                                        onChange={(e) => setGender(e.target.value)}/>
                <input type="submit" /><br/>
           </form>
            </div>
            </div>
    )
}

export default AddMovie;