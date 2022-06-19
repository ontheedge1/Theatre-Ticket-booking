import React , {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const BookTicket=()=>{
    const [offer_id, setOffer] = useState("");
    const [movie_name, setMovie] = useState("");
    const history=useHistory();

    var username=localStorage.getItem("username");

    function handleSubmit(e){
        e.preventDefault();

        let user_data={
            customer_name: username,
            movie_name: movie_name,
            offer_id: offer_id,
        }
        console.log(user_data);

        axios.post("http://localhost:8000/user/booktickets" , user_data)
        .then((resp)=>{
                if(resp){
                    alert("Ticket Booked Successfully");
                    history.push("/dashboard/user");
                }
                else{
                    alert("Error, retry again");
                }
        })
        .catch(err=>console.log(err));
    }

    return(
            <div className="bg-grad">
                <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className="form-cont d-flex flex-column"><h1>Book Ticket</h1>
                <input type="text" value={movie_name} placeHolder="Movie Name"
                                    onChange={(e) => setMovie(e.target.value)}/>
                <input type="text" value={offer_id} placeHolder="Discount Code" onChange={(e) => setOffer(e.target.value)}/>

                <input type="submit" />
           </form>
            </div>
            </div>

    );
}

export default BookTicket;