import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <>
            <nav>
                <i className='bi bi-list toggle-sidebar' onClick={props.toggleSidebar}></i>
                <div class="d-flex justify-content-center align-items-center">
                    <h4 class="fw-bolder">{props.title}</h4>
                </div>
                <div className="nav-width"></div>
                <Link to={"#"} className="nav-link">
                    <i className='bi bi-question-circle icon' ></i>
                </Link>
                <Link to={"#"} className="nav-link">
                    <i className='bi bi-gear icon' ></i>
                </Link>
                <Link to={"#"} className="nav-link">
                    <i className='bi bi-bell icon' ></i>
                </Link>

                {/* <!-- NAVBAR PROFILE--> */}
                <div className="row justify-content-center align-items-center profile-nav">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="profile">
                            <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 p-2">
                        <div className="text-left">
                            <span className="font-h6">Wade Warren</span>
                            <p className="text-gray">wade.warren@mail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 p-1">
                        <div className="dropdown nav-profile">
                            <i role="button" tabindex="0" className='bi bi-chevron-down icon dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item fs-6" type="button"><i className='bi bi-question-circle icon'></i>&nbsp; Profile</button></li>
                                <li><button className="dropdown-item fs-6" type="button"><i className='bi bi-gear icon'></i>&nbsp; Settings</button></li>
                                <li><button className="dropdown-item fs-6" type="button"><i className='bi bi-box-arrow-left icon'></i>&nbsp; Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar