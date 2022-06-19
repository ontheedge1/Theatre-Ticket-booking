import React from 'react';
import { Link } from "react-router-dom";

function Selection(){
    return(
        <div className="bg-grad">
            <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <h1 className="text-center color-white">BYTs-BookYourTickets</h1><br/><br/>
                <h2 className="text-center color-white">Who Are You?</h2>
			<div className="mt-4 d-flex justify-content-center">
                    <Link className="btn btn-outline-light mb-4" to="/user">Customer</Link>
            {/* <br/>
            <Link to="/cashier">Cashier login</Link>
            */}
                    <Link className="btn btn-outline-light mb-4" to="/theatre">Theatre</Link>
			</div>
			</div>
        </div>
    );
}
export default Selection;