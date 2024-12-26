import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;