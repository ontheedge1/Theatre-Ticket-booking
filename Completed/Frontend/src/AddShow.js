import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


function AddShow(){
    const [name, setName] = useState("");
    const [language, setLanguage] = useState(0);
    const [show_date, setDate] = useState("");
    const [start_time, setStart] = useState("");
    const [end_time,setEnd] = useState("");
    const [screen_no,setScreen] = useState(0);
    const history=useHistory();

    var theatre_name=localStorage.getItem("theatre_name");
    const handleSubmit = (event) => {
        event.preventDefault();

        let user_data={
            movie_name: name,
            show_date:show_date,
            start_time:start_time,
            end_time:end_time,
            theatre_name:theatre_name,
            language:language,
            screen_no:screen_no
        }
        console.log(user_data);
        axios.post("http://localhost:8000/dashboard/addshow",user_data)
        .then((resp)=>{
            if(resp.data==="0"){
                alert("Adding movie was unsuccessful try again");
            }
            else if(resp.data){
                alert("Show added successfully");
                history.push("/dashboard/theatre");
            }
            })
            .catch((err)=>console.log(err));
        }

    return(
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
            
            <br/>
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column"><h1>Add Show</h1>
                <input type="text" value={name} placeHolder="Movie Name"
                                        onChange={(e) => setName(e.target.value)}/>
                    <label>Language:</label><input type="number" value={language}
                                        onChange={(e) => setLanguage(e.target.value)}/><br/>                                   
                  <input type="text" value={show_date} placeHolder="ShowDate"
                                    onChange={(e) => setDate(e.target.value)}/>
                    <input type="text" value={start_time} placeHolder="StartTime"
                                            onChange={(e) => setStart(e.target.value)}/>
                    <input type="text" value={end_time} placeHolder="EndTime"
                                        onChange={(e) => setEnd(e.target.value)}/><br/>
                    <label>Screen</label><input type="number" value={screen_no} placeHolder="Screen"
                                        onChange={(e) => setScreen(e.target.value)}/>
                <input type="submit" /><br/>
           </form>
            </div>
            </div>
    )
}

export default AddShow;