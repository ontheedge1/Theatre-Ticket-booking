import React,{useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function UserDash(){
    const [bookings, setBookings] = useState(['none']);
    const [isShowBooking, setShowBooking] = useState(false);
    const [movies,setMovies] = useState([]);
    const [isShowMovies,setShowMovies] = useState(false);

    var username=localStorage.getItem("username")

    const getBookingData=()=>{
        setShowBooking(!isShowBooking);
        axios.get("http://localhost:8000/dashboard/booked/"+username)
        .then((resp)=>{
            if(resp=='0'){
                alert("No tickets booked")
            }
            setBookings(resp.data);
        })
        .catch((err)=>console.log(err));
    }

    const getMovieData=()=>{
        setShowMovies(!isShowMovies);
        axios.get("http://localhost:8000/dashboard/movies")
        .then((resp)=>{
            setMovies(resp.data);
        })
        .catch((err)=>console.log(err));
    }

    return(
        <div className="bg-grad vh-100 ps-4">
            <h1 className="text-center pt-4">User Dashboard</h1>
            <h2 className="text-center">Welcome {username}</h2>
            <input type="button" value="Show Bookings" className="btn btn-outline-light mb-4" onClick={() => getBookingData()}/><br/>
            <ul>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Movie</th>
                            <th scope="col">Screen</th>
                            <th scope="col">Seat No.</th>
                            <th scope="col">Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                {bookings.length && bookings.map((data)=>{
                return (
                    <tr>

                        <td>{data.movie_name}</td>
                       
                        <td>{data.screen_no}</td>
                      
                        <td>{data.seat_no}</td>
                        <td>{data.final_price}</td>
                    </tr>
                    
                )
                })}
                    </tbody>
                </table>
            </ul>
            <input type="button" value="Show Movies" className="btn btn-outline-light mb-4" onClick={() => getMovieData()}/><br/>
            <ul>
            {isShowMovies && movies.map((data)=>{
                return(
                    <li>{"theatre: "+data.theatre_name+" || " +"movie: "+data.movie_name+" || "+ "release date: "+data.release_date+" || "+ "language: "+data.language+" || "}</li>
                )
            })}
            </ul>
            <Link to="/bookticket"><input className="btn btn-outline-light" type="button" value="Book Tickets"/></Link><br/>
        </div>
    )
}

export default UserDash;