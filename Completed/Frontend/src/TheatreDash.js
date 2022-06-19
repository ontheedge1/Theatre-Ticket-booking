import React,{useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function TheatreDash(){
    const [isShowMovie, setShowMovie] = useState(false);
    const [movies,setMovies] = useState([]);
    var username=localStorage.getItem("theatre_name")

    const getMovieData=()=>{
        setShowMovie(!isShowMovie);
        axios.get("http://localhost:8000/dashboard/moviesRun/"+encodeURI(username))
        .then((resp)=>{
            console.log(resp.data)
            setMovies(resp.data);
            console.log(movies);
        })
        .catch((err)=>console.log(err));
    }

    return(
        <div className="bg-grad vh-100 ">
            <h1 className="text-center pt-4">Theatre Dashboard</h1>
            <h2 className="text-center">Welcome {username}</h2>
            <div className="d-flex justify-content-center my-4">
                <input type="button" value="Movies Running" className="btn btn-outline-dark mb-4" onClick={() => getMovieData()} /><br />
                </div>
            <ul>
                 <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">Movie</th>
                                            <th scope="col">ReleasedOn</th>
                                            <th scope="col">Screen</th>
                                            <th scope="col">StartTime</th>
                                            <th scope="col">EndTime</th>
                                            <th scope="col">Language</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                
                   {isShowMovie && movies.map((data) => {
                            return (

                               
                                
                                <tr>

                                    <td>{data.movie_name}</td>
                                    <td>{data.release_date}</td>
                                    <td>{data.screen_no}</td>
                                    <td>{data.start_time}</td>
                                    <td>{data.end_time}</td>
                                    <td>{data.language}</td>
                                 </tr>
                                    )
                        })}

                                    </tbody>
                                </table>
            </ul>
            <div className="d-flex justify-content-center">   
                <Link to='/addMovie'><input className="btn btn-outline-dark mb-4" type='button' value='Add Movie'/></Link>
                <Link to='/addShow'><input className="btn btn-outline-dark mb-4" type='button' value='Add Show' /></Link>
                </div>
        </div>
    )    
}

export default TheatreDash;